//ドキュメント参照
//https://www.apollographql.com/docs/apollo-server/getting-started

const {ApolloServer} = require("apollo-server");
const fs =  require("fs")
const path = require("path")

let links = [
    {
        id: "link-0",
        description: "Graphqlを学んでいます。",
        url: "www.graphql-tutorial.com",
    }
]

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
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
    resolvers,
})


server.listen().then(({url}) => console.log(`${url}でサーバーを起動中・・・`));