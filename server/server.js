const express = require('express');
const path = require('path');
const db = require('./config/connection');
        // this
const routes = require('./routes');
        // or this
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
        // this
        // const server = new ApolloServer({
        //   typeDefs,
        //   resolvers,
        // });

        // server.applyMiddleware({ app });


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);
      // this
      // app.get('*', (req, res) => {
      //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
      // });

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

});





