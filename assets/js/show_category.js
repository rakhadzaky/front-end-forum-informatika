function toggle (kategori) {

	if (kategori == "icm") {
		var x = document.querySelectorAll("#icm");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#side");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#tele");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "side") {
		var x = document.querySelectorAll("#side");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#icm");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#tele");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "tele") {
		var x = document.querySelectorAll("#tele");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#icm");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}

		var x = document.querySelectorAll("#side");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.add("display_none");
		}
	}
	else if (kategori == "all") {
		var x = document.querySelectorAll("#side");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#icm");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}

		var x = document.querySelectorAll("#tele");

		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("display_none");
		}
	}
}