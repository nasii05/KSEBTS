var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = document.querySelector('#Username');
var userno = document.querySelector('#UserNumber');
var useraddress = document.querySelector("#UserAddress");
var currentunit = document.querySelector('#CurrentUnit');
var previousunit = document.querySelector('#PreviousUnit');
var btn = document.querySelector('#submitbtn');
//out field
var ot1 = document.querySelector('#ot1');
var ot2 = document.querySelector('#ot2');
var ot3 = document.querySelector('#ot3');
var ot4 = document.querySelector('#ot4');
var ot5 = document.querySelector('#ot5');
var ot7 = document.querySelector('#ot7');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
    e.preventDefault();
    var flag = 1;
    if (flag === 1) {
        ot1.innerText = obj1.username.value;
        ot2.innerHTML = obj1.userno.value;
        ot3.innerHTML = obj1.useraddress.value;
        ot4.innerHTML = obj1.currentunit.value;
        ot5.innerHTML = obj1.previousunit.value;
        function calculate() {
            var electricitybill;
            var currentbill = currentunit.value - previousunit.value;
            var surcharge = 3;
            var deposit = 5;
            if (currentbill <= 350) {
                electricitybill = currentbill * 6.60 + surcharge + deposit;
            }
            else if (currentbill >= 350 && currentbill < 400) {
                electricitybill = currentbill * 6.90 + surcharge + deposit;
            }
            else if (currentbill >= 400 && currentbill < 500) {
                electricitybill = currentbill * 7.10 + surcharge + deposit;
            }
            else if (currentbill >= 500) {
                electricitybill = currentbill * 7.90 + surcharge + deposit;
            }
            ot7.innerHTML = electricitybill;
            console.log(electricitybill);
            console.log("calculations are done!!");
        }
        calculate();
    }
});
var users = /** @class */ (function () {
    function users(username, useraddress, userno) {
        this.username = username;
        this.useraddress = useraddress;
        this.userno = userno;
    }
    return users;
}());
var bill = /** @class */ (function (_super) {
    __extends(bill, _super);
    function bill(username, useraddress, userno, currentunit, previousuit) {
        var _this = _super.call(this, username, useraddress, userno) || this;
        _this.currentunit = currentunit;
        _this.previousunit = previousuit;
        return _this;
    }
    return bill;
}(users));
var obj1 = new bill(user, userno, useraddress, currentunit, previousunit);
obj1.username = user;
obj1.userno = userno;
obj1.useraddress = useraddress;
obj1.currentunit = currentunit;
obj1.previousunit = previousunit;
