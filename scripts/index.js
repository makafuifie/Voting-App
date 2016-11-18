// // (function() {

// 	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
// 	var pictureSource;
// 	var destinationType;
// 	function onDeviceReady() {
// 		alert("fgf");
// 		pictureSource = navigator.camera.PictureSourceType;
// 		destinationType = navigator.camera.DestinationType;
// 		console.log("hello");
// 		document.getElementById("capturePhoto").onclick = function() {
// 			console.log("hello");
// 			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
// 				quality : 50,

// 				destinationType : destinationType.DATA_URL
// 			});
// 		};
// 		 document.getElementById("barcode").onclick = function() {
// 			console.log("hdf");
// 			cordova.plugins.barcodeScanner.scan(
// 				function (result) {
// 					alert("We got a barcode\n" +
// 						"Result: " + result.text + "\n" +
// 						"Format: " + result.format + "\n" +
// 						"Cancelled: " + result.cancelled);
// 				},
// 				function (error) {
// 					alert("Scanning failed: " + error);
// 				}
// 				);
// 		}; 


// 	}

// 	function onPhotoDataSuccess(imageData) {

// 		var smallImage = document.getElementById('smallImage');

// 		smallImage.style.display = 'block';

// 		smallImage.src = "data:image/jpeg;base64," + imageData;

// 	}

// 	function onFail(message) {

// 		alert('Failed because: ' + message);

// 	}

// // })();



(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	
	function onDeviceReady() {
		alert("hello");

		document.getElementById("barcode").onclick = function() {
			cordova.plugins.barcodeScanner.scan(barcodeScanner, barcodeFail,
				{
					"preferFrontCamera": true,
					"showFlipCameraButton": true,
					"prompt":"Place a barcode inside the scan area",
					"orientation": "landscape"
				});
				
		}
		
		
		
	};
	function barcodeScanner(result) {
		alert("We got a barcode\n" +
			"Result: " + result.text + "\n" +
			"Format: " + result.format + "\n" +
			"Cancelled: " + result.cancelled);
	}
	function barcodeFail(error){
		alert("Scanning failed: " + error);
	}
	
}

)();
