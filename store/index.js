import Vuex from 'vuex'
import axios from 'axios'

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
        return axios
          .get('https://nuxt-blog-a71f9.firebaseio.com/articles.json')
          .then(res => {
            const articlesArray = []
            for (const key in res.data) {
              articlesArray.push({...res.data[key], id: key})
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
        return axios
          .post(
            'https://nuxt-blog-a71f9.firebaseio.com/articles.json/',
            createdArticle
          )
          .then(result => {
            vuexContext.commit('addArticle', {
              ...createdArticle,
              id: result.data.name
            })
          })
          .catch(e => console.log(e))
      },
      editArticle(vuexContext, editedArticle) {
        return axios
          .put(
            'https://nuxt-blog-a71f9.firebaseio.com/articles/' +
              editedArticle.id +
              '.json',
            editedArticle
          )
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
