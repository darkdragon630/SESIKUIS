let currentSlide = 1;
let answers = {}; // Objek untuk menyimpan jawaban

function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => (slide.style.display = 'none'));

  const currentSlideElement = document.getElementById(`slide${slideNumber}`);
  if (currentSlideElement) {
    currentSlideElement.style.display = 'block';
  }
}

function submitAnswer(questionNumber) {
  // Handle answer submission logic here
  const answerInput = document.getElementById(`answer${questionNumber}`);
  if (answerInput) {
    answers[`question${questionNumber}`] = answerInput.value; // Simpan jawaban di objek answers
  }

  // Move to the next slide
  currentSlide++;
  if (currentSlide <= 5) {
    showSlide(currentSlide);
  } else {
    // Jika ini adalah slide terakhir, kirim jawaban ke WhatsApp
    sendToWhatsApp(answers);
  }
}

function sendToWhatsApp(data) {
  // Kustomisasi pesan sesuai kebutuhan Anda
  const message = `Jawaban Pertanyaan:
Hobiku: ${data.question1}
Makanan Kesukaanku: ${data.question2}
Sifat yang aku Miliki: ${data.question3}
Cita-Cita atau Impianku: ${data.question4}
Lagu atau Film Favoritku: ${data.question5}`;

  // Ganti nomor WhatsApp dengan nomor Anda atau penerima
  const phoneNumber = '6289635637904';

  // Membuat link untuk WhatsApp Click to Chat
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Buka link di jendela baru
  window.open(whatsappLink, '_blank');
}

// Show the initial slide
showSlide(currentSlide);
