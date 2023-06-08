import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [objdata, setData] = useState({});

  const SubmitData = (value, name) => {
    let data = { [name]: value };
    setData({ ...objdata, ...data });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(objdata);
  };
  return (
    <form onSubmit={submit}>
      <div className="App">
        <label>
          ` Name :{" "}
          <input
            name="name"
            type="text"
            placeholder="Enter Name "
            onChange={(e) => SubmitData(e.target.value, e.target.name)}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name :{" "}
          <input
            name="lname"
            type="text"
            onChange={(e) => SubmitData(e.target.value, e.target.name)}
            placeholder="Enter Last Name"
          />
        </label>
        <br />
        <br />
        <label>
          Email Address :{" "}
          <input
            name="email"
            type="text"
            onChange={(e) => SubmitData(e.target.value, e.target.name)}
            placeholder="Enter Email"
          />
        </label>
        <br />
        <br />
        <label>
          Phone Number :{" "}
          <input
            name="number"
            type="number"
            onChange={(e) => SubmitData(e.target.value, e.target.name)}
            placeholder="Enter Phone Number"
          />
        </label>
        <br />
        <br />
        <label>
          Address :{" "}
          <input
            type="text"
            name="address"
            onChange={(e) => SubmitData(e.target.value, e.target.name)}
            placeholder="Enter Address "
          />
        </label>
        <br />
        <br />
        <button type="submit"> Submit </button>
        <button type="reset"> Reset </button>
      </div>
    </form>
  );
}
