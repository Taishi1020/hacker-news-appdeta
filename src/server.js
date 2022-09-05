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
 description: String!
 url: String!
 }
 
 type Mutation {
     post(url: String!, description: String!): Link!
 } 
`;

//resolversの処理が正常に動作していれば,APIを叩いた時に想定通りのデータが返ってくる↓
const resolvers = {
    Query: {
        info: () => "HackerNewsクローン",
        feed: () => links,
    },

    Mutation: {
        post: (parent, args) => {
            let idCount = links.length;

            //どのようなlinkを挿入するのか
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };

            links.push(link);
            return link
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})


server.listen().then(({url}) => console.log(`${url}でサーバーを起動中・・・`));