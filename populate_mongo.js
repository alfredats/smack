const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://localhost/';

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here	
    const db = client.db('smackMessages'); 
    // delete database
    db.dropDatabase();
    const coll = db.collection('chatMessage');
    // insert code goes here
    const result = await coll
    use smackMessages;
    db.chatMessage.insertMany([
      {
        userEmail: 'test1@test.com',
        chatId: '2fcb7618c37e474fbf998d0fe773806c',
        messageType: 10,
        message: 'Has anyone seen my dog?',
        creationDatetime: Math.ceil(Date.now() / 1000)
      },
      {
        userEmail: 'test2@test.com',
        chatId: '2fcb7618c37e474fbf998d0fe773806c',
        messageType: 10,
        message: 'Hello.',
        creationDatetime: Math.ceil(Date.now() / 1000) + 1
      },
      {
        userEmail: 'test3@test.com',
        chatId: '2fcb7618c37e474fbf998d0fe773806c',
        messageType: 10,
        message: 'I\'m Daria',
        creationDatetime: Math.ceil(Date.now() / 1000) + 10
      },
      {
        userEmail: 'test4@test.com',
        chatId: '2fcb7618c37e474fbf998d0fe773806c',
        messageType: 10,
        message: 'Beavis here!',
        creationDatetime: Math.ceil(Date.now() / 1000) + 12
      },
      {
        userEmail: 'test1@test.com',
        chatId: '61f5596105aa41b1a4edaaae61d4f8bd',
        messageType: 10,
        message: 'I wish we could create new chat channels',
        creationDatetime: Math.ceil(Date.now() / 1000) + 11
      },
      {
        userEmail: 'test2@test.com',
        chatId: '61f5596105aa41b1a4edaaae61d4f8bd',
        messageType: 10,
        message: 'Maybe if we could send emojis, our messages would be more expressive?',
        creationDatetime: Math.ceil(Date.now() / 1000) + 20
      },
      {
        userEmail: 'test3@test.com',
        chatId: '61f5596105aa41b1a4edaaae61d4f8bd',
        messageType: 10,
        message: 'The chat is quite performant! I love the magic of websockets!',
        creationDatetime: Math.ceil(Date.now() / 1000) + 22
      },
      {
        userEmail: 'test4@test.com',
        chatId: '61f5596105aa41b1a4edaaae61d4f8bd',
        messageType: 10,
        message: 'Where is everyone else?',
        creationDatetime: Math.ceil(Date.now() / 1000) + 29
      },
      {
        userEmail: 'test1@test.com',
        chatId: 'ac729983fcef41bfa69a3233ee1dcedd',
        messageType: 10,
        message: 'what do y\'all typically order at a coffee shop? My order is usually teh o ping siew dai',
        creationDatetime: Math.ceil(Date.now() / 1000) + 15
      },
      {
        userEmail: 'test2@test.com',
        chatId: 'ac729983fcef41bfa69a3233ee1dcedd',
        messageType: 10,
        message: 'kopi o kosong gao. as dark as the color of my soul',
        creationDatetime: Math.ceil(Date.now() / 1000) + 26
      },
      {
        userEmail: 'test3@test.com',
        chatId: 'ac729983fcef41bfa69a3233ee1dcedd',
        messageType: 10,
        message: 'calamansi ais',
        creationDatetime: Math.ceil(Date.now() / 1000) + 30
      },
      {
        userEmail: 'test4@test.com',
        chatId: 'ac729983fcef41bfa69a3233ee1dcedd',
        messageType: 10,
        message: 'milo dino ftw',
        creationDatetime: Math.ceil(Date.now() / 1000) + 60
      }

    ]);
    // display the results of your operation
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
