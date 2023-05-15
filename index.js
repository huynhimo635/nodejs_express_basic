
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')


const app = express()
const port = 3000

// HTTP Logger
app.use(morgan('dev'))

// Template Engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');


app.get('/', (req, res) => res.render('home'))

app.listen(port, () => `Testing Listen port: ${port}`)