
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

let fs = require('fs')

fs.readFile('/Users/mahde/Desktop/javavscript/GIZ-pass-js/data.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

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




let data=numbers;
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
      
    
    


