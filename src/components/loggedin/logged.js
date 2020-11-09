import React from "react";
import Paper from "@material-ui/core/Paper";
export class LoggedIn extends React.Component {
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
