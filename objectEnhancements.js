//es5
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// ES2015
const createInstructor = (firstName, lastName) => {firstName, lastName}

// es5
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
  [favoriteNumber] = "That is my favorite!"
}

//es5
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName( " + "," says bye!");
    }
  }

//ES2015

var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName ( " + "," says bye!");
    }
  }

// createAnimal

const createAnimal = (species, verb, noise) => {
    species,
    [verb]()
        return noise
    }


