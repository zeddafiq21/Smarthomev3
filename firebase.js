const firebaseConfig = {
	apiKey: "AIzaSyBCEUR21q2-OxbU4ikZTCcnwSGhDfCygh8",
	authDomain: "smarthome-v2-tektronik.firebaseapp.com",
	databaseURL: "https://smarthome-v2-tektronik-default-rtdb.firebaseio.com",
	projectId: "smarthome-v2-tektronik",
	storageBucket: "smarthome-v2-tektronik.appspot.com",
	messagingSenderId: "259874048885",
	appId: "1:259874048885:web:53870a46ac4d722e51a13c",
	measurementId: "G-2SL9TBPRJP"
  };

  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);	// Initialize Firebase
 
$(document).ready(function(){
	var database = firebase.database();
	var Lampu1;

	database.ref().on("value", function(snap){
		Lampu1 = snap.val().Lampu1;
		if(Lampu1 == 1){
			document.getElementById("a").checked = true;  

		} else{
			document.getElementById("a").checked = false;
		}
	});

	$("#a").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu1");

		if(Lampu1 == 1){
			firebaseRef.set(0);
			Lampu1 = 0;
		} else {
			firebaseRef.set(1);
			Lampu1 = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Lampu2;

	database.ref().on("value", function(snap){
		Lampu2 = snap.val().Lampu2;
		if(Lampu2 == 1){
			document.getElementById("b").checked = true;  

		} else{
			document.getElementById("b").checked = false;
		}
	});

	$("#b").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu2");

		if(Lampu2 == 1){
			firebaseRef.set(0);
			Lampu2 = 0;
		} else {
			firebaseRef.set(1);
			Lampu2 = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Lampu3;

	database.ref().on("value", function(snap){
		Lampu3 = snap.val().Lampu3;
		if(Lampu3 == 1){
			document.getElementById("c").checked = true;  

		} else{
			document.getElementById("c").checked = false;
		}
	});

	$("#c").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu3");

		if(Lampu3 == 1){
			firebaseRef.set(0);
			Lampu3 = 0;
		} else {
			firebaseRef.set(1);
			Lampu3 = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Lampu4;

	database.ref().on("value", function(snap){
		Lampu4 = snap.val().Lampu4;
		if(Lampu4 == 1){
			document.getElementById("d").checked = true;  

		} else{
			document.getElementById("d").checked = false;
		}
	});

	$("#d").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu4");

		if(Lampu4 == 1){
			firebaseRef.set(0);
			Lampu4 = 0;
		} else {
			firebaseRef.set(1);
			Lampu4 = 1;
		}
	})
});
 
$(document).ready(function(){
	var database = firebase.database();
	var Lampu5;

	database.ref().on("value", function(snap){
		Lampu5 = snap.val().Lampu5;
		if(Lampu5 == 1){
			document.getElementById("e").checked = true;  

		} else{
			document.getElementById("e").checked = false;
		}
	});

	$("#e").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu5");

		if(Lampu5 == 1){
			firebaseRef.set(0);
			Lampu5 = 0;
		} else {
			firebaseRef.set(1);
			Lampu5 = 1;
		}
	})
});


$(document).ready(function(){
	var database = firebase.database();
	var Lamp6;

	database.ref().on("value", function(snap){
		Lampu6 = snap.val().Lampu6;
		if(Lampu6 == 1){
			document.getElementById("f").checked = true;  

		} else{
			document.getElementById("f").checked = false;
		}
	});

	$("#f").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu6");

		if(Lampu6 == 1){
			firebaseRef.set(0);
			Lampu6 = 0;
		} else {
			firebaseRef.set(1);
			Lampu6 = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Lampu7;

	database.ref().on("value", function(snap){
		Lampu7 = snap.val().Lampu7;
		if(Lampu7 == 1){
			document.getElementById("g").checked = true;  

		} else{
			document.getElementById("g").checked = false;
		}
	});

	$("#g").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu7");

		if(Lampu7 == 1){
			firebaseRef.set(0);
			Lampu7 = 0;
		} else {
			firebaseRef.set(1);
			Lampu7 = 1;
		}
	})
});
$(document).ready(function(){
	var database = firebase.database();
	var Lampu8;

	database.ref().on("value", function(snap){
		Lampu8 = snap.val().Lampu8;
		if(Lampu8 == 1){
			document.getElementById("h").checked = true;  

		} else{
			document.getElementById("h").checked = false;
		}
	});

	$("#h").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu8");

		if(Lampu8 == 1){
			firebaseRef.set(0);
			Lampu8 = 0;
		} else {
			firebaseRef.set(1);
			Lampu8 = 1;
		}
	})
});


