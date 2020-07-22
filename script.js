
$(document).ready(function() {  
    
        function clock() {
            let currentDate = (moment().format('MMMM Do YYYY, h:mm:ss a'));
            $('#currentDay').html(currentDate);
        }
        setInterval(clock, 1000);
        
        $('#9 .description').val(localStorage.getItem('9'));
        $('#10 .description').val(localStorage.getItem('10'));
        $('#11 .description').val(localStorage.getItem('11'));
        $('#12 .description').val(localStorage.getItem('12'));
        $('#13 .description').val(localStorage.getItem('13'));
        $('#14 .description').val(localStorage.getItem('14'));
        $('#15 .description').val(localStorage.getItem('15'));
        $('#16 .description').val(localStorage.getItem('16'));
        $('#17 .description').val(localStorage.getItem('17'));
    
        $('.saveBtn').on('click', function(e) {
            e.preventDefault();
            let textInput = $(this).siblings('.description').val();
            let time = $(this).parent().attr('id');
            localStorage.setItem(time, textInput);
            alert("Saved!");
        })
       
        $('.time-block').each(function() {
            let currentTime = moment().hour();
            let timeBlock = $(this).attr('id');
            
            if(timeBlock < currentTime) {
                $(this).addClass('past');
            } else if (timeBlock == currentTime) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            } else {
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            }

        })
        
    })
   
    