// Arrays

// essentially removes the brackets
const numberArray = [1,2,3,4];
const newNumberArray = [...numberArray, 8];
console.log(newNumberArray);

// Objects

const bowler = {
    name: 'Ellen',
    latestScore: 36
}; // let's be realistic

const updatedBowler = {
    name: bowler.name,
    latestScore: 41
}; // not great code

const realUpdatedBowler = {
    ...bowler, // this has to go first so the real version wins (for latestScore)
    latestScore: 41
} // better code!