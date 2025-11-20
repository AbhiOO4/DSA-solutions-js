/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set()

    //validates rows
    for (let i=0; i<9; i++){
        set.clear()
        for (let j=0; j<9 ; j++){
            if (board[i][j] <= 0 ||  board[i][j] > 9 ){
                return false
            }
            if (board[i][j] == '.'){
                continue
            }
            if (!set.has(board[i][j]) ){
                set.add(board[i][j])
            }
            else{
                return false
            }
        }
    }

    //validating cols
    for (let i=0; i<9; i++){
        set.clear()
        for (let j=0; j<9 ; j++){
            if (board[j][i] <= 0 ||  board[j][i] > 9 ){
                return false
            }
            if (board[j][i] == '.'){
                continue
            }
            if (!set.has(board[j][i]) ){
                set.add(board[j][i])
            }
            else{
                return false
            }
        }
    }

    //validate 9 boxes
    let js =  0
    let is = 0
    let count = 0

    for (let k=0; k<9; k++){
        count++
        set.clear()
        for (let i=is; i< is+3; i++){
            for (let j=js; j< js+3 ; j++){
                if (board[i][j] == '.'){
                    continue
                }
                if (! set.has(board[i][j])) {
                    set.add(board[i][j])
                }
                else{
                    return false
                }
            }
        }
        if (count == 3){
            js = 0
            is +=3
            count = 0
        }
        else{
            js+=3
        }
    }

    return true
};