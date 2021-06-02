'use strict';
console.log('lecture #15');//codeing challange #3

const johnBMI = {
            fullName:'john smith',
            mass:92,
            height:1.95,
            calcBMI:function(){
                 this.BMI = this.mass/(this.height**2);
                return this.BMI;
            }
}
 const markBMI = {
            fullName:'mark miller',
            mass:78,
            height:1.69,
            calcBMI:function(){
                 this.BMI = this.mass/(this.height**2);
                return this.BMI;
            }
}
if((johnBMI.calcBMI())>(markBMI.calcBMI())){
    console.log(`${johnBMI.fullName} BMI(${johnBMI.calcBMI()}) is higher than  ${markBMI.fullName} BMI(${markBMI.calcBMI()})`);
    
}else{
    
    console.log(`${markBMI.fullName} BMI(${markBMI.calcBMI()}) is higher than  ${johnBMI.fullName} BMI(${johnBMI.calcBMI()})`);
}
