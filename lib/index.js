const ncSchema = require('../schema')
const app= require('express')()
const graphqlHTTP = require('express-graphql')

app.use('/graphql', graphqlHTTP({
    schema: ncSchema,
    graphiql: true
}) )

const PORT= process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`server is listening on port ${PORT}`)
})