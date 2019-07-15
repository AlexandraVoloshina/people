var people = [
  { name: 'Kristina', age: 20, sex: "female" },
  { name: 'Uriy', age: 35, sex: "male" },
  { name: 'Andrey', age: 41, sex: "male" },
  { name: 'Kate', age: 55, sex: "female" },
  { name: 'Ruslan', age: 11, sex: "female" },
  { name: 'Artem', age: 10, sex: "male" },
  { name: 'Kostya', age: 15, sex: "male" },
  { name: 'Rita', age: 25, sex: "female" },
  { name: 'Angelina', age: 20, sex: "female" },
  { name: 'Antinina', age: 24, sex: "female" }

];

//Средний возраст
var sum = 0;
var average_age = 0;
for (var key in people){
  sum += people[key].age;
}
average_age = Math.round(sum/people.length);
console.log("Средний возраст людей: " + average_age);

//Кого больше мужчин или женщин?
var female = 0;
var male = 0;
for (var key in people){
  if(people[key].sex === "female") {
      female++;
  } else if(people[key].sex === "male"){
      male++;
  }
}
if (female > male) {
  console.log("Женщин больше в этом обществе!");
} else {
  console.log("Мужчин больше в этом обществе!");
} 
