express = require('express')
app = express()
port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/test1', (req, res) => {
  var a = 1
  var b = 2

  var c = ++a + b++

  return res.send('Hello Test1')
})

app.listen(port, () => `Testing Listen port: ${port}`)