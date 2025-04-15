Page({
  data: {
    fullTime: '',
    shortDate: ''
  },
  onLoad() {
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
  },
  onUnload() {
    clearInterval(this.timer)
  },
  updateTime() {
    const now = new Date()
    const fullTime = `${now.getFullYear()}年${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}月${now
      .getDate()
      .toString()
      .padStart(2, '0')}日 ${now
      .getHours()
      .toString()
      .padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now
      .getSeconds()
      .toString()
      .padStart(2, '0')}`
    const shortDate = `${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`
    this.setData({ fullTime, shortDate })
  }
})