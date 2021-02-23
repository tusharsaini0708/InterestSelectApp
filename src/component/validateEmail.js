const validate = (finalEmail) => {
  let error = "";
  if (finalEmail[0] == "@" || !finalEmail.includes("@")) {
    error = "Invalid E-Mail";
  } else if (
    finalEmail[finalEmail.length - 1] === "@" ||
    finalEmail.indexOf(".") - finalEmail.indexOf("@") === 1
  ) {
    error = "Invalid E-Mail";
  } else if (
    !finalEmail.includes(".") ||
    finalEmail.indexOf(".") >= finalEmail.length - 2
  ) {
    error = "Invalid E-Mail";
  } else {
    error = "";
  }

  return error;
};
export default validate;
