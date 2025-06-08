$(document).ready(function() {
  const images = [
    "banner.png",
    "darkdarkeryetdarker.jpg",
    "coolmies.jpg",
    "mesto.jpg"
  ];
  let currentIndex = 0;
  
  // Prednačítanie obrázkov
  images.forEach(src => {
    $('<img/>')[0].src = src;
  });

  function updateSlider() {
    $('#slider-image').attr('src', images[currentIndex]);
  }

  $('#prev').click(function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
  });

  $('#next').click(function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  updateSlider();
});

$(document).ready(function() {
  // Pri kliknutí na hamburger ikonu prepneme menu a zároveň zmeníme text ikony
  $('#menu-toggle').click(function() {
    // Prepneme viditeľnosť menu s animáciou
    $('#main-nav .menu').slideToggle(300);
    
    // Prepnutie triedy 'open' na ikone
    $(this).toggleClass('open');
    
    // Ak má ikona triedu open, zmeníme jej text na "X", inak na "☰"
    if ($(this).hasClass('open')) {
      $(this).html('X');
    } else {
      $(this).html('☰');
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".about, .ryan-monologue, .history, .values, .founder, .awards");
  
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 300);
  });

  const signature = document.querySelector(".signature");
  if (signature) {
    signature.style.opacity = "0";
    setTimeout(() => {
      signature.style.transition = "opacity 2s ease-in-out";
      signature.style.opacity = "1";
    }, 2000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const bgAudio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("audio-toggle");

  bgAudio.volume = 0.6;

  const playingState = localStorage.getItem("bgAudioPlaying");
  if (playingState === "true") {
    bgAudio.play();
  } else {
    bgAudio.pause();
  }

  const savedTime = localStorage.getItem("bgAudioCurrentTime");
  if (savedTime !== null) {
    bgAudio.addEventListener("loadedmetadata", function () {
      bgAudio.currentTime = parseFloat(savedTime);
    });
  }

  bgAudio.addEventListener("timeupdate", function () {
    localStorage.setItem("bgAudioCurrentTime", bgAudio.currentTime);
  });

  toggleBtn.addEventListener("click", function () {
    if (bgAudio.paused || bgAudio.muted) {
      bgAudio.muted = false;
      bgAudio.play();
      localStorage.setItem("bgAudioPlaying", "true");
    } else {
      bgAudio.pause();
      localStorage.setItem("bgAudioPlaying", "false");
    }
  });
});


function typeWriter(element, delay = 50) {
  const text = element.text();
  element.text('');
  let i = 0;
  const timer = setInterval(function() {
    element.append(text.charAt(i));
    i++;
    if (i > text.length) clearInterval(timer);
  }, delay);
}

$(document).ready(function(){
  $('.ryan-monologue p').each(function() {
    typeWriter($(this));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = ["rapture.jpg", "bd.jpg", "mestecko.jpg", "velry.jpg"];
  let currentIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function updateImage() {
    sliderImage.src = images[currentIndex];
  }

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  updateImage();
});
