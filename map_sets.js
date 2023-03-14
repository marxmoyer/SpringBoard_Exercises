.1 

// it returns a set with the duebles removed 

.2 

//  it returns a string "ref" 

.3
//  0: {Array(3) => true}
//   1: {Array(3) => false}

.4 
function hasDuplicate (arr) {
    let set = new Set([arr])
    return arr.length !== set.size
}

.5
function vowels(letter){
    return 'aeiou'.includes(letter)
}


.6


function vowelCount(str){
    let map = new Map()
    for(let letter of str){
        if(vowels(letter)){
            if(map.has(letter)){
                map.set(letter, map.get(letter)+ 1)
            } else{
                map.set(letter, 1)
            }
        }

        
    
    
}
return map
}