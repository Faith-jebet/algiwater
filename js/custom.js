(function () {
  "use strict";

  /* =============================================
     Hero Typing Animation
     Types out the banner headline letter by letter
  ============================================= */
  var heroEl = document.querySelector(".banner_hero .banner_taital");
  if (heroEl) {
    var fullText = heroEl.textContent.trim();
    heroEl.textContent = "";
    heroEl.classList.add("hero-typing");
    var i = 0;
    var typingInterval = setInterval(function () {
      if (i < fullText.length) {
        heroEl.textContent += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        heroEl.classList.remove("hero-typing");
        heroEl.classList.add("hero-typed");
      }
    }, 45);
  }

  /* =============================================
     Scroll-Tiggered Fade-In Animation
     Sections fade in when they scroll into view
  ============================================= */
  var fadeEls = document.querySelectorAll(".about_section, .services_section, .facebook_section, .projects_section, .footer_section, .box_main, .facebook_card, .container_main");
  if (fadeEls.length > 0 && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach(function (el) {
      el.classList.add("fade-in-hidden");
      observer.observe(el);
    });
  }

  /* =============================================
     Read More Toggle — works on all pages
  ============================================= */
  document.querySelectorAll(".readmore_button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var parent = button.closest(".box_main, .project_main");
      if (!parent) return;
      var content = parent.querySelector(".readmore_content, .readmore_contents");
      if (!content) {
        content = button.parentElement.previousElementSibling;
      }
      if (!content) return;
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Read Less";
      } else {
        content.style.display = "none";
        button.textContent = "Read More";
      }
    });
  });

  /* =============================================
     Navbar Toggler (mobile menu)
  ============================================= */
  var toggler = document.querySelector(".navbar-toggler");
  var menu = document.getElementById("navbarSupportedContent");
  if (toggler && menu) {
    toggler.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.toggle("show");
      toggler.setAttribute("aria-expanded", menu.classList.contains("show") ? "true" : "false");
    });
    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      });
    });
  }
/* =============================================
     Gallery Carousel Init
  ============================================= */
  var galleryCarousel = document.getElementById("galleryCarousel");
  if (galleryCarousel && typeof $ !== "undefined") {
    $("#galleryCarousel").carousel({ interval: 3000, pause: "hover" });
  }

  /* =============================================
     Video Showcase Play Button
  ============================================= */
  var videoCard = document.querySelector(".video_card_inner");
  var playBtn = document.getElementById("videoPlayBtn");
  var video = document.getElementById("showcaseVideo");
  if (videoCard && playBtn && video) {
    playBtn.addEventListener("click", function () {
      videoCard.classList.add("playing");
      video.play();
    });
    video.addEventListener("ended", function () {
      videoCard.classList.remove("playing");
    });
    video.addEventListener("pause", function () {
      videoCard.classList.remove("playing");
    });
  }
})();