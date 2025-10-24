
var MinStack = function() {
    this.minStack = [Infinity]
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (val <= this.minStack.at(-1)){
        this.minStack.push(val)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poped = this.stack.pop()
    if ( poped ===  this.minStack.at(-1) ){
        this.minStack.pop()
    }
    return poped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */