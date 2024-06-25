/**
 * External dependencies
 */
import { gql, useMutation, /* useApolloClient */ } from '@apollo/client';

const LOGOUT = gql`
	mutation Logout {
		logout(input: {}) {
			status
		}
	}
`;

export const useLogoutMutation = () => {
	// const apolloClient = useApolloClient();
	const [ /* _mutation, */ mutationResults ] = useMutation( LOGOUT );

	const logoutMutation = async () => {
		// await apolloClient.clearStore();
		// return mutation();
	};

	return { logoutMutation, results: mutationResults };
};