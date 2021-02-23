const validate = (finalEmail) => {
  let error = "";
  if (finalEmail[0] == "@") {
    error = "Invalid E-mail";
  } else if (!finalEmail.includes("@")) {
    error = "Missing '@' sign";
  } else if (
    finalEmail[finalEmail.length - 1] === "@" ||
    finalEmail.indexOf(".") - finalEmail.indexOf("@") === 1
  ) {
    error = "Add Domain in Email ( @abc.in )";
  } else if (
    !finalEmail.includes(".") ||
    finalEmail.indexOf(".") >= finalEmail.length - 2
  ) {
    error = "Add Top level Domain(.com .in)";
  } else {
    error = "";
  }

  return error;
};
export default validate;
