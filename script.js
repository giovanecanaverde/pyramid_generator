const character = "#";

const count = 8;

const rows = [];

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const blocks = character.repeat(2 * rowNumber - 1);
    return spaces + blocks + spaces; 
}

// TODO: utilizar um tipo diferente de loop
/* for (let i = 1; i <= count; i ++) {
    rows.push(padRow(i, count));
}

/*
while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}
*/

/*r
for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}
*/


let result = "";

for(const row of rows) {
    result = result + row + "\n";
}

console.log(result);[]