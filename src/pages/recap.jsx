
function Recap() {

const obj ={

firstName : 'naraphan',
lastName : 'thongnit'


}

obj.address = 'BKK'


const obj2 ={
street:'1234',
zipcode:'56780,'


}

const mergeObj ={...obj,...obj2}
console.log(mergeObj);

// console.log(obj.firstName);
const arr = ['naraphan','thongnit']
arr[2] = 'BKK'

const arr2 = ['1234','5678']
const mergeArr = [...arr,...arr2]
console.log(mergeArr);


const products = [

{id:1, title:'ASUS', price:40000},
{id:2, title:"MSI" , price:59000}


]

console.log(products[1].title);
const newProducts = {id:3, title:"Lenovo", price:20000};

const mergeArr2 = [...products,newProducts]
console.log(mergeArr2);

  return (
    <div><h1>Recap</h1></div>
  )
}

export default Recap