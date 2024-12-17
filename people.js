const getFullName = require('./names');
const getHobbies = require('./hobbies');

const getInfo = () => {
  return {
    fullName: getFullName('Zeno', 'Citiulo'),
    hobbies: getHobbies('padel', 'golf', 'poker')
  }
}

console.log(getInfo);
