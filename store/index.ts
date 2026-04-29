import { createStore } from 'vuex'
import { answers, categories, locations, pages, testimonials } from '~/data/mock-content'

function filterLocations(queryString = '') {
  const query = String(queryString || '').replace(/^\?query=/, '').trim().toLowerCase()
  if (!query) {
    return locations
  }

  return locations.filter((item) => {
    const haystack = [
      item.name,
      item.address,
      item.city,
      item.state,
      item.zipcode,
    ].join(' ').toLowerCase()
    return haystack.includes(query)
  })
}

export const store = createStore({
  state: () => ({
    categories: [] as typeof categories,
    answers: [] as typeof answers,
    testimonials: [] as typeof testimonials,
    pages: [] as typeof pages,
    locations: [] as typeof locations,
  }),
  mutations: {
    setCategories(state, value) {
      state.categories = value
    },
    setAnswers(state, value) {
      state.answers = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setPages(state, value) {
      state.pages = value
    },
    setLocations(state, value) {
      state.locations = value
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit('setCategories', categories)
      commit('setAnswers', answers)
      commit('setTestimonials', testimonials)
      return categories
    },
    async fetchPages({ commit }) {
      commit('setPages', pages)
      return pages
    },
    async fetchLocations({ commit }, queryString = '') {
      const filtered = filterLocations(queryString)
      commit('setLocations', filtered)
      return filtered
    },
  },
})
