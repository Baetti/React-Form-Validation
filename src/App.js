import { Button, TextField } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({
    uname: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      alert(`Registration Succesfull !
    Name:${formValues.uname}
    Email:${formValues.email}
    Password:${formValues.password}`);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const validUname = /^[a-zA-Z""]+$/;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validPaswd =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (!values.uname) {
      errors.uname = "* Name is required";
    } else if (!validUname.test(values.uname)) {
      errors.uname = "* Enter valid name!!!";
    }
    if (!values.email) {
      errors.email = "* Email is required";
    } else if (!validEmail.test(values.email)) {
      errors.email = "Enter a valid email!!!";
    }
    if (!values.password) {
      errors.password = "* Password is required";
    } else if (!validPaswd.test(values.password)) {
      errors.password = "Not a valid password Format!!! ";
    }
    if (!values.confirm) {
      errors.confirm = "Re-enter your password";
    } else if (values.confirm !== values.password) {
      errors.confirm = "Password doesnot match!!!";
    }
    return errors;
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2022/03/02/07/47/together-7042568_1280.jpg")',
        backgroundSize: "cover",
      }}
      className="d-flex justify-content-center align-items-center w-100"
    >
      <div className="col-lg-4"></div>

      <div className="col-lg-4 p-2 text-light  shadow rounded p-5 bgcolour">
        <div className=" mb-4 mt-2 text-center">
          {" "}
          <h1 className="CreateAcc">Create Account</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <TextField
              name="uname"
              id="standard-basic1"
              label="Enter Your Name"
              variant="standard"
              className="w-100 mb-3"
              value={formValues.uname || ""}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.uname}</p>
          <div className="text-center">
            <TextField
              name="email"
              id="standard-basic2"
              label="Enter Your Email"
              variant="standard"
              className="w-100 mb-3"
              value={formValues.email || ""}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <div className="text-center">
            <TextField
              name="password"
              id="standard-basic3"
              label="Create Password"
              variant="standard"
              className="w-100 mb-3"
              value={formValues.password || ""}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <div className="text-center">
            <TextField
              name="confirm"
              id="standard-basic4"
              label="Confirm Password"
              variant="standard"
              className="w-100 mb-3"
              value={formValues.confirm || ""}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.confirm}</p>
          <div className="d-flex justify-content-center text-center">
            <Button
              type="submit"
              variant="contained"
              className="mb-3 mt-3"
              color="secondary"
            >
              Register Now
            </Button>
          </div>

          <div className="mb-1 text-center text-dark ">
            <h6>Already have an account?</h6>
            <a href="/" className="loginlink">
              Login
            </a>
          </div>
        </form>
      </div>

      <div className="col-lg-4"></div>
    </div>
  );
}

export default App;
