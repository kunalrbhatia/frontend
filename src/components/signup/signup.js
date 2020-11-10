import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      message: "",
      open: false,
    };
  }
  componentDidMount() {
    this.token = localStorage.getItem("token");
    if (this.token && this.token.length > 1) {
      const requestOptions = {
        method: "POST",
        headers: { "auth-token": this.token + "" },
      };
      fetch("http://localhost:5000/post/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ uid: data._id });
          this.props.history.push("in");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  submit = () => {
    const { email, password, apassword, fname, lname } = this.state;
    if (apassword === password) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password, fname: fname, lname: lname }),
      };
      fetch("http://localhost:5000/users/", requestOptions).then((data) => {
        this.setState({ message: "User created!", open: true });
        setTimeout(() => {
          this.props.history.push("/");
        }, 4000);
      });
    } else {
      this.setState({ message: "Password & Confirm Password doesn't match!", open: true });
    }

    /* fetch("http://localhost:5000/login/", requestOptions).then((data) => {
      localStorage.setItem("token", data);
      this.props.history.push("s");
    }); */
  };
  render() {
    const { message, open } = this.state;
    return (
      <div style={{ margin: "auto", padding: "10px" }}>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Sign-up</h3>
          <TextField
            id="standard-basic"
            label="First Name"
            required
            placeholder="First Name"
            helperText="Enter your First Name here."
            fullWidth
            onChange={(e) => {
              this.setState({ fname: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            required
            placeholder="Last Name"
            helperText="Enter your Last Name here."
            fullWidth
            onChange={(e) => {
              this.setState({ lname: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            required
            placeholder="Email address"
            helperText="Enter your email address here."
            fullWidth
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            required
            placeholder="Password"
            helperText="Enter your Password here."
            type="password"
            fullWidth
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Password Again"
            required
            placeholder="Password Again"
            helperText="Enter your Password again here."
            type="password"
            fullWidth
            onChange={(e) => {
              this.setState({ apassword: e.target.value });
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ margin: 10, position: "relative" }}
            onClick={this.submit}
          >
            Submit
          </Button>

          <Link to="/" style={{ float: "right", position: "relative" }} href="#" onClick={() => {}}>
            Back to Login
          </Link>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          onClose={(e) => {
            setTimeout(() => {
              this.setState({ open: false });
            }, 3000);
          }}
          message={message}
        ></Snackbar>
      </div>
    );
  }
}
export default SignUp;
