console.log("No AI is running...");

chrome.storage.local.get(["noai:redirect"],function(data){
    if (!data["noai:redirect"]) {
        console.log("redirect is disabled");
        return;
    }
    location.href = "https://stackoverflow.com/questions";
})


