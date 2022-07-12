import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Input, message, Button, Form } from "antd";
import { addcomment } from "../../store/api";
import { fetchdoubtsas } from "../../store/slices";
export default function Home() {
  const [form] = Form.useForm();
  const data = useSelector((state) => state.User.student.doubts);
  const [a, seta] = useState("");
  const dispatch = useDispatch();
  const onsubmit = async (s) => {
    if (a === "") {
      message.warning("Add Some Text to comment", 3);
      return;
    }
    let comments = {
      _id: s._id,
      comments: [
        ...s.comments,
        {
          comment: a,
          postedby: sessionStorage.getItem("name"),
        },
      ],
    };
    addcomment(comments)
      .then((res) => {
        seta("");
        form.resetFields();
        dispatch(fetchdoubtsas());
        message.info("Comment Added");
      })
      .catch((err) => {
        message.info("Something Went Wrong", 0.5);
      });
  };
  return (
    <div>
      <span
        style={{ fontWeight: "bold", fontSize: "20px", margin: "0px 20px" }}
      >
        Home
      </span>
      <br />
      <span style={{ fontSize: "15px", float: "right", margin: "0px 20px" }}>
        {data.length} doubts
      </span>
      <br />
      <br />
      {data.map((d) => {
        return (
          <div key={d._id}>
            <Card
              style={{
                background: "lightgrey",
                margin: "0px 20px",
              }}
            >
              <span>{d.title}</span>
              {d.answered && (
                <span
                  style={{
                    background: "rgba(150, 222, 209,0.5)",
                    border: "2px solid rgb(9, 121, 105)",
                    padding: "6px",
                    float: "right",
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  Resolved
                </span>
              )}
              <br />
              <span>{d.description}</span>
              <br />
              <span style={{ float: "right" }}>
                Asked By: {d.postedby} on {d.createddate}
              </span>
              <br />
              <br />
              {d.answered && (
                <>
                  <span>Answer : {d.answer[0].answer}</span>
                  <br />
                  <span>Answered by {d.answer[0].answerby}</span>
                  <br />
                </>
              )}
              <div
                style={{
                  borderTop: "1.5px solid black",
                  marginLeft: "-20px",
                  marginRight: "-11px",
                }}
              ></div>
              {d.comments.length > 0 && (
                <>
                  {d.comments.map((c) => {
                    return (
                      <>
                        <br />
                        <div
                          style={{
                            border: "1px solid black",
                            padding: "5px",
                            width: "100%",
                          }}
                          key={c.comment}
                        >
                          {c.postedby} : {c.comment}
                        </div>
                      </>
                    );
                  })}
                </>
              )}
              <br />
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "85%",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <Form form={form}>
                    <Form.Item name="comment">
                      <Input
                        placeholder="Add Comment"
                        onChange={(e) => {
                          seta(e.target.value);
                        }}
                      ></Input>
                    </Form.Item>
                  </Form>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginBottom: "25px",
                  }}
                >
                  <Button
                    style={{ float: "right", width: "max-content" }}
                    onClick={() => {
                      onsubmit(d);
                    }}
                  >
                    <span style={{ color: "blue" }}>Comment</span>
                  </Button>
                </div>
              </div>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
}
