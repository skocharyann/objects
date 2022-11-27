"use strict"
// Ունենք զանգված, որի մեջ կան 10 ուզերների տվյալներ հետևյալ հատկություններով՝ անուն, ազգանուն, էլ․փոստ, հասցե, տարիք օր՝ 19 02 1988, սեռ, աշխատավարձ։

let users = [
    {
        user : 1,
        firstname : "Suren",
        lastname : "Kocharyan",
        email: "surenkocharyan9@gmail.com",
        address : "Armenia",
        age : 23,
        birthday : "18 07 1999",
        gender : "male",
        salary :350,


    },
    {
        user : 2,
        firstname : "Anna",
        lastname : "Khachatryan",
        email: "khachatryananna@gmail.com",
        address : "Armenia",
        age : 30,
        birthday : "11 08 1992",
        gender : "female",
        salary :250,

    },
    {
        user : 3,
        firstname : "Arsen",
        lastname : "Asatryan",
        email: "asrenasatryan@mail.ru",
        address : "Russia",
        age : 25,
        birthday : "07 07 1997",
        gender : "male",
        salary :100,

    },
    {
        user : 4,
        firstname : "John",
        lastname : "Smith",
        email: "smithjohn@gmail.com",
        address : "United States",
        age : 18,
        birthday : "05 09 2002",
        gender : "male",
        salary :150,

    },
   {
    
        user : 5,
        firstname : "Marie",
        lastname : "Marie",
        email: "marie@gmail.com",
        address : "Australia",
        age : 27,
        birthday : "18 05 1995",
        gender : "felmale",
        salary :550,
   },
   {
    
        user : 6,
        firstname : "Alice",
        lastname : "Sams",
        email: "samsalice@gmail.com",
        address : "spain",
        age : 33,
        birthday : "01 06 1989",
        gender : "female",
        salary :730,

    
   },
   {
    
        user : 7,
        firstname : "Susanna",
        lastname : "Ghazaryan",
        email: "susikghazaryan@mail.ru",
        address : "Armenia",
        age : 19,
        birthday : "10 01 2003",
        gender : "female",
        salary :100,

    
   },
 {
    
    
        user : 8,
        firstname : "Arshak",
        lastname : "Arshakyan",
        email: "arshakyan@mail.ru",
        address : "Armenia",
        age : 23,
        birthday : "05 07 1993",
        gender : "male",
        salary :750,
 },
 {
    
    
        user : 9,
        firstname : "Hermine",
        lastname : "Stepanyan",
        email: "hemostepanyan@mail.ru",
        address : "France",
        age : 34,
        birthday : "18 07 1988",
        gender : "female",
        salary :250,
 },
 {
    
    
        user : 10,
        firstname : "David",
        lastname : "Peters",
        email: "peters@linkedin.com",
        address : "England",
        age : 22,
        birthday : "18 11 2000",
        gender : "male",
        salary :670,
 }
]
// Առանձնացնել տղաներին։
// let res = users.filter(users => users.gender ==="male")
// console.log(res);

// Առանձնացնել աղջիկներին։
// let res = users.filter(users => users.gender ==="female")
// console.log(res);

// Առանձնացնել նրանց՝ ում աշխատավարձը բարձր է 100-ից։
// let res =  users.filter(users => users.salary > 100)
// console.log(res);

// Առանձնացնել չափահասներին որոնք Հայաստանից են։
// let res = users.filter(users =>users.age >=18 && users.address==="Armenia")
// console.log(res);

// Վերադասավորել ըստ տարիքի, աճման կարգով։
// console.log(users.sort((a, b) => a.age - b.age))

// Վերադասավորել ըստ աշխատավարձի, աճման կարգով։
// console.log(users.sort((a, b) => a.salary - b.salary))

// Վերադասավորել ըստ անվան, այբբենական կարգով։
// console.log(users.sort((a, b) => a.firstname < b.firstname? -1 : 1))
