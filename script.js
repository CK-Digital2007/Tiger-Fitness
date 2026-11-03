
// TIGER FITNESS WEBSITE
// Developed by CK Digital Solutions

// 1. Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// 2. Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.textContent = "☰";
  });
});

// 3. Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// 4. Gym contact details
const gymWhatsAppNumber = "919834669295";
const gymPhoneNumber = "+919834669295";

// 5. WhatsApp enquiry message
const whatsappMessage = encodeURIComponent(
  "Hello Tiger Fitness! I visited your website and would like to know more about your membership plans and services."
);

// 6. WhatsApp button
const whatsappButton =
  document.getElementById("whatsappBtn");

whatsappButton.href =
  `https://wa.me/${gymWhatsAppNumber}?text=${whatsappMessage}`;

whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";

// 7. Telephone button
const callButton =
  document.querySelector('a[href^="tel:"]');

if (callButton) {
  callButton.href = `tel:${gymPhoneNumber}`;
}
