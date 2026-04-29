import { categories } from '~/data/mock-content'

export default {
  async getCategories() {
    return { data: categories }
  },
}
