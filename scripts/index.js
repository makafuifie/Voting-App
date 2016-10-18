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
		document.getElementById("geolocation").onclick = function() {
			navigator.geolocation.watchPosition(geolocationSuccess, geolocationFail, {enableHighAccuracy:true});
		}
		
		  
		  
	
	};

	function geolocationSuccess(position){
		var geoElement = document.getElementById('geolocation');
		geoElement.innerHTML = 'Latitude: '+position.coords.latitude+ '<br />'+
								'Longitude: '+position.coords.longitude +'<br />'+
								'<hr />'+element.innerHTML;
	}

function geolocationFail(error){
	alert('code: '+ error.code + '\n'+
		'message: '+error.message+ '\n');
}

	function onPhotoDataSuccess(imageData) {

		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}

})();


(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {
		document.getElementById("barcode").onclick = barcodeScanner();
	};
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

})();

(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {
		document.getElementById("geolocation").onclick = barcodeScanner();
	};
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

})();