import express from 'express'
import clienteRouter from './routes/clienteRouter.js'
import produtoRouter from './routes/produtoRouter.js'
import vendasRouter from './routes/vendasRouter.js'
import sequelize from './config/tenisdatabase.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
})

app.use('/clientes', clienteRouter)
app.use('/produtos', produtoRouter)
app.use('/vendas', vendasRouter)

app.use((req, res) => {
    res.status(404).json({
        erro: 'Rota não encontrada'
    })
})

try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(3000, () => {
        console.log('Servidor rodando!')
    })
} catch (erro) {
    console.error('Falha ao iniciar:', erro)
    process.exit(1)
}
