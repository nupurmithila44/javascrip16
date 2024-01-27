// multi level condition 

const price = 500;

if(price >= 600){
    console.log('i eat berger');
}

else if(price <= 300){
    // 10% discount 
    const discount = price * 10 / 100;
    // console.log(discount);
    const payamonunt = price - discount ;
    console.log(payamonunt);
}

else{
    console.log(price);
}