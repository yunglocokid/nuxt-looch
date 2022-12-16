export default {
	updated() {
		this.$nextTick(function () {
			$(document).ready(function () {
				$('#example').DataTable();
			})
		})
	},

	mounted() {
		this.$nextTick(function () {
			$(document).ready(function () {
				$('#example').DataTable();
			})
		})
	},
}
