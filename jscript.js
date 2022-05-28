function createBoard(number) {

    const board = document.getElementById('board');
    const div = board.querySelectorAll('div');
    div.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (i = 0; i < number * number; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        board.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

    }
}

function changeSize(input) {
    createBoard(input);
}

createBoard(16)






