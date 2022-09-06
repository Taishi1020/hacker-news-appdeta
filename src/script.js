const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

//非同期処理
async function main() {
    // const newLink = await prisma.link.create({
    //     data: {
    //         id: "link-0",
    //         description: "テキスト",
    //         url: "www.graphql-tutorial.com",
    //     },
    // });
    //↓全てのデータ情報を取得する
    const allLinks = await prisma.link.findMany();
    console.log(allLinks)
}

main().catch((e) => {
    throw e;
}).finally(async () => {
    //データベース接続終了
    prisma.$disconnect;
})