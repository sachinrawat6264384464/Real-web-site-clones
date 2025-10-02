 setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('.home1').style.display = 'block';
  }, 3000); 
 const btn1 = document.querySelector("#btn1"); // id select kiya
 const sun = document.querySelector(".sun");
 const moon = document.querySelector(".moon");
 

 let value = 1;

 btn1.addEventListener("click", () => {
   const consultation = document.querySelector(".consultation-section");
   if (value === 1) {
     consultation.style.opacity = "1";
     value = 0;
   } else {
     consultation.style.opacity = "0";
     value = 1;
   }
 });


 // 🌙 Moon -> Dark Mode
moon.addEventListener("click", () => {
    document.querySelector(".nav").style.backgroundColor = "";
    document.querySelector("body").style.backgroundColor = "#121212"; // better dark background
    
    document.querySelector(".expertservices").style.color = "white"; // better dark background
    document.querySelector(".expertservices2").style.color = "white"; // better dark background
    document.querySelectorAll(".items").forEach(item => {
        item.style.color = ""; // readable
    });
    const mediaicon = document.querySelector(".mediaicon");
    if(mediaicon) {
        mediaicon.style.border = "2px solid black";
        mediaicon.style.opacity = "0.8";
    }
    // Show sun, hide moon
    sun.style.display = "inline-block";
    moon.style.display = "none";
});

// ☀️ Sun -> Light Mode
sun.addEventListener("click", () => {
    document.querySelector(".nav").style.backgroundColor = "";
    document.querySelector(".expertservices").style.color = "black";
    document.querySelector(".expertservices2").style.color = "black";
    
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelectorAll(".items").forEach(item => {
        item.style.color = "black";
    });
       const mediaicon = document.querySelector(".mediaicon");
    if(mediaicon) {
        mediaicon.style.border = "2px solid white";
        mediaicon.style.opacity = "0.8";
    }
    moon.style.display = "inline-block";
    sun.style.display = "none";
});


