const calculateDiscount = (price,customerType,isHoliday) =>{
    let customerType2 = customerType.toUpperCase();
    let final_price = 1;

    if(price>=5000){
        if(customerType2=="VIP"&&isHoliday){
            final_price = price - (price * 0.25);
        }
       else if(customerType2=="REGULAR"){
            final_price = price - (price * 0.05);

        }
        else if(customerType2=="MEMBER"){
              final_price = price - (price * 0.10);
        }
        else if(customerType2=="VIP"){
              final_price = price - (price * 0.20);
        }
    }
    else{
        console.log("Sorry no discount for you")
        final_price = price
    }
    console.log(final_price)

    

}
calculateDiscount(5000,"member",true)