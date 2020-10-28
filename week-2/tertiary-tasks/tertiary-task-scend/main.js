//ex6
const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

// end ex6
//ex7
const makeRegal = function(name) {
    return "His Royal Highness, " + name
  }
      
  const increaseByNameLength = function(money, name) {
    return name.length * money
  }
      
  const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)
    console.log(name + " has " + money + " gold coins")
  }
      
  turnToKing("martin luther", 100)
  

// end ex7

