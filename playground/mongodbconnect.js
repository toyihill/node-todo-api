// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

//   db.collection('Todos').insertOne({
//     text: 'Go to salon',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo',err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2))
//   });
//
//   db.collection('Todos').insertOne({
//     text: 'Call CA',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo',err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2))
//   });
//
//   client.close();
// });

db.collection('Users').insertOne({
  name: 'Toyi',
  age: 30,
  location: 'Soulitude'
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert todo',err);
  }

  console.log(JSON.stringify(result.ops, undefined, 2))
});

client.close();
});
