import gql from 'graphql-tag'


const LOGIN_USER = gql`
	mutation loginUser($inputArg: LoginInput!){
		login(inputArg:$inputArg){
			status
			errors
			user{
				id
				lastLogin
				isSuperuser
				username
				firstName
				lastName
				email
				isStaff
				isActive
				dateJoined
				profile{
					levelAccess
				}
			}
		}
	}
`

export {LOGIN_USER}
