const express = require('express');
const app = express();
const port = process.env.PORT || 3334
const { create, destroy, update } = require('./schedules')

app.use(express.json());

app.post('/', create)
app.delete('/:id', destroy)
app.put('/:id', update)

app.listen(port, () => console.log(`Running on port ${port}`))