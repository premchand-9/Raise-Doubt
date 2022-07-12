const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://User:Balu@xetgo.hyo9bg0.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .catch((e) => {
    console.error(e);
    throw Error("Error connecting to MongoDB: " + e);
  });
const schema = {
  name: String,
  email: { type: String, unique: true },
  password: String,
  securityquestion: String,
  answer: String,
  type: String,
};
const doubtschema = {
  title: String,
  description: String,
  comments: { type: Array, default: [] },
  postedby: String,
  createddate: String,
  posttime: { type: Date, default: () => Date.now() },
  answered: { type: Boolean, default: false },
  answer: { type: Array, default: [] },
};
let signuporloginSchema = mongoose.Schema(schema, {
  collection: "users",
});
let dschema = mongoose.Schema(doubtschema, {
  collection: "doubts",
});
exports.signuporloginmodel = mongoose.model("users", signuporloginSchema);
exports.doubtsmodel = mongoose.model("doubts", dschema);
