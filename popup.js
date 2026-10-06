(async function() {
    const delgem = document.querySelector("#delGem")
    const redirect = document.querySelector("#redirect")

    const v = await browser.storage.local.get(["noai:delgem","noai:redirect"]);
    delgem.checked = v["noai:delgem"];
    redirect.checked = v["noai:redirect"];

    delgem.oninput = ()=>{
        browser.storage.local.set({
            "noai:delgem": delgem.checked
        });
    };
    redirect.oninput = ()=>{
        browser.storage.local.set({
            "noai:redirect": redirect.checked
        });
    };
})();
