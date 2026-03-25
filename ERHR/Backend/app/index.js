const express = require('express')
const cors    = require('cors')
const dotenv  = require('dotenv')
const db      = require('./models/index')
const router  = require('./routes/index')

dotenv.config()

const app  = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.json({ message: 'API Server is running!' })
})

db.sequelize.sync().then(() => {
    console.log('✅ Database connected successfully')
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('❌ Failed to connect:', err.message)
})