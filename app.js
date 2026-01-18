
document.addEventListener("DOMContentLoaded", async function() {
    console.log("js read");
    const listItem1 = document.getElementById("item-1");
    listItem1.addEventListener("click", function() {
        alert("list item 1 clicked");
    });
});