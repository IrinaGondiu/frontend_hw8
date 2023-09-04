//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const numbersDiv = document.querySelector('.numbers')
// 
// for (let i = 100; i >= 50; i -= 10) {
  // 
  // const paragraph = document.createElement('p');
  // 
  // paragraph.innerText = i;
  // numbersDiv.append(paragraph);
  // 
// }

//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const arrayDiv = document.querySelector('.strings_container')
// const arr = ['John','Anna','Alex','Sarah']
// for(let i =0; i<arr.length;i++){
  // const paragraph = document.createElement('p')
// 
  // paragraph.innerText = arr[i]
  // arrayDiv.append(paragraph)
// }

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.


// Не получилось решить эту задачу!!!

const users = [
  {
    first_name: 'John',
    last_name: 'Smith',
    age: 23
  },
  {
    first_name: 'Anna',
    last_name: 'Rodriguez',
    age: 28
  },
  {
    first_name: 'Alex',
    last_name: 'Rosso',
    age: 29
  }
]
const newDiv = document.querySelector('.users_container')
for(let i =0; i< users.length;i++){
  
  if(users.age >= 18){
  }
}


newDiv.append(users)






