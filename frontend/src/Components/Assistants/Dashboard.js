import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import RaiseDoubt from "./RaiseDoubt";
import SolveDoubt from "./SolveDoubts";
import { Nav, Navbar } from "react-bootstrap";
import { Tooltip, Spin } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchdoubtsas } from "../../store/slices";
function Dashboard({ value }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getdata, setdata] = useState(true);
  const [disp, setdisp] = useState(1);
  const data = useSelector((state) => state.User);
  useEffect(() => {
    if (getdata) {
      setdata(false);
      dispatch(fetchdoubtsas());
    }
  }, [getdata, dispatch]);

  useEffect(() => {
    if (value === "Home") {
      setdisp(1);
      navigate("/assistant/dashboard");
    } else if (value === "Raise") {
      setdisp(2);
      navigate("/assistant/raise-a-doubt");
    } else if (value === "Solve") {
      setdisp(3);
      navigate("/assistant/solve-doubts");
    }
  }, [value]);
  return (
    <>
      <div style={{ margin: "0" }}>
        <Navbar
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#0050EF",
          }}
        >
          <Nav>
            <Nav.Link
              onClick={() => {
                setdisp(1);
                navigate("/assistant/dashboard");
              }}
            >
              <b
                style={{
                  color: "white",
                  fontSize: "15px",
                  margin: "10px",
                }}
              >
                Home
              </b>
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link
              onClick={() => {
                setdisp(2);
                navigate("/assistant/raise-a-doubt");
              }}
            >
              <b style={{ color: "white", fontSize: "15px" }}>Raise Doubt</b>
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link
              onClick={() => {
                setdisp(3);
                navigate("/assistant/solve-doubts");
              }}
            >
              <b style={{ color: "white", fontSize: "15px" }}>Solve Doubts</b>
            </Nav.Link>
            <Nav.Link
              style={{ float: "right" }}
              onClick={() => {
                sessionStorage.clear();
                navigate("/");
              }}
            >
              <Tooltip title={"Logout"}>
                <PoweroffOutlined
                  style={{
                    color: "white",
                    fontSize: "200%",
                  }}
                />
              </Tooltip>
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </div>
      {data.assistantvalue >= 1 ? (
        <div style={{ margin: "40px" }}>
          {disp === 1 && <Home />}
          {disp === 2 && <RaiseDoubt />}
          {disp === 3 && <SolveDoubt />}
        </div>
      ) : (
        <Spin
          tip="Loading"
          spinning={data.assistantvalue === 0}
          style={{ marginTop: "10%", marginLeft: "40%" }}
        ></Spin>
      )}
    </>
  );
}
export default Dashboard;
