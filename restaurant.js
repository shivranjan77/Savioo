$(document).ready(function () {
    $('.dish').mouseenter(function () {
        $(this).css({
            width: "90px",
            height: "90px",


        }, 'slow');

    })
    $('.dish').mouseleave(function () {
        $(this).css({
            width: "70px",
            height: "70px",
            "border-color": "black"
        }, 'slow')
    });
    $('#date').datepicker({minDate:0});
});
$('#reserve').click(function () {
    var date = $('#date').val();
    var time = $('#time').val();

    if(date==""){
        toastr.error("fill the date")
    }
     else if(time==""){
        toastr.error("fill the time")
    }
    else{
        toastr.success("!! Table Reserved !!")
        setTimeout(function(){ document.getElementsByTagName("form")[0].submit(); }, 500);
    }
});

