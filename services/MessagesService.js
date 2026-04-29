export default {
  async sendMessage(payload) {
    return {
      data: {
        ok: true,
        payload,
      },
    }
  },
}
