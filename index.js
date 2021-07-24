const PORT = process.env.PORT || 4200
const app = require('./src/app')

app.listen(PORT, ()=>{console.log(`Server on localhost:${PORT}`)})

