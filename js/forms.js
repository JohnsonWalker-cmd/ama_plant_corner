const WHATSAPP_NUMBER = "233244000000";

function buildMessage(form) {
  const lines = [form.dataset.whatsappIntro];
  for (const field of form.querySelectorAll(".form-field")) {
    const label = form.querySelector(`label[for="${field.id}"]`).textContent.trim();
    lines.push(`${label}: ${field.value.trim()}`);
  }
  return lines.join("\n");
}

function sendToWhatsApp(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(form))}`;
  window.open(url, "_blank", "noopener");
}

for (const form of document.querySelectorAll("form[data-whatsapp-intro]")) {
  form.addEventListener("submit", sendToWhatsApp);
}
