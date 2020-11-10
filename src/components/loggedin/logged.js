import React from "react";
import Paper from "@material-ui/core/Paper";
export class LoggedIn extends React.Component {
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
          //this.props.history.push("in");
        });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div style={{ margin: "auto", width: " 50%", padding: "10px" }}>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Welcome</h3>
        </Paper>
      </div>
    );
  }
}
export default LoggedIn;
