let numbers = [4, 2, 5, 3, 10, 8, 30];
numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);