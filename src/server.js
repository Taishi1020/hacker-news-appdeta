//ドキュメント参照
//https://www.apollographql.com/docs/apollo-server/getting-started

const {ApolloServer, gql} = require("apollo-server");

let links = [
    {
        id: "link-0",
        description: "Graphqlを学んでいます。",
        url: "www.graphql-tutorial.com",
    }
]

//GraphQLのスキーマ定義
const typeDefs = gql`
 type Query {
   info: String!
   feed: [Link]!
 }
 type Link {
 id: ID!
 description: string!
 url: String!
 }
`;


const resolvers = {
    Query: {
        info: () => "HackerNewsクローン",
        feed: () => links,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})


server.listen().then(({url}) => console.log(`${url}でサーバーを起動中・・・`));