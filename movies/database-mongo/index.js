var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var movieSchema = mongoose.Schema({
  title: String,
  genre: String,
  imageUrl: String,
});

var Movie = mongoose.model("Movie", movieSchema);

var selectAll = function (callback) {
  Movie.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var created = function (data, callback) {
  Movie.create(data, function (err, movies) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, movies);
    }
  });
};

var deleted = function (id, callback) {
  Movie.deleteOne({ _id: id }, function (err, movies) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, movies);
    }
  });
};

var updated = function (id, obj, callback) {
  Movie.updateOne({ _id: id }, obj, function (err, movies) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, movies);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.created = created;
module.exports.deleted = deleted;
module.exports.updated = updated;
