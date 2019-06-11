import React from "react";
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";

// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const responseGoogle = response => {
    console.log(response)
  }


  return(
    <GoogleLogin 
      clientId="226743835108-vv9vnn1r8t9aadvj6jrrmbropv510ggq.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />
  )
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
