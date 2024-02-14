const containerBox = document.querySelector(".faq_accordion");

containerBox.addEventListener("click", function (e) {
  const faqItem = e.target.closest(".faq_accordion_item");
  const image = faqItem.querySelector(".faq_accordion_image");
  const content = faqItem.querySelector(".faq_answer");

  if (faqItem) {
    content.classList.toggle("hidden");
    content.classList.contains("hidden")
      ? (image.src = "./images/down-arrow-angle.svg")
      : (image.src = "./images/up-arrow-angle.svg");
  }
});
