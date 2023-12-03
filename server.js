import express from 'express'
import cors from 'cors'
import readCSVData from './src/data/readCSVData';

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.send('Hello, GraphQL!')
})

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})

const data = await readCSVData('server/data/customer.csv');
