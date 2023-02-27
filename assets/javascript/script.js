var rootEl = $('#root');
var textInputEl = $('.description');
var currentTime = dayjs().format('H');
console.log(currentTime);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

    $(function () {
        // click event listener added to the save buttons so that when it is clicked the 
        // users input will be saved in local storage to the time slot it was entered in
        var saveBtn = $('.saveBtn');
        function saveText() {
            var textInput = $(this).siblings('textarea').val();
            var timeTextInput = $(this).parent().attr('id'); 
            console.log(textInput);
            console.log(timeTextInput);
            localStorage.setItem(timeTextInput, textInput);
        };
        saveBtn.on('click', saveText);

        // code that applys the past, present, or future class to each time
        // block by comparing the id to the current hour.
        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hour-')[1]);
            console.log(timeBlock);
            
            if (timeBlock < currentTime) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (timeBlock == currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future')
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            };
        });
        
        //code that gets any user input that was saved in localStorage and set sets
        // it as the text value for each hours description class
        $('#hour-9 > .description').val(localStorage.getItem('hour-9'));
        $('#hour-10 > .description').val(localStorage.getItem('hour-10'));
        $('#hour-11 > .description').val(localStorage.getItem('hour-11'));
        $('#hour-12 > .description').val(localStorage.getItem('hour-12'));
        $('#hour-13 > .description').val(localStorage.getItem('hour-13'));
        $('#hour-14 > .description').val(localStorage.getItem('hour-14'));
        $('#hour-15 > .description').val(localStorage.getItem('hour-15'));
        $('#hour-16 > .description').val(localStorage.getItem('hour-16'));
        $('#hour-17 > .description').val(localStorage.getItem('hour-17'));



        //code that displays the current date in the header of the page.
        var todaysDate = dayjs().format('dddd, MMMM D')
        $('#currentDay').text(todaysDate);
    });

});




