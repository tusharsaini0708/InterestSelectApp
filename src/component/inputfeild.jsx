import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import validateEmail from "./validateEmail";
import { handlePost, handleGet } from "./ApiGetPost";

const InputField = () => {
  let [interestOptions, setInterestOption] = useState([]);
  let [searchedKeys, setKeys] = useState("paint");
  let [finalInterest, setInterest] = useState([]);
  let [emailError, setEmailError] = useState("");
  let [finalEmail, setEmail] = useState("");
  let [finalName, setName] = useState("");

  useEffect(() => {
    const someFunc = async () => {
      let tempKeys = searchedKeys;
      if (tempKeys === "") {
        setKeys("paint");
        tempKeys = "paint";
      }
      //handleGet is imported from ApiGetPost.js
      const arr = await handleGet(tempKeys); //Getting Data{object} from API
      //console.log(arr);
      setInterestOption(arr);
    };
    someFunc();
  }, [searchedKeys]);

  const setSearchKeys = (event) => {
    setKeys(event);
  };

  const settingInterest = (e) => {
    setInterest(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const validation = () => {
    let error = validateEmail(finalEmail);
    setEmailError(error);
    if (
      error === "" &&
      finalName !== "" &&
      finalInterest.length <= 3 &&
      finalInterest.length > 0
    ) {
      // handlePost is imported from ApiGetPost.js
      handlePost(finalName, finalEmail, finalInterest);
    } else {
      if (finalName === "") alert("Username Can't be empty");
      else if (finalInterest.length > 3)
        alert("Maximum 3 Interest can be Selected");
      else if (finalInterest.length == 0) {
        alert("Please Select atleast one Interest");
      }
    }
  };

  return (
    <form className="mainDiv">
      <div className="inputdiv">
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="inputdiv">
        <input
          type="text"
          id="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <span className="emailerror">{emailError}</span>
      </div>
      <div className="inputdiv">
        {/* This is AutoComplete Interest Select/Search Component */}
        <Select
          isMulti
          name="interest"
          placeholder={"Search Interest"}
          options={interestOptions}
          className="basic-multi-select"
          onInputChange={setSearchKeys}
          onChange={settingInterest}
        />
      </div>

      <button className="btndiv" type="button" onClick={validation}>
        Register
      </button>
    </form>
  );
};

export default InputField;
