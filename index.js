const express = require('express')
const app = express()
const port = 3000

app.use(express.static('assets'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/assets/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})