import { churchAccounts, locations } from '~/data/mock-content'

function normalize(value) {
  return String(value || '').trim().toLowerCase()
}

export default {
  async getAccountBySlug(slug) {
    const record = churchAccounts.find((item) => item.slug === slug)
    return { data: record || {} }
  },
  async getLocationByAccount(accountId) {
    const record = locations.find((item) => item.account_id === Number(accountId))
    return { data: record || {} }
  },
  async generate_answer({ question }) {
    const searchWord = normalize(question).split(/\s+/).find(Boolean) || 'hope'
    return {
      data: {
        result: {
          answer: `This browser preview uses mock AI output. A real backend could return a richer answer for: "${question}".`,
          word: searchWord,
        },
      },
    }
  },
}
