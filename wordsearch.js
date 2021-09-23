const transpose = function(matrix) {
    let newMatrix = new Array(matrix[0].length);
    for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i] = new Array(matrix.length);
    }

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[0].length; y++) {
        newMatrix[y][x] = matrix[x][y];
        }
    }
    return newMatrix;
};

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch