var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//schema
//resolvers 

var schema = buildSchema(`
  type Quary{
      hello:String
      helloWorld:String
  }
`);

var root = {
    hello: () => 'Hello',
    helloWorld: () => "Hello world!"
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));