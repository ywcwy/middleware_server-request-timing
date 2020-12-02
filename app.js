const express = require('express')
const app = express()
const port = 3000
const dateDisplayed = function () { // 將毫秒數換算成 年-日-月 星期 時：分：秒
  let date = new Date()  // 建立時間
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (date.getFullYear() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getDate() + ' ' + day[date.getDay()] + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
}


// mounted on the /user/:id path, 可於任何 HTTP request method 上執行
app.use('/', function (req, res, next) {
  // 得到 request 接到任務的時間並console.log出以下
  console.log(dateDisplayed(Date.now()) + ' | ' + req.method + ' from ' + req.originalUrl)
  // 以 req.method 得到 http 的請求方法
  // 以 req.originalUrl 得到 http 要求的路徑
  next()  //用next() 把任務傳給下一位
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/save', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})



