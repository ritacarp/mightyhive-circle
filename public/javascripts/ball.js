


	document.addEventListener('DOMContentLoaded', () => {

		doonload("The message is DOC is loaded")

	}) // DOMContentLoaded

	function doonload(msg) {


		let theBall = document.querySelector('#_ball')
		theBall.classList.add('bgBlue')

		console.log(msg)
	}


