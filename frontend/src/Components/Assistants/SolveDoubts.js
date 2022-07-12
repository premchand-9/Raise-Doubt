import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Input, message } from "antd";
import { addanswer } from "../../store/api";
import { fetchdoubtsas } from "../../store/slices";
import "./solvedoubts.css";
function SolveDoubts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.User.assistant.filterdoubts);
  const [record, setrecord] = useState("");
  const [a, seta] = useState("");
  const [disp, setdisp] = useState(1);
  const [pass, setpass] = useState(false);
  useEffect(() => {
    if (pass) {
      setpass(false);
      setdisp(1);
      dispatch(fetchdoubtsas());
    }
  }, [pass]);
  const handleaccept = async (d) => {
    setdisp(2);
    setrecord(d);
  };
  const handleanswer = async () => {
    if (a === "") {
      message.warning("Type your Answer", 2);
      return;
    }
    try {
      let date = new Date();
      let res = await addanswer({
        _id: record._id,
        answer: [
          {
            answer: a,
            answerby:
              sessionStorage.getItem("name") +
              " on " +
              date.toLocaleString("en-us", { month: "short" }) +
              " " +
              date.getDay() +
              ", " +
              date.getHours() +
              ":" +
              date.getMinutes(),
          },
        ],
      });
      message.info("Answer Added Successfully");
      setpass(true);
    } catch (err) {
      message.err("Something Went Wrong");
    }
  };
  return (
    <div>
      <span style={{ fontWeight: "bold", fontSize: "15px" }}>
        Solve Doubts
        {disp === 1 &&
          data.map((d) => {
            return (
              <>
                <br />
                <br />
                <Card key={d._id} style={{ background: "lightgrey" }}>
                  <span>{d.title}</span>
                  <span style={{ float: "right" }}>
                    <Button
                      onClick={() => {
                        handleaccept(d);
                      }}
                    >
                      <span style={{ color: "blue" }}>Accept</span>
                    </Button>
                  </span>
                </Card>
                <br />
                <br />
              </>
            );
          })}
        {disp === 2 && (
          <>
            <br />
            <br />
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "inline-block",
                  float: "left",
                  width: "65%",
                  marginTop: "20px",
                }}
              >
                <Card
                  style={{
                    background: "lightgrey",
                  }}
                >
                  <span>{record.title}</span>
                  <br />
                  <span>{record.description}</span>
                  <br />
                  <span style={{ float: "right" }}>
                    Asked By: {record.postedby} on {record.createddate}
                  </span>
                  <br />
                  <div
                    style={{
                      borderTop: "1.5px solid black",
                      marginLeft: "-20px",
                      marginRight: "-11px",
                    }}
                  ></div>
                  {record.comments.length > 0 && (
                    <>
                      {record.comments.length} comments
                      <br />
                      {record.comments.map((c) => {
                        return (
                          <>
                            <br />
                            <div
                              style={{
                                border: "1px solid black",
                                padding: "5px",
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
                </Card>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div
                style={{
                  display: "inline-block",
                  width: "250px",
                  marginTop: "20px",
                }}
              >
                <Card>
                  <span>Answer</span>
                  <br />
                  <Input
                    value={a}
                    placeholder="Answer"
                    onChange={(e) => {
                      seta(e.target.value);
                    }}
                  ></Input>
                  <br />
                  <br />
                  <Button
                    onClick={() => {
                      handleanswer();
                    }}
                    style={{
                      float: "right",
                      background: "#3b43d6",
                      color: "white",
                    }}
                  >
                    Answer
                  </Button>
                  <br />
                  <br />
                </Card>
              </div>
            </div>
          </>
        )}
      </span>
    </div>
  );
}

export default SolveDoubts;
