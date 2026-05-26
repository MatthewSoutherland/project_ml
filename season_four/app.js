
document.addEventListener("DOMContentLoaded", async function() {
    console.log("loaded");
})

appState = {
    showGeekLand: false,
    showOniLand: false,
}
const geekToggle = document.getElementById("geekToggle");
const oniToggle = document.getElementById("oniToggle");

geekToggle.addEventListener("change", () => {
    appState.showGeekLand = geekToggle.checked ? true : false;
    console.log(`appState.showGeekLand: ${appState.showGeekLand}`);
});
oniToggle.addEventListener("change", () => {
    appState.showOniLand = oniToggle.checked ? true : false;
    console.log(`appState.oniToggle: ${appState.showOniLand}`);
})