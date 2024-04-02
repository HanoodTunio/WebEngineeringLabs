const car = {
    brand: 'Toyota',
    getInfo: function() {
      console.log('This car is a ' + this.brand);
    }
  };

car.getInfo();

  const car1 = {
    brand: 'Toyota',
    getInfo: () => {
      console.log('This car is a ' + this.brand);
    }
  };

  car1.getInfo();


  let show = function(){
    console.log(" Hey Anonymous Function!")
  }
  
  show();

let sum = function( x, y){
    console.log(x+y);
}

sum(4, 6)