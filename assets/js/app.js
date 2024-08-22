document.addEventListener("DOMContentLoaded", () => {
  /*==================== CURSOR ====================*/
  const cursor = document.getElementById("cursor");
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const delay = 0.15; // Adjust the delay if needed

  // Track mouse position
  const editCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  // Update cursor position smoothly
  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(updateCursor);
  };

  // Toggle hover class
  const addHoverClass = () => {
    cursor.classList.add("biggerCursor");
  };

  const removeHoverClass = () => {
    cursor.classList.remove("biggerCursor");
  };

  // Toggle drag class
  const addDragClass = () => {
    cursor.classList.add("dragCursor");
  };

  const removeDragClass = () => {
    cursor.classList.remove("dragCursor");
  };

  // Add event listeners for cursor movement
  window.addEventListener("mousemove", editCursor);
  updateCursor(); // Start the cursor animation loop

  // Handle hover states
  const hoverElements = document.querySelectorAll(".getHover");
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", addHoverClass);
    el.addEventListener("mouseleave", removeHoverClass);
  });

  // Handle drag elements
  const dragElements = document.querySelectorAll(".drag");
  dragElements.forEach((el) => {
    el.addEventListener("mouseenter", addDragClass);
    el.addEventListener("mouseleave", removeDragClass);
  });

  // For hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    overlay.classList.toggle("active");

    // Animate hamburger icon to X
    hamburger.querySelectorAll(".line")[0].style.transform =
      overlay.classList.contains("active")
        ? "rotate(45deg) translateY(6px)"
        : "rotate(0)";
    hamburger.querySelectorAll(".line")[1].style.transform =
      overlay.classList.contains("active")
        ? "rotate(-45deg) translateY(-6px)"
        : "rotate(0)";
  });

  /*==================== CHANGE ACTIVE CLASS ====================*/
  document.querySelectorAll(".nav-link").forEach((link) => {
    console.log(link.href);
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });

  /*==================== VANILLA TILT ====================*/
  VanillaTilt.init(document.querySelectorAll(".container_copy"), {
    max: 25,
    speed: 400,
    scale: 1.1,
  });

  /*==================== SWIPERJS FEATURES  ====================*/
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        // Mobile devices
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        // Small tablets
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        // Tablets
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        // Laptops and desktops
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        // Larger screens
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  /* ====================================== ANIMATE ON SCROLL ====================================== */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
});
