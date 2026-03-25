import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.static('conversor/front-end'))  // serve seu HTML/CSS/JS

app.get('/converter', async (req, res) => {
    const { origem, destino, valor } = req.query

    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${origem}`
        )
        const data = await response.json()
        const taxa = data.conversion_rates[destino]

        res.json({ taxa, resultado: valor * taxa })
    } catch (err) {
        res.status(500).json({ erro: 'Falha ao buscar cotação' })
    }
})

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))