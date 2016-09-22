$(function() {
    var text = $('#typing-field').text();
    var current = 0;
    var charsTyped = 0.0;
    var totalChars = text.length;
    var start = 0;
    var timer = 0;
    var cpm = 0;
    function checkChar (ch) {
        charsTyped++;
        $('#' + current).removeClass('text-current');
        if (ch == "" + text.charAt(current)) {
            $('#' + current).removeClass('text-error');
            $('#' + (current+1)).addClass('text-current');
            current++;
            if (current == text.length) {
                $('#index-modal').modal('hide');
                alert("Congratulations! You finished this exercise!");
            }
            else {
                $("#" + current).attr("tabindex",0).focus();
                $("#" + (current -1)).attr("tabindex",-1).blur();
            }
        }
        else {
            $('#' + current).addClass('text-error');
        }
        $('#cpm').text(Math.round(charsTyped / ((timer-start)/1000) * 60));
        $('#accuracy').text(Math.round(current / charsTyped * 100));
    };
// Reset everything when clicking the "Start Typing" button
    $('#modalToggle').on('click', function(e) {
        $('#' + current).removeClass('text-current');
        $('#' + current).removeClass('text-error'); 
        $('#0').addClass('text-current');
        current = 0;
        charsTyped = 0.0;
        start = 0;
        timer = 0;
        cpm = 0;
    });
// timer
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    function setTime () {
        timer = (new Date).getTime();
        $('#timer-minutes').text(pad(Math.round((timer-start) / 1000 / 60)));
        $('#timer-seconds').text(pad(Math.round((timer-start) / 1000 % 60)));
        $('#cpm').text(Math.round(charsTyped / ((timer-start)/1000) * 60));
    }

// Starts timer when the dialog is shown
    $("#index-modal").on("shown.bs.modal", function(e) {
        start = (new Date).getTime();
        setInterval(setTime, 1000);
    });


// Key event handler
    window.onkeydown = function(event) {
        if (event.keyCode == 32) {
            event.preventDefault();
            checkChar(" ");
        }
        if (event.keyCode == 9) {
            // Tab
            event.preventDefault();
        }
    }
    $(document).keypress(function(event) {
        checkChar(String.fromCharCode(event.which));
    });

// Focus trick by Giang
    $("#typing-field").click(function(){
        $("#typing-field").blur();
        $("#" + current).attr("tabindex",0).focus();
    });
})

