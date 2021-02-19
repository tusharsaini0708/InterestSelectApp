const validate = (finalEmail) => {
  let error = "";
  if (finalEmail[0] == "@" || finalEmail.length < 9) {
    error = "Invalid E-mail length must be more then 9";
  } else if (!finalEmail.includes("@")) {
    error = "Missing @";
  } else if (isNaN(finalEmail[finalEmail.indexOf("@") - 1] * 1)) {
    error = "Must be a number before @";
  } else if (
    finalEmail[finalEmail.length - 4] != "." &&
    finalEmail[finalEmail.length - 3] != "."
  ) {
    error = "Position of . is not correct";
  } else {
    error = "";
  }

  return error;
};
export default validate;
