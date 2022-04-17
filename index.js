const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://admin:qwerty123@cluster0.s3mxf.mongodb.net/mongo?retryWrites=true&w=majority");

const start = async () => {
    try {
        await client.connect();
        console.log("Соединение установленно")
        await client.db().createCollection("users")
        const users = client.db().collection("users")
        await users.insertOne({
            username: "Oleg",
            age: 23
        })

        const user = await users.findOne({ username: "Oleg" })
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

start();