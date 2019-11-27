$( function() {
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                minDate:0
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w"
        })
        .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
        });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );

$('#btnValidate').click(function(event){
    event.preventDefault();
    var city = $('#city option:selected').val();
    var date = $('#from').val();
    var date2 = $('#to').val();
    var noRoom = $('#rooms').val();
    var noAdult = $('#adults').val();
    var noChild = $('#children').val();
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(city=="Select your city"){
        $('#city').focus();
        toastr.error("Please select the city");
    }
    else if(date==''){
        toastr.error('Please select the arrival date');
        $('#from').focus();
    }
    else if(date2==''){
        toastr.error('Please select the leaving date');
        $('#to').focus();
    }
     else if(noRoom==''){
        toastr.error('Please select number of rooms');
        $('#rooms').focus();
    }
    else if(noAdult==''){
        toastr.error('Please enter number of adults');
        $('#adults').focus();
    }
    else if(noAdult>3*noRoom){
        toastr.error('select adults less than : ' + (3*noRoom));
        $('#adults').focus();
    }
    else if(noChild==''){
        toastr.error('please enter number of children');
        $('#children').focus();
    }
    else if(noChild>noRoom){
        toastr.error('select children less than : ' + (noRoom));
        $('#children').focus();
    }
    else if(mobile==''){
        toastr.error('Please enter mobile number');
        $('#mobile').focus();
    }
    else if (/^\d{10}$/.test(mobile)==false) {
        toastr.error("Invalid number; must be ten digits")
        $('#mobile').focus();
    } else if(email==''){
        toastr.error('please enter the email id');
        $('#email').focus();
    } else if(!emailReg.test(email)){
        toastr.error("Invalid email; must enter a valid email address")
        }
    else{
        toastr.success("Booking done!!!")
        document.getElementById("form").reset();
    }
    
    
});
