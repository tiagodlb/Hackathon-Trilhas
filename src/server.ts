import app from './app.js'
import createEstacao, { listEstacao } from './controllers/estacaoController.js';

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

app.post('/createEstacao', createEstacao);
app.get('/listEstacao/:id', listEstacao);