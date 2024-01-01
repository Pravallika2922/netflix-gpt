const validate = (...args) => {
  let isEmailValid;
  let isPasswordValid;
  let isValidName;
  if (args.length === 2) {
    isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      args[0]
    );
    isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(args[1]);
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  } else {
    isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      args[0]
    );
    isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(args[1]);
    isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(args[2]);
    if (!isValidName) return "Name not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  }

  return null;
};
export default validate;
