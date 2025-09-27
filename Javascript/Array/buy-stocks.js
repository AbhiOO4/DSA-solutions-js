/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0
    let len = prices.length
    let j = 1
    let profit = 0
    let sum = 0
    while (j < len){
        if (prices[i] < prices[j]){
            sum = prices[j] - prices[i]
            if (sum > profit){
                profit = sum
            }
        }
        else{
            i = j
        }
        j++
    }
    return profit
};