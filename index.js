const express = require('express')
const app = express()

app.use((req, res) => {
  res.redirect(301, `https://nuxt-firebase-sns-example.potato4d.me${req.originalUrl}`)
})

app.listen(process.env.PORT || 3000, '0.0.0.0')
