const express = require('express')
const BookRouters = require('./routes/BookRoutes')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/books',BookRouters)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))