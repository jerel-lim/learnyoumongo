
// var mongodb = process.argv[2]
var mongo = require('mongodb').MongoClient
var sizes = process.argv[2]
// var id = process.argv[4]
// console.log(collection)
// console.log(sizes)
var url = 'mongodb://localhost:27017/learnyoumongo'
// var obj = JSON.stringify({firstName: first, lastName: last})
// console.log(obj)
//
mongo.connect(url, function (err, db) {
  if (err) throw err
  var collection = db.collection('prices')
    var price = collection.aggregate([
      { $match: { size: sizes }}
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          $avg: '$price'
        }
      }}
]).toArray(function (err, data) {
      if (err) throw err
      console.log(Number(data[0].total).toFixed(2))
    })
// console.log(price._id)

  db.close()
})
