import gql from 'graphql-tag'

const STORAGE_LIST = gql`
	query storageList {
		storageList {
			id
			name
			file
			description
		}
	}
`

const CUSTOMER_LIST = gql`
  query customerList {
      customerList{
        id
        name
      }
  }
`

const EACH_CUSTOMER_PAGE = gql`
	query CustomerById($id: ID!){
		customerById(id: $id){
			id
			name
			fields{
				id
				name
			}
		}
	}
`

const RUN_LIST_BY_CUSTOMER_ID = gql`
	query runListByCustomerId($id: ID!) {
		runListByCustomerId(customerId: $id) {
			id
			name
			well {
				id
				number
				pad {
					id
					number
					field {
						name
						id
					}
				}
			}
			dateStart
			resultType {
				id
				name
			}
			defect {
				id
				name
			}
			description
			files {
				id
			}
		}
	}
`

const CHECK_LOGIN = gql`
	query checkLogin {
		checkLogin{
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
		}
	}
`

const LOGOUT = gql`
	query logout {
		logout{
			status
		}
	}
`

const MODULE_LIST_MAIN_PAGE = gql`
	query moduleList{
		moduleList{
			id
			name
			designation
			number
			dateBuild
			timeCirculation
			customer{
				name
			}
			exploiters{
				name
			}
			place
			files {
				id
			}
		}
	}
`

const RUN_BY_ID = gql`
	query runById($id: ID!) {
		runById(id: $id) {
			name
			telesystema {
				id
				name
				designation
				number
			}
			dateStart
			dateFinish
			resultType {
				id
				name
			}
			drillingIntervalFrom
			drillingIntervalTo
			totalPenetration
			timeUnderRotorBarrel
			timeCirculation
			defect {
				id
				name
			}
			resultURL
			description
			po
		}
	}
`

const FIELD_BY_ID = gql`
	query FIELD_BY_ID($id:ID!){
		fieldById(id:$id){
			id
			name
			customer{
				id
				name
			}
			pads{
				id
				number
			}
		}
	}
`

const PAD_BY_ID = gql`
	query PAD_BY_ID($id:ID!){
		padById(id:$id){
				id
				number
				field{
					id
					name
					customer{
						id
						name
					}
				}
				wells{
					id
					pad{
						id
						number
					}
					number
					typeWell
				}
			}
		}
`

const WELL_BY_ID = gql`
	query runByID($id:ID!){
		wellById(id:$id){
			id
			number
			pad{
				id
				number
				field{
					id
					name
					customer{
						id
						name
					}
				}
			}
			typeWell
			runs{
				id
				name
				dateStart
				resultType{
					id
					name
				}
				defect{
					id
					name
				}
				description
			}
		}
	}
`


export {
	STORAGE_LIST,

	RUN_BY_ID, RUN_LIST_BY_CUSTOMER_ID,

	FIELD_BY_ID, PAD_BY_ID, WELL_BY_ID,

	CHECK_LOGIN, LOGOUT,

	CUSTOMER_LIST, EACH_CUSTOMER_PAGE,

	MODULE_LIST_MAIN_PAGE
}
