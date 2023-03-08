// es5

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  // ES2015
  const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0);
  

//findMin

const findMin = (...nums) => Math.min(...nums)

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num* 2)]

// slice and dice 
const removeRandom = items => {let index = Math.floor(Math.random() * items.length)
    return[...items.slice(0, index), items.slice(index + 1 )]}

//extend
    const extend = (arr1, arr2) => [...arr1, ...arr2]

//addKeyVal
    const addKeyVal = (obj, key, val) = ({...obj, [key]: val})

//removeKey

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

// combine

    const combine = (obj1, obj2) => ({...obj1, ...obj2})

// update 
const update = (obj, key, val) = ({...obj, [key]: val})