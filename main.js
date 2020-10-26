// ex 1
const names= ["auba","moot","donyel"]
const age=[21,18,25]
for(let i = 0; i <names.length ; i++){
    console.log( names[i] + " is " + age[i] + " years old " )
  }
  // end ex1

  //ex2
let sum=0
const num=[21,18,25]
for(let i= 0; i <num.length ; i++){
    sum+=num[i];
  }
  console.log(sum)
  // end ex2
  // ex3
  console.log(sum/num.length)
  // end ex3
  // ex4
  const nums=[]
  for(let i= 0; i < 100 ; i++){
    nums.push(i+1)
  }
  console.log(nums)
  //end ex4
  //ex 5
  for(let i= 0; i < 100 ; i++){
    if(nums[i]%2==0)
    {
        console.log(nums[i])  
    }
}
    //end ex5
    //ex6
    let nums1 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
    for(let i= 0; i < nums.length ; i++){
        if(nums1[i]===709)
        {
            console.log(i)  
        }
  }
    
  // end of  ex 6
  //ex7
const names1 = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let i= 0; i < names.length ; i++)
{
    let x = {
        names: "", 
        ages: "", 
    }
x.names=names1[i]
x.ages=ages[i]
people.push(x)
}
  console.log(people)
//end of ex7
//ex8
for(let i= 0; i < people.length ; i++)
{
    console.log( people[i].names + " is " + people[i].ages + " years old " )
}
//end of ex8

