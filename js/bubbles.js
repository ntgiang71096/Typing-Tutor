
$(function() {
    $("#modal-intro").modal("show");
    var typing = false;
    var start = 0;
    var timer = 0;
    var current = 0;
    var done = false;
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    window.onkeydown = function(event) {
        if (!$("#modal-intro").hasClass('in') && !typing) {
            typing = true;
            start = (new Date).getTime();
            setInterval(setTime, 1000);
        }
        switch (event.keyCode) {
            case 32, 222, 9, 8:
                event.preventDefault();
                break;
        }
    }
    $(document).keypress(function(event) {

        if (typing) {
            var ch = String.fromCharCode(event.which);
            if (ch == alphabet.charAt(current)) {
                $("#" + alphabet.charAt(current)).addClass("invisible");
                if (current == 25) {
                    // success
                    done = true;
                    var message = "You finished this game in " + $("#timer-text").text() + "!";
                    console.log($("#timer-text"));
                    $("#modal-message").text(message);
                    $("#modal-success").modal("show");

                     // post result to DB
                     

                     $.post(base_url + "/user/save_game_log",
                    {
                        user_name: userName,
                        user_id : userId,
                        game_name : "Bubbles",
                        point : Math.round((timer-start) / 1000)
                    },
                    function(data, status){
                        console.log("posted");
                    });
                }
                else {
                    $("#" + alphabet.charAt(current + 1)).addClass("current");
                    current++;
                }
            }
        }
    });


    function pad ( val ) { return val > 9 ? val : "0" + val; }
    function setTime () {
        if (!done) {
            timer = (new Date).getTime();
            $("#timer-minutes").text(pad(Math.round((timer-start) / 1000 / 60)));
            $("#timer-seconds").text(pad(Math.round((timer-start) / 1000 % 60)));
            $("#cpm").text(Math.round(current / ((timer-start)/1000) * 60));
        }
    }
})