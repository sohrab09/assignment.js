

Github_Code_Link: https://github.com/sohrab09/assignment.js


        // kilometerToMeter Convert 


function kilometerToMeter(kilometer){
    if (kilometer >= .01){
        let meter = kilometer * 1000;
        return meter;
    }
    else if (kilometer == 0){
        return " '0' is not countable value."
    }
    else{
        return "Please input a positive number."
    }
}
var result = kilometerToMeter(2);
// console.log(result);


        // budgetCalculator 


function TotalCost({ watch, phone, laptop }) {
    if (watch.price <= 0) throw Error("negative price is not allowed")
    if (phone.price <= 0) throw Error("negative price is not allowed")
    if (laptop.price <= 0) throw Error("negative price is not allowed")

    if (watch.quantity <= 0) throw Error("negative quantity is not allowed")
    if (phone.quantity <= 0) throw Error("negative quantity is not allowed")
    if (laptop.quantity <= 0) throw Error("negative quantity is not allowed")

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
// console.log(TotalCost(total));


         // hotelCost


function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstStay = 10 * 100;
        var remaining = day - 10;
        var secondStay = remaining * 80;
        cost = firstStay + secondStay;
    }
    else {
        var firstStay = 10 * 100;
        var secondStay = 10 * 80;
        var remaining = day - 20;
        var thirdStay = remaining * 50;
        cost = firstStay + secondStay + thirdStay;
    }
    return cost;
}
var count = hotelCost(29);
// console.log(count);


        // megaFriend


function megaFriend(friends) {
    var maxLength = -1, position = -1;
    for (var i = 0; i < friends.length; i++) {
        if (maxLength < friends[i].length) {
            maxLength = friends[i].length;
            position = [i];
        }
    }
    return friends[position];
}

var friends = ["Sakim Hossain", "Pranto Islam", "Rayhan Ahmed", "Rimon", "Al-Amin", "Hossain Miraje", "Md Faisal", "Mohammad", "Sohrab Hossain"];

// console.log(megaFriend(friends));