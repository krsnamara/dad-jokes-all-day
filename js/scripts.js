const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dad-jokes.p.rapidapi.com/joke/type/general",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "5e13500d5bmsh9a68ff011401beep10e215jsnc7be98aadae1",
		"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});