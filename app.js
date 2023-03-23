import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send("hello wolrd let's deploy")
})

app.listen(8080, () => {
    console.log('server on 8080');
})