import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
export class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msgFromServer: "", loggedIn: true };
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
          this.setState({ uid: data.uid, msgFromServer: data.data });
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
  componentDidMount() {
    window.addEventListener("storage", (e) => {
      this.verifyToken();
    });
    this.verifyToken();
  }
  render() {
    const { msgFromServer } = this.state;
    return (
      <div style={{ margin: "auto", width: " 50%", padding: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ right: 30, float: "right", top: 30 }}
          onClick={(e) => {
            localStorage.removeItem("token");
            this.props.history.push("/");
            this.setState({ loggedIn: false });
          }}
        >
          Logout
        </Button>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Welcome</h3>
          <h5>{msgFromServer}</h5>
        </Paper>
      </div>
    );
  }
}
export default LoggedIn;
