// Google Search function
function searchGoogle() {
    const query = document.getElementById("searchInput").value;
    if (query) {
      window.open(https://www.google.com/search?q=${encodeURIComponent(query)}, "_blank");
    }
  }
  
  // I’m Feeling Lucky
  function feelingLucky() {
    const query = document.getElementById("searchInput").value;
    if (query) {
      window.open(https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I, "_blank");
    }
  }
  
  // Voice recognition setup
  const micIcon = document.querySelector(".mic-icon");
  const searchInput = document.getElementById("searchInput");
  
  // Check for browser support
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
  
    micIcon.addEventListener("click", () => {
      recognition.start();
      micIcon.style.color = "red"; // indicate listening
    });
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
      micIcon.style.color = "#5f6368"; // reset color
    };
  
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      micIcon.style.color = "#5f6368";
    };
  
    recognition.onend = () => {
      micIcon.style.color = "#5f6368";
    };
  } else {
    micIcon.addEventListener("click", () => {
      alert("Voice search not supported in this browser.");
    });
  }