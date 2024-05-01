// function car(make,speed)
    // {
    //     this.make = make;
    //     this.speed = speed;
    // }
    // let car1 = new car('BMW',120);
    // let car2 = new car('Mercedes',95);
    // car.prototype.accelerator = function()
    // {
    //     console.log(this.speed += 10);
    // }
    // car.prototype.brake = function()
    // {
    //     console.log(this.speed -= 5);
    // }
    // car1.accelerator();
    // car1.accelerator();
    // car1.accelerator();
    // car1.accelerator();
    // car2.brake();

    function person(fName,lName,dob)
    {
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
    }
    let per1 = new person('m','ayaz',2000);
    person.prototype.fullName = function()
    {
        return `${this.fName} ${this.lName}`;
    }
    person.prototype.age = function()
    {
        console.log(new Date().getFullYear() - this.dob);
    }
    console.log(per1.fullName());
    per1.age()