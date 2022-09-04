//ドキュメント参照
//https://www.apollographql.com/docs/apollo-server/getting-started

const {ApolloServer, gql} = require("apollo-server");

//GraphQLのスキーマ定義
const typeDefs = gql`
 type Query {
   info: String!
 }
`;

const resolvers = {
    Query: {
        info: () => "HackerNewsクローン",
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({url}) => console.log(`${url}でサーバーを起動中・・・`));