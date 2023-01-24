var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
    for (let i = 0; i < count.length; i++) {
        inc.push(1);
        if (inc[i] != count[i].getAttribute("max-data")) {
            inc[i]++;
        }
        count[i].innerHTML = inc[i];
    }
}


var main = document.getElementById("main");
window.onscroll = function () {
    var timer = setInterval(() => {
        var topElm = main.offsetTop;
        var btmElm = main.offsetTop + main.clientHeight;
        var top_screen = window.pageYOffset;
        var bottom_screen = window.pageYOffset + window.innerHeight;
        if ((bottom_screen > topElm) && (top_screen < btmElm)) {
            intervalFunc();
        } else {
            clearInterval(timer);
        }
    }, 5000)
};


// ---------------form

function Mail(){

    let name = document.getElementById("name").value;
    let name1 = document.getElementById("name1").value;
    let email = document.getElementById("email").value;
    let number1 = document.getElementById("number1").value;
    let message = document.getElementById("message").value;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abhishekmohite1998@gmail.com",
        Password : "BE94E8B9D6FFEECCFBA24667BF79DADD1043",
        To : 'admin@pravastourism.in',
        From : "abhishekmohite1998@gmail.com",
        Subject : "Mail From Contact Form",
        Body : "Name:" + name + "<br> Last Name: " + name1 + "<br> User Email: " + email + "<br> Phone number : " + number1 +
        "<br> User Message: " + message 
    }).then(
      message => alert(message + "Form submitted Sucessfully!")
    );
    
}
