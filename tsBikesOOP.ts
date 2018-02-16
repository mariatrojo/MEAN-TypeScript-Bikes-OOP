class Bike {
    miles: number = 0;
    allInfo: string;
     constructor(
         public price: number,
         public max_speed: string) { }
	//ISSUE: arrow is needed since this function is called by another function.
    ride = () => {
        for (var i = 0; i < 10; i++) {
            this.miles++;
        }
        console.log('Riding');
        return this;
    }

    reverse = () => {
        for (var i = 0; i < 5; i++) {
            this.miles--;
        }
        console.log('Reversing');
        return this;
    }

    displayInfo = () => {
        console.log('Price: ' + this.price + ', Max speed: ' + this.max_speed, ' Miles: ' + this.miles);
    }
 }
const bike1 = new Bike(10, "140");
bike1.ride().ride().ride().reverse();
bike1.displayInfo();