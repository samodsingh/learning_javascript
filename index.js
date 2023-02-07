let site = {
    name: 'W3Docs',
    hasAdmin: true,
    books: ['html', 'css', 'js', 'git'],
    booksCount: 4,
  };

  console.log(typeof site);
  let json = JSON.stringify(site);//JSON.stringify to convert objects into JSON.
  console.log(typeof json); // we've got a string!
  console.log(json);


  let myJson = {
    name : "Samod",
    lname : "Singh",
    age : 23
};
  console.log(JSON.stringify(myJson));

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData); //JSON.parse to convert JSON back into an object.

console.log( user);