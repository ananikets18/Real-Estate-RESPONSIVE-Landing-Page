/* ==== TOGGLE MENU ==== */
/* ===== NAVMENU ===== */
const navMenu = document.querySelector(".nav_menu");
/* ===== TOGGLE BUTTON ===== */
const toggleBtn = document.querySelector(".nav_menu_btn");

/* ===== EVENTLISTENER ON TOGGLE BUTTON ===== */
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
/* ==== TOGGLE ACCORDION (FAQ) ==== */
const faqs = document.querySelectorAll(".faq");

/* ==== EVENT-LISTENER ON ACCORDION (FAQ) ==== */
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
/* ===== GSAP ANIMATIONS ===== */

// ===== NAVBAR ===== //
gsap.from(".logo, .nav_menu_btn, .nav_menu_list_item, .contact_btn", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
  y: -10,
});

gsap.from(".hero_img", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_menu_list_item a ");

function linkAct() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => {
  n.addEventListener("click", linkAct);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const scrollAnimation = ScrollReveal({
  origin: "top",
  distance: "10px",
  duration: 1500,
  delay: 100,
});
/* === HERO === */
scrollAnimation.reveal(".hero__headline", {});
scrollAnimation.reveal(".hero__subtitle", { delay: 200 });
scrollAnimation.reveal(".get_started_btn", { delay: 400 });
scrollAnimation.reveal(".stats", { interval: 400 });

/* === FEATURED === */
scrollAnimation.reveal(".featured p", { delay: 300 });
scrollAnimation.reveal(".featured_list_item", { interval: 400 });

/* === FEATURES === */
scrollAnimation.reveal(".section_name", { delay: 500 });
scrollAnimation.reveal(".section_title", { delay: 600 });
scrollAnimation.reveal(".features_card", { interval: 1200 });

/* === BLOG === */
scrollAnimation.reveal(".grid", { delay: 600 });
scrollAnimation.reveal(".blog_card", { interval: 1200 });

/* === TESTIMONIAL === */
scrollAnimation.reveal(".testimonial_item", { interval: 1200 });

/* === QUESTIONS === */
scrollAnimation.reveal(".questions_subtext, .see_more_btn", {
  delay: 700,
  origin: "left",
  distance: "20px",
});

scrollAnimation.reveal(".accordion_wrapper", {
  delay: 800,
  origin: "right",
  distance: "20px",
});

/* === GET STARTED CTA === */
scrollAnimation.reveal(".get_started_content h2", {
  delay: 700,
});
scrollAnimation.reveal(".get_started_content p", {
  delay: 800,
});
/* ==== FOOTER MENU ==== */
scrollAnimation.reveal(".footer_brand", {
  delay: 800,
});
scrollAnimation.reveal(".footer_menu", {
  delay: 900,
});
/* ==== FOOTER ==== */
scrollAnimation.reveal("footer", {
  delay: 1000,
});