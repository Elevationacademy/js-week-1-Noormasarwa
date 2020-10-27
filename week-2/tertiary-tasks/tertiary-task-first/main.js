// ex1
const calcAge = function(x,y)
{

age=x-y;
console.log(age)
}

const Currentyear=2017
const YearofBirth=1989
calcAge(Currentyear,YearofBirth)
// end ex1
// ex2
const calcAgee = function(x,y)
{

age1=x-y;
age2=age1-1;
console.log("You are either "+ age1 +" or " + age2)
}

const Currentyear2=2018
const YearofBirth2=2015
calcAgee(Currentyear2,YearofBirth2)
// end ex2
//ex3
const isEven= function (num)
{
if(num%2===0)
{
    console.log("true")
}
else{
    console.log("false")
}
}
isEven(5)
//end ex3
// ex4
const isEvenn= function (num)
{
if(num%2===1)
{
    console.log(num)
}
}
const oddnumber = function (arr)
{
for(let i=0; i< 10 ;i++)
{
    isEvenn(arr[i])
}
}
const arr=[1,2,3,4,5,6,7,8,9,10]
oddnumber(arr)
//end ex 4
// ex5
const checkExists= function(numbers,numchek)
{
for( let j=0;j<5;j++)
{
    if(numbers[j]===numchek)
    {
        return true
    }
    
}
}
const numbers=[1,2,3,4,5]
const numchek = 4
const gj = checkExists(numbers,numchek)
if(gj)
{
    console.log("true")
}
else{
    console.log("false")
}
//end ex5
