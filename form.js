const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	var text1 = document.getElementById('sendtime').value;
	var text2 = document.getElementById('userid').value;
	var text3 = document.getElementById('sendtext').value;

	var my_text = `<b>Iftorlik vaqti: <em>${text1}</em></b>%0A%0A${text3}`

	var token = "5103209388:AAHyt_tDJWgx-2LwDCsOJniwa9wxV0Rqzdo";
	var chat_id = text2;
	var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

	let api = new XMLHttpRequest();
	api.open("GET", url, true);
	api.send();

	document.getElementById('card').style.display = 'block';
	console.log("Yuborildi")
})

form.addEventListener("submit", (e) => {
	e.preventDefault();

	var text1 = document.getElementById('sendtime2').value;
	var text2 = document.getElementById('userid2').value;
	var text3 = document.getElementById('sendtext2').value;

	var my_text = `<b>Saharlik vaqti: <em>${text1}</em></b>%0A%0A${text3}`

	var token = "5103209388:AAHyt_tDJWgx-2LwDCsOJniwa9wxV0Rqzdo";
	var chat_id = text2;
	var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

	let api = new XMLHttpRequest();
	api.open("GET", url, true);
	api.send();

	document.getElementById('card').style.display = 'block';
	console.log("Yuborildi")
})

form.addEventListener("submit", (e) => {
	e.preventDefault();


	var text2 = document.getElementById('userid3').value;
	var text3 = document.getElementById('sendtext3').value;

	var my_text = `<b>Qomar | ramazan</b>%0A%0A${text3}`

	var token = "5103209388:AAHyt_tDJWgx-2LwDCsOJniwa9wxV0Rqzdo";
	var chat_id = text2;
	var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

	let api = new XMLHttpRequest();
	api.open("GET", url, true);
	api.send();

	document.getElementById('card').style.display = 'block';
	console.log("Yuborildi")
})



