const character = "#";

const count = 8;

const rows = [];

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const blocks = character.repeat(2 * rowNumber - 1);
    return spaces + blocks + spaces; 
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

let result = "";

for(const row of rows) {
    result = result + row + "\n";
}

console.log(result);