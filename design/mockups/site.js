(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const header = document.querySelector(".site-header");

  if (!toggle || !nav || !header) return;

  const setMenuState = (isOpen, restoreFocus = false) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    nav.classList.toggle("is-open", isOpen);
    if (!isOpen && restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target) && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
    }
  });

  const desktop = window.matchMedia("(min-width: 860px)");
  const handleBreakpoint = (event) => {
    if (event.matches) setMenuState(false);
  };

  if (desktop.addEventListener) {
    desktop.addEventListener("change", handleBreakpoint);
  } else {
    desktop.addListener(handleBreakpoint);
  }
})();

(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const success = document.querySelector("[data-contact-success]");
  const fields = Array.from(form.querySelectorAll("input, textarea")).filter((field) => field.name);
  const touched = new Set();
  const hadValue = new Set();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messages = {
    first_name: "Bitte gib deinen Vornamen ein.",
    last_name: "Bitte gib deinen Nachnamen ein.",
    email: "Bitte gib deine E-Mail-Adresse ein.",
    message: "Bitte schreib uns eine kurze Nachricht."
  };

  const getError = (field) => {
    const value = field.value.trim();
    if (!value) return messages[field.name] || "Bitte fülle dieses Feld aus.";
    if (field.name === "email" && !emailPattern.test(value)) {
      return "Bitte gib eine gültige E-Mail-Adresse ein.";
    }
    return "";
  };

  const render = (field) => {
    const wrapper = field.closest(".field");
    const error = wrapper ? wrapper.querySelector(".error") : null;
    const message = getError(field);
    if (wrapper) wrapper.classList.toggle("has-error", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message;
    return !message;
  };

  const clear = (field) => {
    const wrapper = field.closest(".field");
    const error = wrapper ? wrapper.querySelector(".error") : null;
    if (wrapper) wrapper.classList.remove("has-error");
    field.setAttribute("aria-invalid", "false");
    if (error) error.textContent = "";
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      touched.add(field.name);
      render(field);
    });

    field.addEventListener("input", () => {
      if (field.value.trim() !== "") hadValue.add(field.name);
      if (success) success.hidden = true;
      if (touched.has(field.name)) {
        render(field);
      } else if (!field.value.trim() && hadValue.has(field.name)) {
        touched.add(field.name);
        render(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach((field) => touched.add(field.name));
    const results = fields.map((field) => render(field));
    const firstInvalid = fields.find((field, index) => !results[index]);

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const values = Object.fromEntries(fields.map((field) => [field.name, field.value.trim()]));
    const subject = `${values.first_name} ${values.last_name}`.trim();
    const body = [
      `Vorname: ${values.first_name}`,
      `Nachname: ${values.last_name}`,
      `E-Mail: ${values.email}`,
      "",
      "Nachricht:",
      values.message
    ].join("\r\n");
    const mailto = `mailto:office@equicrew.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    form.reset();
    fields.forEach(clear);
    touched.clear();
    hadValue.clear();

    if (success) {
      success.hidden = false;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
  });
})();
