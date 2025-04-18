// ✨ Hero text rotator
const textArray = [
    "Welcome to Our Beauty World",
    "Glow Like Never Before",
    "Your Beauty, Our Duty"
  ];

  let imageArray = [
    "./images/beauty1.jpg",
    "./images/beauty2.webp",
    "./images/beauty3.webp"
  ]

  let index = 0;
  const changingText = document.getElementById("changing-text");
  const changingImage = document.getElementById("changing-image");
  
  setInterval(() => {
    index = (index + 1) % textArray.length;
    changingText.textContent = textArray[index];
    changingImage.src = imageArray[index];
  }, 3000);
  
  
  function scrollToServices() {
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
  }
  
  function goToServices() {
    window.location.href = "services.html"; 
  }
  

  ///////////////////////////////////

  document.addEventListener("DOMContentLoaded", () => {
    const bookBtn = document.querySelector(".book-now-btn");
    bookBtn.addEventListener("click", () => {
      alert("Thanks for choosing Blume! Booking coming soon 💖");
      
      window.location.href = "/booking.html";
    });
  });
  
  ///// time for a chance  //////////////

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });



