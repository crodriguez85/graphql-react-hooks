import React, { useContext } from "react";
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";

// import Typography from "@material-ui/core/Typography";

import Context from '../../context';

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
  const { dispatch } = useContext(Context);

  const onSuccess = async googleUser => {
    try {
      const idToken = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient('http://localhost:4000/graphql', {
        headers: { authorization: idToken }
      });
      const { me } = await client.request(ME_QUERY);
      // console.log({data})
      dispatch({ type: "LOGIN_USER", payload: me });
    } catch (err) {
      onFailure(err);
    }
  };


  const onFailure = err => {
    console.error("Error Loging In", err)
  }
  return(
    <GoogleLogin 
      clientId="226743835108-vv9vnn1r8t9aadvj6jrrmbropv510ggq.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
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
