// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmN4qBz3Aw5x7GO0Z-jB_viG6esOtbFVI",
  authDomain: "huertili-datini.firebaseapp.com",
  databaseURL: "https://huertili-datini-default-rtdb.firebaseio.com",
  projectId: "huertili-datini",
  storageBucket: "huertili-datini.firebasestorage.app",
  messagingSenderId: "675544360936",
  appId: "1:675544360936:web:e50313a4113bf99980265d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const datosRef = ref(db, "datos");

function animateValue(id) {
  const el = document.getElementById(id);
  el.classList.remove("pulse");
  void el.offsetWidth;
  el.classList.add("pulse");
}

onValue(datosRef, (snapshot) => {
  const datos = snapshot.val();

  const aire = parseFloat(datos.humedadAire);
  const suelo = parseFloat(datos.humedadSuelo);
  const temp = parseFloat(datos.temperatura);

  document.getElementById("humAire").textContent = aire + "%";
  document.getElementById("humSuelo").textContent = suelo + "%";
  document.getElementById("temp").textContent = temp + "°C";

  animateValue("humAire");
  animateValue("humSuelo");
  animateValue("temp");
  const cardAire = document.getElementById("cardAire");
  const cardSuelo = document.getElementById("cardSuelo");
  const cardTemp = document.getElementById("cardTemp");

  
  if (aire < 30) cardAire.style.background = "#fff6b0";
  else if (aire <= 60) cardAire.style.background = "#d5f7d1";
  else cardAire.style.background = "#d9f0ff";


  if (suelo < 30) cardSuelo.style.background = "#ffc7c7";
  else if (suelo <= 60) cardSuelo.style.background = "#fff3a3";
  else cardSuelo.style.background = "#d5f7d1";

  if (temp < 10) cardTemp.style.background = "#d9f0ff";
  else if (temp <= 28) cardTemp.style.background = "#d5f7d1";
  else cardTemp.style.background = "#ffc7c7";
});
