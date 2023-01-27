import { getRandomMatrix, getRandomNumber, getRandomArrayElement,getRandomDate } from './utils/random';

function App() {

console.log(getRandomNumber(1,4, false, false))
console.log(getRandomNumber(8,3, true, false))
console.log(getRandomMatrix(10,5,1,10))
console.log(getRandomArrayElement([1,2,3,5,1000, "abc", "ccCAGE"]))
console.log(getRandomDate(1990,2005))

  return <div></div>

}

export default App;


