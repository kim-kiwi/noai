console.log("No AI is running...");

chrome.storage.local.get(["noai:delgem"],function(data){
    if (!data["noai:delgem"]) {
        console.log("delete gemini is disabled");
        return;
    }
    let interval;

    const delete_gemini = ()=>{
        console.log("Finding Gemini...");
        let gemini = null;
        document.querySelectorAll("strong").forEach((el)=>{
            if (el.textContent=="AI 개요") {
                gemini = el.closest('section');
            }
        });
        if (gemini) {
            gemini.remove();
            clearInterval(interval);
            console.log("Gemini Detected");
            return true;
        } else {
            try_count++;
            if (try_count >= 100) {
                console.log("Gemini Not Found");
                clearInterval(interval);
            }
            return false;
        }
    };

    let try_count = 0;
    if (!delete_gemini()) {
        interval = setInterval(()=>{delete_gemini()}, 100);
    }
})
