var empolyee={

    post: function(){
        return "Software Developer"
    },
    changename: function(name){
        this.name=name;
    }
};

// var e1= Object.create(empolyee);
// e1.name="Sharath";
// e1.role="writer";
// e1.changename="chintakindi";

var x = Object.create(empolyee,{
    name: {value:"sharath"},
    role: {value:"phd"},
})

console.log(x);