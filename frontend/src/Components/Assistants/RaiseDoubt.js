import React, { useState } from "react";
import { Button, Card, Input, message } from "antd";
import { adddoubt } from "../../store/api";
import { fetchdoubtsas } from "../../store/slices";
import { useDispatch } from "react-redux";
function RaiseDoubt() {
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const submit = async () => {
    if (title === "") {
      message.warning("Add Title", 2);
      return;
    }
    if (description === "") {
      message.warning("Add Description", 2);
      return;
    }
    let date = new Date();
    let res = await adddoubt({
      title,
      description,
      postedby: sessionStorage.getItem("name"),
      createddate:
        date.toLocaleString("en-us", { month: "short" }) +
        " " +
        date.getDay() +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes(),
    });
    if (res) {
      dispatch(fetchdoubtsas());
      message.info("Doubt Raised Successfully", 3);
      setdescription("");
      settitle("");
    }
  };
  return (
    <div>
      <span
        style={{ margin: "0px 20px", fontWeight: "bold", fontSize: "20px" }}
      >
        Raise Doubt
      </span>
      <br />
      <Card
        style={{
          background: "lightgrey",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        <label>Title</label>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></Input>
        <br />
        <br />
        <label>Description</label>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></Input>
        <br />
        <br />
        <Button
          type="primary"
          onClick={() => {
            submit();
          }}
          style={{ float: "right" }}
        >
          Ask Doubt
        </Button>
      </Card>
    </div>
  );
}

export default RaiseDoubt;
