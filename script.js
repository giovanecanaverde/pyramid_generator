const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const blocks = character.repeat(2 * rowNumber - 1);
    return spaces + blocks + spaces; 
}

// TODO: utilizar um tipo diferente de loop
fo}r (let i = 1; i <= count; i ++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
}

let result = "";

for(const row of rows) {
    result = result + row + "\n";
}

console.log(result);[]