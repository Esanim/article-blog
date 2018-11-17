import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArticles: [],
      token: null
    },
    mutations: {
      setArticles(state, articles) {
        state.loadedArticles = articles
      },
      addArticle(state, article) {
        state.loadedArticles.push(article)
      },
      editArticle(state, editedArticle) {
        const articleIndex = state.loadedArticles.findIndex(
          article => article.id === editedArticle.id
        )
        state.loadedArticles[articleIndex] = editedArticle
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/articles.json')
          .then(data => {
            const articlesArray = []
            for (const key in data) {
              articlesArray.push({...data[key], id: key})
            }
            vuexContext.commit('setArticles', articlesArray)
          })
          .catch(err => context.error(err))
      },
      addArticle(vuexContext, article) {
        const createdArticle = {
          ...article,
          updatedDate: new Date()
        }
        return this.$axios
          .$post(
            '/articles.json?auth=' + vuexContext.state.token,
            createdArticle
          )
          .then(data => {
            vuexContext.commit('addArticle', {
              ...createdArticle,
              id: data.name
            })
          })
          .catch(e => console.log(e))
      },
      editArticle(vuexContext, editedArticle) {
        return this.$axios
          .$put(
            '/articles/' +
              editedArticle.id +
              '.json?auth=' +
              vuexContext.state.token,
            editedArticle
          )
          .then(() => {
            vuexContext.commit('editArticle', editedArticle)
          })
          .catch(e => console.log(e))
      },
      setArticles(vuexContext, articles) {
        vuexContext.commit('setArticles', articles)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
          process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
            process.env.fbAPIKey
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpirationDate',
              +result.expiresIn * 1000
            )
            Cookie.set('jwt', result.idToken)
            Cookie.set('expirationDate', +result.expiresIn * 1000)
          })
          .catch(e => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token = '',
          expirationDate = ''
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpirationDate')
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token or expired')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpirationDate')
        }
      }
    },
    getters: {
      loadedArticles(state) {
        return state.loadedArticles
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
