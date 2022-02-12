function panggilNestedArray(value) {
    let results = [];
    for(let i=0; i<value[0].length; i++) {
        results.push([value[0][i],value[1][i],value[2][i]]);
    }
    return results;
}
var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(panggilNestedArray(nestedArray));