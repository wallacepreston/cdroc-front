/**
 * External dependencies
 */
import { useState } from 'react';

/**
 * Internal dependencies
 */
import { useLogoutMutation } from './mutations/use-logout-mutation';
import { useLoginMutation } from './mutations/use-login-mutation';
import { useAuthContext } from 'context';



/**
 * Hook which tracks if the user is logged in.
 */
export const useAuth = () => {
	const { isLoggedIn } = useAuthContext();
	const [ error, setError ] = useState( null );
	const [ status, setStatus ] = useState( 'idle' );
	const { logoutMutation } = useLogoutMutation();
	const { loginMutation } = useLoginMutation();

	const login = ( username, password ) => {
		setError( null );
		setStatus( 'resolving' );
		return loginMutation( username, password )
			.then( console.log )
			.catch( console.error );
	};

	const logout = () => {
		setStatus( 'resolving' );
		return logoutMutation().then( console.log ).catch( console.error );
	};

	return {
		login,
		logout,
		isLoggedIn,
		error,
		status,
	};
};