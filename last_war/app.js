document.addEventListener("DOMContentLoaded", async function() {
    const ROWS = 50;
    const COLS = 50;
    const BORDER_THICKNESS = 1; // try 2 later 👀


    const TILE_TYPES = {
      EMPTY: "empty",
      BASE: "base",
      TRADE: "trade",
      MUD: "mud"
    };

    const gridElement = document.getElementById("grid");

    /**
     * 2D grid model (logic lives here)
     */
    const gridData = [];

    // Initialize grid
    for (let y = 0; y < ROWS; y++) {
      gridData[y] = [];
      for (let x = 0; x < COLS; x++) {
        gridData[y][x] = {
          x,
          y,
          type: TILE_TYPES.EMPTY,
          owner: null,        // future: player / enemy
          movementCost: 1     // future: mud slows, etc
        };
      }
    }

    /**
     * Place special areas
     */
    function placeTradePostCenter(cx, cy) {
      gridData[cy][cx].type = TILE_TYPES.TRADE;
    }

    function tradePost(startX, startY, width, height) {
      for (let y = startY; y < startY + height; y++) {
        for (let x = startX; x < startX + width; x++) {
          gridData[y][x].type = TILE_TYPES.TRADE;
          gridData[y][x].movementCost = 3;
        }
      }
    }

    function placeMudArea(startX, startY, width, height) {
      for (let y = startY; y < startY + height; y++) {
        for (let x = startX; x < startX + width; x++) {
          gridData[y][x].type = TILE_TYPES.MUD;
          gridData[y][x].movementCost = 3;
        }
      }
    }

    function placeBase(startX, startY) {
      for (let y = startY; y < startY + 3; y++) {
        for (let x = startX; x < startX + 3; x++) {
          gridData[y][x].type = TILE_TYPES.BASE;
        //   gridData[y][x].movementCost = 3;
        }
      }
    }

    /**
     * Render grid
     */
    function renderGrid() {
      gridElement.innerHTML = "";

      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const tileData = gridData[y][x];
          const tile = document.createElement("div");

          tile.classList.add("tile", tileData.type);

          tile.dataset.x = x;
          tile.dataset.y = y;

          tile.addEventListener("click", () => {
            console.log(`Tile (${x}, ${y})`, tileData);
          });

          gridElement.appendChild(tile);
        }
      }
    }

    /**
     * Setup scenario
     */
    placeMudArea(17, 17, 17, 17);      // mud zone
    tradePost(23, 23, 5, 5);      // mud zone
    placeTradePostCenter(25, 25);          // center
    placeBase(18, 18);
    placeBase(21, 18);
    placeBase(24, 18);
    placeBase(27, 18);
    placeBase(30, 18);
    placeBase(30, 21);
    placeBase(30, 24);
    placeBase(30, 27);
    placeBase(30, 30);
    placeBase(27, 30);
    placeBase(24, 30);
    placeBase(21, 30);
    placeBase(18, 30);
    placeBase(18, 27);
    placeBase(18, 24);
    placeBase(18, 21);

    placeBase(14, 4);
    placeBase(19, 3);
    placeBase(24, 3);
    placeBase(29, 3);
    placeBase(34, 4);

    placeBase(9, 9);
    placeBase(14, 9);
    placeBase(19, 8);
    placeBase(24, 8);
    placeBase(29, 8);
    placeBase(34, 9);
    placeBase(39, 9);

    placeBase(4, 14);
    placeBase(9, 14);
    placeBase(14, 14);
    placeBase(19, 13);
    placeBase(24, 13);
    placeBase(29, 13);
    placeBase(34, 14);
    placeBase(39, 14);
    placeBase(44, 14);

    placeBase(3, 19);
    placeBase(8, 19);
    placeBase(13, 19);
    placeBase(35, 19);
    placeBase(40, 19);
    placeBase(45, 19);

    placeBase(3, 24);
    placeBase(8, 24);
    placeBase(13, 24);
    placeBase(35, 24);
    placeBase(40, 24);
    placeBase(45, 24);
   
    placeBase(3, 29);
    placeBase(8, 29);
    placeBase(13, 29);
    placeBase(35, 29);
    placeBase(40, 29);
    placeBase(45, 29);

    placeBase(4, 34);
    placeBase(9, 34);
    placeBase(14, 34);
    placeBase(19, 35);
    placeBase(24, 35);
    placeBase(29, 35);
    placeBase(34, 34);
    placeBase(39, 34);
    placeBase(44, 34);

    placeBase(9, 39);
    placeBase(14, 39);
    placeBase(19, 40);
    placeBase(24, 40);
    placeBase(29, 40);
    placeBase(34, 39);
    placeBase(39, 39);

    placeBase(14, 44);
    placeBase(19, 45);
    placeBase(24, 45);
    placeBase(29, 45);
    placeBase(34, 44);
   
   
    
    renderGrid();

});