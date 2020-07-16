$(document).ready(function() {  

let hoursAm = [9, 10, 11]
let hoursPm = [12, 1, 2, 3, 4, 5]
let currentHour = moment().hours();
let timeFrame = $('.time-block').text();


    function clock() {
        let currentDate = (moment().format('MMMM Do YYYY, h:mm:ss a'));
        $('#currentDay').html(currentDate);
    }
    setInterval(clock, 1000);

    $.each(hoursAm, function(i, time) {
        $('.container').append('<div class= "row hour"> <div class= "col-1 time-block">' + time + ' AM' + '</div>' + '<textarea class= "col-10 description"></textarea>' + '<button class= "col-1 saveBtn">' + 'Save' + '</button> </div>')
    })
    
    $.each(hoursPm, function(i, time) {
        $('.container').append('<div class= "row hour"> <div class= "col-1 time-block">' + time + ' PM' + '</div>' + '<textarea class= "col-10 description"></textarea>' + '<button class= "col-1 saveBtn">' + 'Save' + '</button> </div>')
    })

    $('.saveBtn').on('click', function(e) {
        e.preventDefault();
        let textInput = $(this).siblings('textarea').val();
        let time = $(this).siblings('.time-block').text();
        localStorage.setItem(time, textInput);
    })

    $('.time-block').each(function() {
        if (timeFrame < currentHour) {
            $('.description').addClass('past');
        } else if (timeFrame === currentHour) {
            $('.description').removeClass('past');
            $('.description').addClass('present');
        } else {
            $('.description').removeClass('present');
            $('.description').addClass('future');
        }
    })
})