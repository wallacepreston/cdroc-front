/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';

/**
 * Internal dependencies
*/

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import { Snackbar, TextField } from '@mui/material'

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import useStatus from '../../hooks/useStatus/useStatus';

export const Login = ({ data, setUser, classes }) => {
  const { status: { status, message }, setError, setSuccess, showStatus } = useStatus();
	const [ email, setEmail ] = useState( '' );
	const [ memberPasscode, setMemberPasscode ] = useState( '' );
	const [ cardAnimaton, setCardAnimation ] = useState( 'cardHidden' );

	useEffect ( () => {
		setCardAnimation( '' );
	}, [] );

	const members = data.allWordpressPost.edges;

	const onSubmit = ( e ) => {
		e.preventDefault();
		const result = members.find( ( member ) => (
      member.node.acf.email === email && member.node.acf.member_passcode === memberPasscode
    ) );
		if (!result) {
      return setError('Invalid email or member passcode');
    }
    setSuccess('Logging in...');
    // wait for 1/3 second before redirecting
    setTimeout(() => {
      setUser( result );
    }, 300);
	};

	return (
		
    // <p>LOGIN FORM</p>
		<div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>

									<CardHeader color="primary" className={classes.cardHeader}>
										<h3>Log in </h3>
										
									</CardHeader>
									<CardBody>
										<form onSubmit={ onSubmit } className="login-form" autoComplete="on">

                      <TextField 
                        label="Email Address"
												value={ email }
												autoComplete="email"
                        onChange={ ( event ) => setEmail( event.target.value ) }
                        error={status === 'error'}
                        fullWidth
                      />

                      <br />
                      <br />

                      <TextField 
                        label="Member Passcode"
                        type="password"
                        autoComplete="current-password"
                        value={ memberPasscode }
                        onChange={ ( event ) => setMemberPasscode( event.target.value ) }
                        error={status === 'error'}
                        fullWidth
                        helperText={status === 'error' && message}
                      />

                      <Snackbar
                        open={showStatus}
                        autoHideDuration={6000}
                        message={message}
                        severity={status}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      />
											<p>
												<button className={classes.button}>
													Log in
												</button>
											</p>
										</form>
									</CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
		
	);
};

export default withStyles(loginPageStyle)(Login);