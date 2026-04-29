import { churchAccounts } from '~/data/mock-content'

export default {
  async getByAccount(accountId) {
    const account = churchAccounts.find((item) => item.id === Number(accountId))
    return {
      data: account?.welcome_video || null,
    }
  },
}
