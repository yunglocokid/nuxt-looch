export default {
	methods: {
		convertTime(utcDate){
			const date = new Date(utcDate);
			return date.toLocaleString() // Локальное время
		}
	}
}
