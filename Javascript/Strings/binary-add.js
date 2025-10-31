var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let res = []
    let carry = 0
    let sum = 0
    while (i >= 0 && j >= 0) {
        if (parseInt(a[i]) + parseInt(b[j]) + carry == 2) {
            sum = 0
            carry = 1
        }
        else if (parseInt(a[i]) + parseInt(b[j]) + carry == 3) {
            sum = 1
            carry = 1
        }
        else {
            sum = parseInt(a[i]) + parseInt(b[j]) + carry
            carry = 0
        }
        i--
        j--
        res.push(sum)
    }
    while (i != -1) {
        if (parseInt(a[i]) + carry == 2) {
            sum = 0
            carry = 1
        }
        else {
            sum = parseInt(a[i]) + carry
            carry = 0
        }
        res.push(sum)
        i--
    }
    while (j != -1) {
        if (parseInt(b[j]) + carry == 2) {
            sum = 0
            carry = 1
        }
        else {
            sum = parseInt(b[j]) + carry
            carry = 0
        }
        res.push(sum)
        j--
    }
    if (carry == 1) {
        res.push(1)
    }

    return res.join('')


};



