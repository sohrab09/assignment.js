

// kilometerToMeter Convert 

/*function kilometerToMeter(kilometer){
    if (kilometer >= .01){
        let meter = kilometer * 1000;
        return meter;
    }
    else if (kilometer == 0){
        return "your input number is '0', which is not countable value."
    }
    else{
        return "Invalid Number."
    }
}
var result = kilometerToMeter(35.6);
console.log(result); */


// budgetCalculator 


/* function TotalCost({ watch, phone, laptop}) {
    return (watch.price * watch.quantity) + (laptop.price * laptop.quantity) + (phone.price * phone.quantity)
}
var total = {
    watch: {
        price: 50,
        quantity: 5
    },
    phone: {
        price: 100,
        quantity: 5
    },
    laptop: {
        price: 500,
        quantity: 5
    }
}
console.log(TotalCost(total)); */

// hotelCost

/* function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstStay = 10 * 100;
        var remaining = day - 10;
        var secondStay = remaining * 80;
        cost = firstStay + secondStay;
    }
    else{
        var firstStay = 10 * 100;
        var secondStay = 10 * 80;
        var remaining = day - 20;
        var thirdStay = remaining * 50;
        cost = firstStay + secondStay + thirdStay;
    }
    return cost;
}
var count = hotelCost(39);
console.log(count); */

// megaFriend

function megaFriend(friends){
    var maxLength = -1, position = -1;
    for ( var i = 0; i <friends.length; i++){
        if (maxLength < friends[i].length){
            maxLength = friends[i].length;
            position=[i];
        }
    }
    return friends[position];
}

var friends = ["sahin Alam Hridoy", "Sakim Hossain Pranto", "Rayhan Ahmed Rimon", "Al-Amin Hossain Miraje", "Md Faisal", "Mohammad Sohrab Hossain Nahid"];

console.log(megaFriend(friends));