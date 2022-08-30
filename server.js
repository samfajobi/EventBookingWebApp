const express = require("express");
const app = express();
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql")



const PORT = 5000

app.get("/", (req, res) => {
    res.send("Hello There!!")
})
 

app.use("/graphql", graphqlHttp({
    schema: buildSchema(`
        type RootQuery {

        }

        type RootMutation {

        }
        
        schema {
            schema: RootQuery
            mutation: RootMutation
        }

    `),
    rootvalue: {},
    graphiql: true
}))


app.listen(PORT, (req, res) => {
    console.log(`App is running on PORT${PORT}`)
}) 