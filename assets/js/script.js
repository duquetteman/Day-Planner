
let now = moment();
let currentDate = now.format('MMMM Do YYYY');
let currentHour = now.get('hour')
$("#displayDateTime").text(currentDate);


function rowColor() {
    if ($(this).data("time") > currentHour) {
        $(this).addClass("future");
    }
    else if ($(this).data("time") === currentHour) {
        $(this).addClass("present");
    }
    else ($(this).data("time") < currentHour); {
        $(this).addClass("past");
    }
};

$(".textField").each(rowColor);
rowColor();

function savingData() {
    let nine = localStorage.getItem("nine");
    let ten = localStorage.getItem("ten");
    let eleven = localStorage.getItem("eleven");
    let twelve = localStorage.getItem("twelve");
    let one = localStorage.getItem("one");
    let two = localStorage.getItem("two");
    let three = localStorage.getItem("three");
    let four = localStorage.getItem("four");
    let five = localStorage.getItem("five");
    $("#nine").find("textarea").text(nine)
    $("#ten").find("textarea").text(ten)
    $("#eleven").find("textarea").text(eleven)
    $("#twelve").find("textarea").text(twelve)
    $("#one").find("textarea").text(one)
    $("#two").find("textarea").text(two)
    $("#three").find("textarea").text(three)
    $("#four").find("textarea").text(four)
    $("#five").find("textarea").text(five)
}

$(document).ready(function () {
    $(".saveOption").on("click", function () {
        let value = $(this).siblings(".textField").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
});

savingData();


