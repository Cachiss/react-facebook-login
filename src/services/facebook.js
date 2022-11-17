export const facebookInit = () => {
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
				js = d.createElement(s); js.id = id;
				js.src = "https://connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk')); 
			
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: process.env.REACT_APP_FACEBOOK_APP_ID,
				cookie: true,
				xfbml: true,
				version: 'v15.0'
			});
			window.FB.AppEvents.logPageView();   
		}
}


export const getLoginStatus = () => {
	window.FB.getLoginStatus(function(response) {
		console.log(response);
	});
}

export const facebookRegister = () => {
	window.FB.login(function(response) {
		if (response.authResponse) {
			console.log('Cargando.... ');
			console.log(response);
			window.FB.api(
				'/me',
				'GET',
				{"fields":"name, email"},
				function(response2) {
					const data = {
						name: response2.name,
						email: response2.email,
						id_facebook: response2.id,
						token_facebook: response.authResponse.accessToken
					}
					console.log(data);
				}
			  );	
		}else{
			console.log('Fallo el login.');
		}
		
	});
}

export const facebookLogin = () => {
	window.FB.login(function(response) {
		if (response.authResponse) {
			console.log('Cargando.... ');
			console.log(response);
			window.FB.api(
				'/me',
				'GET',
				{"fields":"name, email"},
				function(response2) {
					const data = {
						email: response2.email,
						id_facebook: response2.id,
						token_facebook: response.authResponse.accessToken
					}
					console.log(data);
				}
			  );	
		}else{
			console.log('Fallo el login.');
		}
		
	});
}

export const facebookLogout = () => {
	window.FB.logout(function(response) {
		console.log(response);
	});
}