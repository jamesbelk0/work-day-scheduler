// global variable
var saveBtn = $(".saveBtn");

// function
// date
$("#currentDay").text(moment().format('MMMM Do YYYY'));

//color per time block
function blockColor() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // local storage
    localStorage.setItem(time, plan);
});

function usePlanner() {
    $(".hour").each(function () {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

blockColor();
usePlanner();