module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.elementNumber()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
    constructor(input) {

        (this.input = input).sort((a, b) => a - b);
    }

    minimum() {

        return this.input[0];
    }

    maximum() {

        return this.input[this.input.length - 1];
    }

    elementNumber(){

        return this.input.length;
    }

    average(){

        return (this.input.reduce((a, b) => (a + b))/this.input.length).toFixed(2);
    }


    // Write your code here
}
