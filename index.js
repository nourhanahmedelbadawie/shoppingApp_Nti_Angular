const PORT = process.env.PORT || 4100
const app = require('./src/app')

app.listen(PORT, ()=>{console.log(`Server on localhost:${PORT}`)})

