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
	var Lampu;

	database.ref().on("value", function(snap){
		Lampu = snap.val().Lampu;
		if(Lampu == 1){
			document.getElementById("a").checked = true;  

		} else{
			document.getElementById("a").checked = false;
		}
	});

	$("#a").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu");

		if(Lampu == 1){
			firebaseRef.set(0);
			Lampu = 0;
		} else {
			firebaseRef.set(1);
			Lampu = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Televisi;

	database.ref().on("value", function(snap){
		Televisi = snap.val().Televisi;
		if(Televisi == 1){
			document.getElementById("b").checked = true;  

		} else{
			document.getElementById("b").checked = false;
		}
	});

	$("#b").click(function(){
		var firebaseRef = firebase.database().ref().child("Televisi");

		if(Televisi == 1){
			firebaseRef.set(0);
			Televisi = 0;
		} else {
			firebaseRef.set(1);
			Televisi = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var ac;

	database.ref().on("value", function(snap){
		ac = snap.val().ac;
		if(ac == 1){
			document.getElementById("c").checked = true;  

		} else{
			document.getElementById("c").checked = false;
		}
	});

	$("#c").click(function(){
		var firebaseRef = firebase.database().ref().child("ac");

		if(ac == 1){
			firebaseRef.set(0);
			ac = 0;
		} else {
			firebaseRef.set(1);
			ac = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Kulkas;

	database.ref().on("value", function(snap){
		Kulkas = snap.val().Kulkas;
		if(Kulkas == 1){
			document.getElementById("d").checked = true;  

		} else{
			document.getElementById("d").checked = false;
		}
	});

	$("#d").click(function(){
		var firebaseRef = firebase.database().ref().child("Kulkas");

		if(Kulkas == 1){
			firebaseRef.set(0);
			Kulkas = 0;
		} else {
			firebaseRef.set(1);
			Kulkas = 1;
		}
	})
});
 
var database = firebase.database();
var dataRef1 = database.ref('teganganvac');
var dataRef2 = database.ref('arusvac');
var dataRef3 = database.ref('dayavac');
var dataRef4 = database.ref('powerfactorac');
var dataRef5 = database.ref('energiac');
var dataRef6 = database.ref('frekuensiac');
var dataRef7 = database.ref('kwhmeter');
var dataRef8 = database.ref('teganganpv');
var dataRef9 = database.ref('teganganbaterai');
var dataRef10 = database.ref('aruspv');
var dataRef11 = database.ref('arusbaterai');
var dataRef12 = database.ref('dayapv');
var dataRef13 = database.ref('dayabaterai');
var dataRef14 = database.ref('energipv');
var dataRef15 = database.ref('energibaterai');


dataRef7.on('value', function(getdata1){
    var kwh = getdata1.val();
	
document.getElementById("kwh").innerHTML= "Rp" + kwh.toFixed(2); 

})


dataRef5.on('value', function(getdata1){
    var energi = getdata1.val().toFixed(2);

document.getElementById("metering").innerHTML= energi + " kWh"; 

})



dataRef1.on('value', function(getdata1){
    var teganganvac = getdata1.val().toFixed(2);
document.getElementById("t").innerHTML= teganganvac +" V"; 

})
dataRef2.on('value', function(getdata1){
    var arus = getdata1.val();
document.getElementById("arus").innerHTML= arus +" A"; 

})
dataRef6.on('value', function(getdata1){
    var frekuensi = getdata1.val();
document.getElementById("frekuensi").innerHTML= frekuensi +" Hz"; 

})
dataRef4.on('value', function(getdata1){
    var fdaya = getdata1.val();
document.getElementById("powerfactor").innerHTML= fdaya +""; 

})
dataRef3.on('value', function(getdata1){
    var daya = getdata1.val();
document.getElementById("daya").innerHTML= daya +"W"; 

})

dataRef8.on('value', function(getdata1){
    var pvVoltage = getdata1.val();
document.getElementById("pvVoltage").innerHTML= pvVoltage +" V"; 

})
dataRef9.on('value', function(getdata1){
    var batterayVoltage = getdata1.val();
document.getElementById("batterayVoltage").innerHTML= batterayVoltage +" V"; 

})


dataRef10.on('value', function(getdata1){
    var pvCurrent = getdata1.val();
document.getElementById("pvCurrent").innerHTML= pvCurrent +" A"; 

})
dataRef11.on('value', function(getdata1){
    var batterayCurrent = getdata1.val();
document.getElementById("batterayCurrent").innerHTML= batterayCurrent +" A"; 

})

dataRef12.on('value', function(getdata1){
    var pvPower = getdata1.val();
document.getElementById("pvPower").innerHTML= pvPower +" W"; 

})
dataRef13.on('value', function(getdata1){
    var batterayPower = getdata1.val();
document.getElementById("batterayPower").innerHTML= batterayPower +" W"; 

})
dataRef14.on('value', function(getdata1){
    var pvEnergy = getdata1.val();
document.getElementById("pvEnergy").innerHTML= pvEnergy +" Wh"; 

})
dataRef15.on('value', function(getdata1){
    var batterayEnergy = getdata1.val();
document.getElementById("batterayEnergy").innerHTML= batterayEnergy +" Wh"; 

})

// const child = document.getElementById("#teg")






