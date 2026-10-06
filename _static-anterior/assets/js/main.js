// ==========================================================
// Conéctate · configuración
// Cambia aquí el número de WhatsApp (código de país + número, sin espacios ni "+")
// ==========================================================
const WHATSAPP_NUMBER = "51900000000";

const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// Enlaces de WhatsApp
document.querySelectorAll(".js-wa").forEach((a) => {
  a.href = waLink(a.dataset.msg || "¡Hola! Quisiera más información.");
  a.target = "_blank";
  a.rel = "noopener";
});

// Header con sombra al hacer scroll
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menú móvil
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Pestañas de servicios
const tabs = [...document.querySelectorAll(".tab")];
const activateTab = (name, focus = false) => {
  tabs.forEach((t) => {
    const on = t.dataset.tab === name;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(`tab-${t.dataset.tab}`);
    panel.hidden = !on;
    panel.classList.toggle("is-active", on);
    if (on && focus) t.focus();
  });
};
tabs.forEach((t, i) => {
  t.addEventListener("click", () => activateTab(t.dataset.tab));
  t.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    activateTab(next.dataset.tab, true);
  });
});
// "Ver más" de las tarjetas abre la pestaña correspondiente
document.querySelectorAll("a[data-tab]").forEach((a) =>
  a.addEventListener("click", () => activateTab(a.dataset.tab))
);

// "Agendar este servicio" preselecciona el servicio en el formulario
const servicio = document.getElementById("servicio");
document.querySelectorAll(".js-pick").forEach((a) =>
  a.addEventListener("click", () => { servicio.value = a.dataset.service; })
);

// Formulario de cita → WhatsApp
const form = document.getElementById("bookingForm");
const errorBox = document.getElementById("formError");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach((f) => {
    const bad = !f.value.trim();
    f.classList.toggle("is-invalid", bad);
    if (bad) ok = false;
  });
  errorBox.hidden = ok;
  if (!ok) { form.querySelector(".is-invalid").focus(); return; }

  const d = Object.fromEntries(new FormData(form));
  const lines = [
    "¡Hola, Conéctate! 👋 Quisiera agendar una cita.",
    "",
    `• Mi nombre: ${d.padre.trim()}`,
    `• Nombre de mi peque: ${d.nino.trim()}`,
    `• Edad: ${d.edad}`,
    `• Servicio: ${d.servicio}`,
    `• Turno preferido: ${d.turno}`,
  ];
  if (d.mensaje.trim()) lines.push(`• Comentario: ${d.mensaje.trim()}`);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});
form.addEventListener("input", (e) => {
  if (e.target.classList.contains("is-invalid") && e.target.value.trim()) {
    e.target.classList.remove("is-invalid");
  }
});

// Animación al aparecer
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Enlace activo del menú según sección
const links = [...nav.querySelectorAll("a:not(.btn)")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((l) => l.classList.toggle("is-current", l.getAttribute("href") === `#${en.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
