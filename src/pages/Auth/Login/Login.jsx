/**
 * External dependencies
 */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

/**
 * Internal dependencies
 */
import Field from 'components/field/index.js';
import { useAuth } from '../../../hooks/use-auth';

export const Login = () => {
	const [ username, setUsername ] = useState( '' );
	const [ password, setPassword ] = useState( '' );
	const { login, error, status } = useAuth();

	const onLogin = ( e ) => {
		e.preventDefault();
		login( username, password );
	};

	return (
		
    // <p>LOGIN FORM</p>
		<form onSubmit={ onLogin } className="login-form" autoComplete="on">
			{ error && (
				<div className="error-notice">
					<FontAwesomeIcon
						icon={ faSkullCrossbones }
						aria-hidden={ true }
					/>
					<p>{ error }</p>
				</div>
			) }
			<Field
				label="Username or Email Address"
				value={ username }
				autoComplete="username"
				onChange={ ( value ) => setUsername( value ) }
				disabled={ status === 'resolving' }
			/>
			<Field
				label="Password"
				type="password"
				autoComplete="current-password"
				value={ password }
				onChange={ ( value ) => setPassword( value ) }
				disabled={ status === 'resolving' }
			/>
			<p>
				<button
					className="button button--inline button--large"
					onClick={ onLogin }
					disabled={ status === 'resolving' }
				>
					Sign in
				</button>
			</p>
		</form>
	);
};

export default Login;