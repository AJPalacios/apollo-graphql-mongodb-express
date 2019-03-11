const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//  allow cross origin requests

app.use(cors());

// connect to mlab database
mongoose.connect("mongodb://adncode:CPOWERCRU11@ds129641.mlab.com:29641/gql-ninja");
mongoose.connection.once('open', ()=> {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, (req, res) => {
  console.log("listen in port 4000")
});