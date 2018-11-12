import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArticles: []
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
          .$post('/articles.json/', createdArticle)
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
          .$put('/articles/' + editedArticle.id + '.json', editedArticle)
          .then(() => {
            vuexContext.commit('editArticle', editedArticle)
          })
          .catch(e => console.log(e))
      },
      setArticles(vuexContext, articles) {
        vuexContext.commit('setArticles', articles)
      }
    },
    getters: {
      loadedArticles(state) {
        return state.loadedArticles
      }
    }
  })
}

export default createStore
