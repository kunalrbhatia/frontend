import React from "react";
import Paper from "@material-ui/core/Paper";
export class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msgFromServer: "" };
  }
  componentDidMount() {
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
        });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    const { msgFromServer } = this.state;
    return (
      <div style={{ margin: "auto", width: " 50%", padding: "10px" }}>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Welcome</h3>
          <h5>{msgFromServer}</h5>
        </Paper>
      </div>
    );
  }
}
export default LoggedIn;
