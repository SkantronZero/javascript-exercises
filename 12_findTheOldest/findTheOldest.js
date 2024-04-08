const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = '';
    let currentAge = 0;
    console.log(people.length);
    for(i = 0; i < people.length; i++){
        if(!people[i].yearOfDeath){
        currentAge = new Date().getFullYear() - people[i].yearOfBirth;
        }
        else{
        currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if(currentAge > oldestAge){
            oldestAge = currentAge;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

//     return people.reduce((oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldest;
//     });

// };



// const getAge = function (birth, death){
//     if(!death){
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// };



const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
