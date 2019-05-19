// Given a stream of integers and a window size, calculate the moving average 
// of all integers in the sliding window.



var MovingAverage = function (size) {
    this.array = [];
    this.size = size;
};

MovingAverage.prototype.next = function (val) {
    this.array.push(val);
    if (this.array.length > this.size) this.array.shift();
    const sum = this.array.reduce((acc, num) => acc + num);
    return sum / this.array.length;
};

class ListNode {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {

}