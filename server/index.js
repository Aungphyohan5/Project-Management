const express = require('express');
require('dotenv').config();

console.log(process.env.NODE_ENV); // Output: development
console.log(process.env.PORT);     // Output: 8000

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// port variable
const port = process.env.PORT || 3000;

// express initialization
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
