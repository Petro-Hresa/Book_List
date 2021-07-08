const faker = require('faker')
const fs = require('fs');

const { lastName, firstName, suffix } = faker.name;

const number = faker.random.number(); 

const products = [...Array(10).keys()].map((_ , i)=> ({

     imageUrl: "https://picsum.photos/300/300",
     title: lastName(),
     atherName: firstName(),
     category: suffix(),
     isbn: number


}))

console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));


const json = {products};

fs.writeFileSync('./db.json' , JSON.stringify(json), 'utf-8', ()=>{
    console.log('File was seccessfuly created')
} )