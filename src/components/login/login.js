import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      uid: "",
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
    window.addEventListener("storage", (e) => {
      this.verifyToken();
    });
  }
  verifyToken = () => {
    this.token = localStorage.getItem("token");
    if (this.token && this.token.length > 1) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("auth-token", this.token + "");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
      };
      fetch("http://localhost:5000/post/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.props.history.push("in");
        })
        .catch((error) => {
          console.error("Error:", error);
          this.props.history.push("/");
          this.setState({ loggedIn: false });
        });
    } else {
      this.setState({ loggedIn: false });
      this.props.history.push("/");
    }
  };
  submit = () => {
    const { login, password } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: login, password: password }),
    };
    fetch("http://localhost:5000/login/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data);
        const requestOptions = {
          method: "POST",
          headers: { "auth-token": data + "" },
        };
        fetch("http://localhost:5000/post/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            this.props.history.push("in");
          });
      });
  };
  render() {
    return (
      <div style={{ margin: "auto", width: " 50%", padding: "10px" }}>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Login</h3>
          <TextField
            id="email"
            label="Email"
            required
            placeholder="Email address"
            helperText="Enter your email address here."
            fullWidth
            onChange={(e) => {
              this.setState({ login: e.target.value });
            }}
          />
          <TextField
            id="password"
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

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ margin: 10, position: "relative" }}
            onClick={this.submit}
          >
            Submit
          </Button>

          <Link to="/s" style={{ float: "right", position: "relative" }} href="">
            New User? Sign-UP!
          </Link>
        </Paper>
      </div>
    );
  }
}
export default Login;
