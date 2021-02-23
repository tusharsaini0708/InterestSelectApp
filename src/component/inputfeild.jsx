import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Select from "react-select";
import validateEmail from "./validateEmail";
import { handlePost, handleGet } from "./ApiGetPost";

toast.configure();

const InputField = () => {
  let [interestOptions, setInterestOption] = useState([]);
  let [searchedKeys, setKeys] = useState("sport");
  let [finalInterest, setInterest] = useState([]);
  let [emailError, setEmailError] = useState("");
  let [finalEmail, setEmail] = useState("");
  let [finalName, setName] = useState("");

  useEffect(() => {
    const someFunc = async () => {
      let tempKeys = searchedKeys;
      if (tempKeys === "") {
        setKeys("sport");
        tempKeys = "sport";
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

  const validation = (event) => {
    event.preventDefault();
    let emailError = validateEmail(finalEmail);
    setEmailError(emailError);
    if (
      emailError === "" &&
      finalName !== "" &&
      finalInterest.length <= 3 &&
      finalInterest.length > 0
    ) {
      // handlePost is imported from ApiGetPost.js
      handlePost(finalName, finalEmail, finalInterest);
    } else {
      if (!emailError) {
        //when email has no error then Interest must validate
        if (finalInterest.length > 3)
          //Toast Comp. Imported from react-toastify
          toast.error("User Can Select Max. 3 Interests", {
            position: toast.POSITION.TOP_CENTER,
          });
        if (finalInterest.length == 0)
          toast.error("Please Select Atleast One Interest", {
            position: toast.POSITION.TOP_CENTER,
          });
      }
    }
  };

  return (
    <form className="mainDiv" onSubmit={validation}>
      <div className="my-3">
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="my-3">
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
      <div className="my-3">
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

      <button className="btn btn-success submitBtn">Register</button>
    </form>
  );
};

export default InputField;
