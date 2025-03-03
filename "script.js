function generateImage() {
    const prompt = document.getElementById("prompt").value;
    const resultDiv = document.getElementById("result");

    if (!prompt) {
        alert("कृपया प्रॉम्प्ट लिखें!");
        return;
    }

    // Dummy Image Generator (अगर API नहीं है तो)
    const dummyImageURL = "https://source.unsplash.com/300x300/?" + encodeURIComponent(prompt);
    
    resultDiv.innerHTML = `<img src="${dummyImageURL}" alt="Generated Image">`;
}
