import axios from "axios";
const baseurl = "https://raise-doubt-balu.herokuapp.com";
export const login = async (data) => {
  let res = await axios.post(baseurl + "/login", data);
  return res;
};
export const signup = async (data) => {
  let res = await axios.post(baseurl + "/signup", data);
  return res;
};
export const updateuserpassword = async (data) => {
  let res = await axios.post(baseurl + "/updatepassword", data);
  return res;
};
export const adddoubt = async (data) => {
  let res = axios.post(baseurl + "/adddoubt", data);
  return res;
};
export const addcomment = async (data) => {
  let res = axios.post(baseurl + "/addcomment", data);
  return res;
};
export const addanswer = async (data) => {
  let res = axios.post(baseurl + "/addanswer", data);
  return res;
};
export const fetchdoubts = async (data) => {
  let res = await axios.post(baseurl + "/fetchdoubts");
  return res;
};
