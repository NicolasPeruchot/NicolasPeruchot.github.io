

var i = 0;
var state = 0;
var echoMessage = "echo \"Nicolas Peruchot's website\""
var welcomeMessage = "Nicolas Peruchot's website"
var dateMessage = "date"
var lsMessage = "ls -1"

function toWrite(elementName, message) {

    if (i <= message.length) {
        var element = document.getElementById(elementName);
        element.textContent = "$ " + message.substring(0, i) + "█";
        i = i + 1;

    } else {
        var element = document.getElementById(elementName);
        element.textContent = "$ " + message;
        i = 0;
        state += 1
    }

}

var A = setInterval(function () {
    switch (state) {
        case 0:
            toWrite("welcome", echoMessage)
            break;

        case 1:
            var element = document.getElementById("first-message");
            element.textContent = welcomeMessage;
            state += 1;

            break;
        case 2:
            var element = document.getElementById("date-blue");
            var text_to_change = element.childNodes[0];

            text_to_change.nodeValue = '[~] ';
            toWrite("date", dateMessage);

            break;
        case 3:
            var element = document.getElementById("today");
            const date = new Date();
            element.textContent = date;
            state += 1
            break;

        case 4:
            var element = document.getElementById("ls-blue");
            var text_to_change = element.childNodes[0];

            text_to_change.nodeValue = '[~] ';
            toWrite("ls", lsMessage);

            break;
        case 5:
            var element = document.getElementById("linkedin");
            element.innerHTML = '<span class="blue2">Linkedin <i class="fa fa-linkedin fa-1" aria-hidden="true"></i></span>';
            state += 1;
            break;

        case 6:
            var element = document.getElementById("stackoverflow");
            element.innerHTML = '<span class="blue2">Stackoverflow <i class="fa fa-stack-overflow fa-1" aria-hidden="true"></i></span>';
            state += 1;
            break;

        case 7:
            var element = document.getElementById("github");
            element.innerHTML = '<span class="blue2">Github <i class="fa fa-github fa-1" aria-hidden="true"></i></span>';
            state += 1;
            break;



        case 8:
            var element = document.getElementById("cv");
            element.innerHTML = '<span class="blue2">Curriculum Vitæ <i class="fa fa-paperclip fa-1" aria-hidden="true"></i></span>';
            state += 1;
            break;

        case 9:
            var element = document.getElementById("mail");
            element.innerHTML = '<span class="blue2">Email <i class="fa fa-envelope fa-1" aria-hidden="true"></i></span>';
            state += 1;
            break;

        case 10:
            var element = document.getElementById("final-blue");
            var text_to_change = element.childNodes[0];
            text_to_change.nodeValue = '[~] ';

            var element = document.getElementById("final-green");
            if ((Math.floor(i / 15)) % 2 == 0) {
                element.textContent = " $ █"
            } else {
                element.textContent = " $"
            }
            i += 1
            break;

    }




}, 40);






