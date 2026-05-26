document.addEventListener("DOMContentLoaded", function () {
    const appState = {
        showGeekLand: false,
        showOniLand: false,
    };

    const geekToggle = document.getElementById("geekToggle");
    const oniToggle = document.getElementById("oniToggle");

    buildSeasonMap();

    geekToggle.addEventListener("change", () => {
        appState.showGeekLand = geekToggle.checked;
        updateSeasonMap(appState);
    });

    oniToggle.addEventListener("change", () => {
        appState.showOniLand = oniToggle.checked;
        updateSeasonMap(appState);
    });
});

const oniGenerals = [
    [1, 10],
    [2, 9],
];

const geekLand = [
    [1, 10],
    [2, 9],
    [2, 10],
    [2, 11],
    [2, 12],
    [3, 11],
    [3, 12],
    [4, 12],
    [5, 11],
    [5, 12],
    [6, 12],
    [7, 12],
];

const oniLand = [
    [1, 10],
    [2, 9],
    [3, 9],
    [3, 10],
];

function buildSeasonMap() {
    const map = document.getElementById("bottom-container");
    map.innerHTML = "";

    for (let row = 1; row <= 13; row++) {
        for (let col = 1; col <= 13; col++) {
            const cell = document.createElement("div");

            cell.classList.add("map-cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.textContent = `${row},${col}`;

            map.appendChild(cell);
        }
    }
}

function updateSeasonMap(appState) {
    const cells = document.querySelectorAll(".map-cell");

    cells.forEach(cell => {
        cell.classList.remove("geekLand", "oni", "general");

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);

        if (appState.showGeekLand && hasTile(geekLand, row, col)) {
            cell.classList.add("geekLand");
        }

        if (appState.showOniLand && hasTile(oniLand, row, col)) {
            cell.classList.add("oni");
        }

        if (appState.showOniLand && hasTile(oniGenerals, row, col)) {
            cell.classList.add("general");
            cell.textContent = "G";
        } else {
            cell.textContent = `${row},${col}`;
        }
    });
}

function hasTile(tileList, row, col) {
    return tileList.some(tile => tile[0] === row && tile[1] === col);
}