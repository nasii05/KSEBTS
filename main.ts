let user:any = document.querySelector('#Username')
let userno:any = document.querySelector('#UserNumber')
let useraddress:any = document.querySelector("#UserAddress")
let currentunit:any = document.querySelector('#CurrentUnit')
let previousunit:any = document.querySelector('#PreviousUnit')
let btn = document.querySelector('#submitbtn')


//out field
let ot1:any = document.querySelector('#ot1')
let ot2:any = document.querySelector('#ot2')
let ot3:any = document.querySelector('#ot3')
let ot4:any = document.querySelector('#ot4')
let ot5:any = document.querySelector('#ot5')
let ot7:any = document.querySelector('#ot7')



btn?.addEventListener('click',(e)=>{
    e.preventDefault();
     
    let flag = 1;

    if(flag===1){
        ot1.innerText= obj1.username.value
        ot2.innerHTML = obj1.userno.value
        ot3.innerHTML = obj1.useraddress.value
        ot4.innerHTML = obj1.currentunit.value
        ot5.innerHTML = obj1.previousunit.value
        
            
       


    function calculate(){
    let electricitybill;
    let currentbill:number = currentunit.value - previousunit.value
    const surcharge:number = 3;
    const deposit:number = 5;
    if(currentbill <= 350){
        electricitybill = currentbill*6.60+surcharge+deposit;
    }else if(currentbill >= 350 && currentbill < 400){
        electricitybill = currentbill*6.90+surcharge+deposit;
    }else if(currentbill >= 400 && currentbill < 500){
        electricitybill = currentbill*7.10+surcharge+deposit;
    }else if(currentbill >= 500){
        electricitybill = currentbill*7.90+surcharge+deposit;
    }

    ot7.innerHTML = electricitybill
    console.log(electricitybill)
    console.log("calculations are done!!")
}
calculate()

}   
})

class users{
    username:any
    useraddress:any
    userno:any
    constructor(username:any,useraddress:any,userno:any){
        this.username=username;
        this.useraddress=useraddress;
        this.userno=userno
    }
}

class bill extends users{
    currentunit:any
    previousunit:any
    constructor(username:any,useraddress:any,userno:any,currentunit:any, previousuit:any){
        super(username,useraddress,userno)
        this.currentunit=currentunit
        this.previousunit=previousuit
    }
}
let obj1 = new bill(user,userno,useraddress,currentunit,previousunit);
obj1.username = user
obj1.userno = userno
obj1.useraddress = useraddress
obj1.currentunit = currentunit
obj1.previousunit = previousunit


