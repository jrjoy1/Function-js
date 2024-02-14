const phones = [
    {name: 'samsung',price: 20000, camera: '12mp', color: 'black'},
    {name: 'samsung',price: 30000, camera: '12mp', color: 'black'},
    {name: 'samsung',price: 40000, camera: '12mp', color: 'black'},
    {name: 'samsung',price: 50000, camera: '12mp', color: 'black'},
    {name: 'samsung',price: 60000, camera: '12mp', color: 'black'},
    {name: 'One Plus',price: 70000, camera: '50mp', color: 'black'},
]


function getExpensivePhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const expensive = getExpensivePhone(phones);
console.log('Expensive phone is:', expensive);