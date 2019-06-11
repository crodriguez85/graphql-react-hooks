import React from "react";
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";

// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `
{
  me{
    _id
    name
    email
    picture
  }
}` 

const Login = ({ classes }) => {
  const responseGoogle = async response => {
    // console.log(response)
    const idToken = response.getAuthResponse().id_token;
    // console.log({ idToken})
    const client = new GraphQLClient('http://localhost:4000/graphql', {
      headers: { authorization: idToken }
    })
    const data = await client.request(ME_QUERY)
    console.log({ data });
  };
  return(
    <GoogleLogin 
      clientId="226743835108-vv9vnn1r8t9aadvj6jrrmbropv510ggq.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
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
