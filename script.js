function createGrid() {
  let gridContainer = document.querySelector(".grid");
  // Cria as linhas dentro do container
  for (let index = 0; index < 16; index++) {
    let gridRows = document.createElement("div");
    //Seta as linhas com display flex
    gridRows.style.display = "flex";
    //Ocupam todo o espaço do container
    gridRows.style.width = "100%";
    gridContainer.append(gridRows);
    //Preenche as linhas com as caixas
    for (let index = 0; index < 16; index++) {
      let grid = document.createElement("div");
      grid.className = "box";
      //Cada caixa ocupa o mesmo espaço
      grid.style.flex = "1";
      grid.style.border = "1px solid black";
      gridRows.append(grid);
    }
  }
}

function hoverGrid() {
  let grid = document.querySelector(".grid");
  grid.addEventListener("mouseover", function (event) {
    event.target.className = "blackout";
  });
}

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", function () {
  const paintedDivs = document.querySelectorAll(".blackout");
  for (let index = 0; index < paintedDivs.length; index++) {
    paintedDivs[index].classList.remove("blackout");
  }
});

function main() {
  createGrid();
  hoverGrid();
}

main();
