let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)
for(let i =1 ; i < numbers.length ; i++) // i=1 instead of ‏    0
{
    for(let j =0 ; j < numbers.length-1; j++)
    {
        if(numbers[j] < numbers[j +1]) // numbers[i] to numbers[j]  compar comper btwen j and j+1 
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}



console.log("Numbers list After sorting: ", numbers)

for(let i = 1 ; i < numbers.length ; i++)  // i=1 instead of ‏  0
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] > numbers[j + 1]) // numbers[i] to numbers[j]  compar comper btwen j and j+1 
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


