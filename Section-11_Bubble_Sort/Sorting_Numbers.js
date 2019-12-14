function numberCompare(num1, num2) {
    return num1 - num2;
}
[1, 45, 2, 78, 5, 90, 97, 4, 32, 678, 32].sort(numberCompare);
// returns [ 1, 2, 4, 5, 32, 32, 45, 78, 90, 97, 678 ]

function numberCompare(num1, num2) {
    return num2 - num1;
}
[1, 45, 2, 78, 5, 90, 97, 4, 32, 678, 32].sort(numberCompare);
// returns [ 678, 97, 90, 78, 45, 32, 32, 5, 4, 2, 1 ]