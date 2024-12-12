   
   
   let main = document.createElement("div");
    document.body.appendChild(main);

    let table = document.createElement("table");
    main.appendChild(table);

    let eraser = document.createElement("button");
    main.appendChild(eraser);
    eraser.classList.add("eraser");
    eraser.textContent = 'Erase';
    eraser.addEventListener('click', () => {
        location.reload()
    })

    function randomColor () {

        'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';

    };

    let gridSelection = document.createElement("button");
    main.appendChild(gridSelection);
    gridSelection.textContent = 'Start'
    gridSelection.classList.add("setGridBtn")
    gridSelection.addEventListener("click", (d) => {
        let dimension = prompt('Specify dimensions');

        if (dimension <= 100) {

            for (let i = 0; i <= dimension-1; i++) {

                let myRow = document.createElement("tr");
                myRow.classList.add("myrow");
                table.appendChild(myRow);

                for (let j = 0; j <= dimension; j++) {
                    let myCell = document.createElement("td");
                    let cellSize = 680/dimension + "px";
                    myCell.style.width = cellSize;
                    myCell.style.height = cellSize;
                    myRow.appendChild(myCell);
                    myCell.classList.add("cell");
                    myCell.addEventListener("mouseover", function () {
                        myCell.style.backgroundColor = randomColor();
                    })
                }
            }
        }
        else alert('You have exceeded the size capacity')
    })