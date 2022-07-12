const db = require("../model/db");
exports.getLogin = async function (reqbody) {
  try {
    let data = await db.getLoginInfo(reqbody);
    return data;
  } catch (e) {
    throw Error("Failed in Transaction:", e);
  }
};
exports.signup = async function (reqbody) {
  try {
    let data = await db.postsignup(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
exports.updatepassword = async function (reqbody) {
  try {
    let data = await db.updatepassword(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
exports.adddoubt = async function (reqbody) {
  try {
    let data = await db.adddoubt(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
exports.addcomment = async function (reqbody) {
  try {
    let data = await db.addcomment(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
exports.addanswer = async function (reqbody) {
  try {
    let data = await db.addanswer(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
exports.fetchdoubts = async function (reqbody) {
  try {
    let data = await db.fetchdoubts(reqbody);
    return data;
  } catch (e) {
    return e;
  }
};
