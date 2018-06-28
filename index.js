const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool, Client } = require('pg')
const connectionString = 'postgres://sedeggwijpebdf:b308fcb24aa52b76b98e51ba0456d02926573d5393e1f8edd111045d4e937968@ec2-54-243-61-173.compute-1.amazonaws.com:5432/d7enbr73t7iv7u'

// In order to use JSON 
var bodyParser = require('body-parser');
express()
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/getPerson', function(req, res){

	res.render('pages/index');

  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



  const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  console.log('OSVALDO IS HERE ***********************')
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  console.log('THERE IT IS *****************')
  client.end()
})