var database = firebase.database();
var dataRef1 = database.ref('Tegangan/PV');
var dataRef2 = database.ref('Arus/PV');
var dataRef3 = database.ref('Daya/PV');
var dataRef4 = database.ref('Tegangan/Baterai');
var dataRef5 = database.ref('Arus/Baterai');
var dataRef6 = database.ref('Daya/Baterai');
var dataRef7 = database.ref('Tegangan/Beban');
var dataRef8 = database.ref('Arus/Beban');
var dataRef9 = database.ref('Daya/Beban');
var dataRef10 = database.ref('Suhu/Ruangan1');
var dataRef11 = database.ref('Suhu/Ruangan2');
var dataRef12 = database.ref('Suhu/Ruangan3');
var dataRef13 = database.ref('Suhu/Ruangan4');
var dataRef14 = database.ref('Suhu/Ruangan5');
var dataRef15 = database.ref('Suhu/Ruangan6');





// dataRef7.on('value', function(getdata1){
//     var kwh = getdata1.val();
	
// document.getElementById("kwh").innerHTML= "Rp" + kwh.toFixed(2); 

// })


// dataRef5.on('value', function(getdata1){
//     var energi = getdata1.val().toFixed(2);

// document.getElementById("metering").innerHTML= energi + " kWh"; 

// })



dataRef1.on('value', function(getdata1){
    var teganganPV = getdata1.val().toFixed(2);
document.getElementById("pvVoltage").innerHTML= teganganPV +" V"; 

})
dataRef2.on('value', function(getdata1){
    var arusPV = getdata1.val();
document.getElementById("pvCurrent").innerHTML= arusPV +" A"; 

})
dataRef3.on('value', function(getdata1){
    var dayaPV = getdata1.val();
document.getElementById("dayaPV").innerHTML= dayaPV +""; 

})
dataRef4.on('value', function(getdata1){
    var teganganBaterai = getdata1.val();
document.getElementById("teganganBaterai").innerHTML= teganganBaterai +"V"; 

})

dataRef5.on('value', function(getdata1){
    var arusBaterai = getdata1.val();
document.getElementById("arusBaterai").innerHTML= arusBaterai +" A"; 

})
dataRef6.on('value', function(getdata1){
    var dayaBaterai = getdata1.val();
document.getElementById("dayaBaterai").innerHTML= dayaBaterai +" W"; 

})
dataRef7.on('value', function(getdata1){
    var teganganBeban = getdata1.val();
document.getElementById("teganganBeban").innerHTML= teganganBeban +" V"; 

})



dataRef8.on('value', function(getdata1){
    var arusBeban = getdata1.val();
document.getElementById("arusBeban").innerHTML= arusBeban +" A"; 

})

dataRef9.on('value', function(getdata1){
    var dayaBeban = getdata1.val();
document.getElementById("dayaBeban").innerHTML= dayaBeban +" W"; 

})
dataRef10.on('value', function(getdata1){
    var suhuRuangan1 = getdata1.val();
document.getElementById("ruangan1").innerHTML= suhuRuangan1 +" Celcius"; 

})
dataRef11.on('value', function(getdata1){
    var suhuRuangan2 = getdata1.val();
document.getElementById("ruangan2").innerHTML= suhuRuangan2 +" Celcius"; 
})
dataRef12.on('value', function(getdata1){
    var suhuRuangan3 = getdata1.val();
document.getElementById("ruangan3").innerHTML= suhuRuangan3 +" Celcius"; 

})
dataRef13.on('value', function(getdata1){
    var suhuRuangan4 = getdata1.val();
document.getElementById("ruangan4").innerHTML= suhuRuangan4 +" Celcius"; 

})
dataRef14.on('value', function(getdata1){
    var suhuRuangan5 = getdata1.val();
document.getElementById("ruangan5").innerHTML= suhuRuangan5 +" Celcius"; 

})
dataRef15.on('value', function(getdata1){
    var suhuRuangan6 = getdata1.val();
document.getElementById("ruangan6").innerHTML= suhuRuangan6 +" Celcius"; 

})
// dataRef13.on('value', function(getdata1){
//     var batterayPower = getdata1.val();
// document.getElementById("batterayPower").innerHTML= batterayPower +" W"; 

// })
// dataRef14.on('value', function(getdata1){
//     var pvEnergy = getdata1.val();
// document.getElementById("pvEnergy").innerHTML= pvEnergy +" Wh"; 

// })
// dataRef15.on('value', function(getdata1){
//     var batterayEnergy = getdata1.val();
// document.getElementById("batterayEnergy").innerHTML= batterayEnergy +" Wh"; 

// })

// const child = document.getElementById("#teg")






