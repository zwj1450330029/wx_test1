export default (url, method = "GET", data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success: (res) => {
        console.log('======res', res)
        resolve(res.data)
      },
      fail: (err) => {
        console.log('========err', err)
        reject(err)
      }
    })
  })
}