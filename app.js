const app = require('express')()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Started listening on port 3000'))