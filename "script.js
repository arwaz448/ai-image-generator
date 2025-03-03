async function generateImage() {
    let prompt = document.getElementById("prompt").value;
    if (!prompt) {
        alert("कृपया एक प्रॉम्प्ट दर्ज करें!");
        return;
    }

    document.getElementById("result").innerHTML = "इमेज जनरेट हो रही है... कृपया इंतजार करें!";
    
    try {
        let response = await fetch(`https://api-free-image-generator.com/generate?prompt=${encodeURIComponent(prompt)}`);
        let data = await response.json();

        if (data.image_url) {
            document.getElementById("result").innerHTML = `<img src="${data.image_url}" alt="Generated Image" style="max-width:100%;">`;
        } else {
            document.getElementById("result").innerHTML = "कोई इमेज जनरेट नहीं हुई, कृपया दूसरा प्रॉम्प्ट आज़माएँ।";
        }
    } catch (error) {
        document.getElementById("result").innerHTML = "कुछ गलत हो गया, कृपया दोबारा प्रयास करें।";
    }
}
