const age = 17;
const price = 500;
if (age < 12){
    console.log('you can eat for free');
}

else if( age <= 60){
    const discount = price * 15 /100 ;
    const payamonunt = price - discount;
    console.log(payamonunt);
}