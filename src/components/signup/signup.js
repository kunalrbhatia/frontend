import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export class SignUp extends React.Component {
  render() {
    return (
      <div style={{ margin: "auto", width: " 50%", padding: "10px" }}>
        <Paper elevation={3} style={{ padding: 40, margin: 20 }}>
          <h3>Sign-up</h3>
          <TextField
            id="standard-basic"
            label="First Name"
            required
            placeholder="First Name"
            helperText="Enter your First Name here."
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            required
            placeholder="Last Name"
            helperText="Enter your Last Name here."
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Email"
            required
            placeholder="Email address"
            helperText="Enter your email address here."
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Password"
            required
            placeholder="Password"
            helperText="Enter your Password here."
            type="password"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Password Again"
            required
            placeholder="Password Again"
            helperText="Enter your Password again here."
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth style={{ margin: 10, position: "relative" }}>
            Submit
          </Button>

          <Link to="/" style={{ float: "right", position: "relative" }} href="#" onClick={() => {}}>
            Back to Login
          </Link>
        </Paper>
      </div>
    );
  }
}
export default SignUp;
