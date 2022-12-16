export default {
	validate({params}) {
		return /^\d+$/.test(params.id)
	},
}
