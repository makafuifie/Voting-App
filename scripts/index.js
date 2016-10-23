(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("capturePhoto").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}
		// document.getElementById("barcode").onclick = barcodeScanner();
		// document.getElementById("geolocation").onclick=function(){
		// 	navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
		// }
		// document.getElementById("watch").onclick = function() {
		// 	navigator.geolocation.watchPosition(geolocationSuccess, geolocationFail, {
		// 		maximumAge: 3000, timeout: 10000, enableHighAccuracy: true 
		// 	});
		// }
		  
		  
	
	};
	function onPhotoDataSuccess(imageData) {
		alert("success");
		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}
	// function barcodeScanner(){
	// 	cordova.plugins.barcodeScanner.scan(
	// 			function (result) {
	// 				alert("We got a barcode\n" +
	// 					"Result: " + result.text + "\n" +
	// 					"Format: " + result.format + "\n" +
	// 					"Cancelled: " + result.cancelled);
	// 			},
	// 			function (error) {
	// 				alert("Scanning failed: " + error);
	// 			}
	// 			);
	// 	}
		
		
		
	// function onPositionSuccess(position){
	// 	var geoElement = document.getElementById('geolocation');
	// 	// alert('Latitude: '+position.coords.latitude+ '\n'+
	// 	// 	'Longitude: '+position.coords.longitude +'\n');
		
	// 	 geoElement.innerHTML = 'Latitude: '+position.coords.latitude+ '<br />'+
	// 	 						'Longitude: '+position.coords.longitude +'<br />'+
	// 							'<hr />'+geoElement.innerHTML;
	// }

	// function onPositionError(error){
	// 	alert('code: '+ error.code + '\n'+
	// 		'message: '+error.message+ '\n');
	// }

	// function geolocationSuccess(position){
	// 	var geoElement = document.getElementById('watch');
	// 	// alert('Latitude: '+position.coords.latitude+ '\n'+
	// 	// 	'Longitude: '+position.coords.longitude +'\n');
		
	// 	geoElement.innerHTML = 'Latitude: '+position.coords.latitude+ '<br />'+
	// 							'Longitude: '+position.coords.longitude +'<br />'+
	// 							'<hr />'+geoElement.innerHTML;
	// }

	// function geolocationFail(error){
	// 	alert('code: '+ error.code + '\n'+
	// 		'message: '+error.message+ '\n');
	// }

})();

(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	
	function onDeviceReady() {
		

		document.getElementById("barcode").onclick = function() {
			cordova.plugins.barcodeScanner.scan(
				function (result) {
					alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
				},
				function (error) {
					alert("Scanning failed: " + error);
				}
				);
		}
		
		
		
	};
	
	
}

)();
(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	
	
	function onDeviceReady() {
		
		document.getElementById("geolocation").onclick=function(){
			navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError, {timeout: 30000});
		}

	};
	function onPositionSuccess(position){
		//var geoElement = document.getElementById('geolocation');
		//alert('Latitude: '+position.coords.latitude+ '\n'+
		 	//'Longitude: '+position.coords.longitude +'\n');
		
		// geoElement.innerHTML = 'Latitude: '+position.coords.latitude+ '<br />'+
		// 						'Longitude: '+position.coords.longitude +'<br />'+
		// 						'<hr />'+geoElement.innerHTML;

		var lat  =position.coords.latitude;
		var long  = position.coords.longitude;

		//Google maps

		var myLatlng = new google.maps.LatLng(lat,lang);
		var mapOptions = {zoom:4, center:myLatlng};
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var marker = new google.maps.Marker({position:myLatlng, map:map});

	}

	function onPositionError(error){
		alert('code: '+ error.code + '\n'+
			'message: '+error.message+ '\n');
	}

	google.maps.event.addDomListener(window, 'load', onPositionSuccess);
}

)();

(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	
	
	function onDeviceReady() {
		
		document.getElementById("watch").onclick = function() {
			navigator.geolocation.watchPosition(geolocationSuccess, geolocationFail, {
				maximumAge: 3000, timeout: 10000, enableHighAccuracy: true 
			});
		}

	};
	function geolocationSuccess(position){
		var geoElement = document.getElementById('watch');
		// alert('Latitude: '+position.coords.latitude+ '\n'+
		// 	'Longitude: '+position.coords.longitude +'\n');
		
		geoElement.innerHTML = 'Latitude: '+position.coords.latitude+ '<br />'+
								'Longitude: '+position.coords.longitude +'<br />'+
								'<hr />'+geoElement.innerHTML;
	}

	function geolocationFail(error){
		alert('code: '+ error.code + '\n'+
			'message: '+error.message+ '\n');
	}
}

)();