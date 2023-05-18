// JavaScript Document

const targetDate = new Date("December 20, " + new Date().getFullYear() + " 00:00:00").getTime();

// Aggiorna il countdown ogni secondo
const countdown = setInterval(function() {
  
  // Ottieni l'ora corrente
  const now = new Date().getTime();
  
  // Calcola la differenza tra l'ora corrente e la data di riferimento
  const difference = targetDate - now;
  
  // Calcola il tempo rimanente in giorni, ore, minuti e secondi
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  // Mostra il countdown nella pagina HTML
  document.getElementById("countdown1").innerHTML = days ;
  document.getElementById("countdown2").innerHTML = hours ;
  document.getElementById("countdown3").innerHTML = minutes ;
  document.getElementById("countdown4").innerHTML = seconds ;

}, 1000);

