let a ={
    fname : "Samod",
    lname : "Singh",
    age : 23,
    email : "samod0098@gmail.com",
    fevMovies : ["Dhoom", "Sholay", "Hum"],
    salary : function(){
        return 2500;
    },
    fullname : function(){
        return this.fname + " " + this.lname;
    }
}
console.log(a.fullname());

