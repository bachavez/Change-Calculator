//alert('Is this working');
angular.module('changeApp', [])
  .controller('changeCtrl', function() {
    var vm = this;
    vm.changeCalc = function () {
      console.log('Angular is working');

    var amountDue = parseFloat(vm.arrayData.due);
    var amountGiven = parseFloat(vm.arrayData.paid);

    if (!isNaN(amountDue) && !isNaN(amountGiven)){
    amountDue = Math.floor(amountDue * 100);
    amountGiven = Math.floor(amountGiven * 100);
    
    console.log(amountDue);
    console.log(amountGiven);
    
    var change = amountGiven - amountDue;
    
    var denominations = {
      oneDollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1
    };
    
    console.log(change);
    var dollars = Math.floor(change / denominations.oneDollar)
    change -= dollars * denominations.oneDollar;
    
        console.log(change);
    var quarters = Math.floor(change / denominations.quarter);
    change -= quarters * denominations.quarter;
    
        console.log(change);
    var dimes = Math.floor(change / denominations.dime);
    change -= dimes * denominations.dime;
    
        console.log(change);
    var nickels = Math.floor(change / denominations.nickel);
    change -= nickels * denominations.nickel;
    
        console.log(change);
    var pennies = Math.floor(change / denominations.penny);

    vm.dollars=dollars;
    vm.quarters=quarters;
    vm.dimes=dimes;
    vm.nickels=nickels;
    vm.pennies=pennies;
    
    //Jquery equivalent to Angular
    // $("#dollars").text(dollars);
    // $("#quarters").text(quarters);
    // $("#dimes").text(dimes);
    // $("#nickels").text(nickels);
    // $("#pennies").text(pennies);
    }

  }
  vm.arrayData = {
      due: "" ,
      paid: ""
    };
  });
  