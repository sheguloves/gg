const path = require('path')
const request = require('request')
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3333

app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static', 'index.html'))
})

app.get('/init', (req, res) => {
    request({
        url: 'https://kyfw.12306.cn/otn/login/init',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
        }
    }, function(error, response, body) {
        console.log(response.headers)
        console.log(body)
    })
    .pipe(res)
})

app.

app.listen(port, () => {
    console.log(`Server is running on ${port}!`)
})