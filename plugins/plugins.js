$(document).ready(function validate(){
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    });
    jQuery.validator.addMethod("tntraemail", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.-]+@+tntra.io*$/i.test(value);
    });
    jQuery.validator.addMethod("phnumber", function(value, element) {
        return this.optional(element) || /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/i.test(value);
    });

     $("#formdemo").validate({
        rules:{
            fname: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            lname: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            city:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            state:{
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            feedback: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            suggestion: {
                lettersonly: true,
                required: true,
                maxlength: 20
            },
            number: {
                required: true,
                minlength: 10,
                number: true,
                phnumber:true,
            },
            email:{
                required: true,
                tntraemail : true,
            },
            checkbox1 :{
                required:true,
            },

            gender: {
                required:true,
            },

            info: {
                required:true,
            },
        },
        messages: {
            fname: {
                required: "please enter first name",
                lettersonly: "Please enter characters only"
            },
            lname: {
                required: "please enter last name",
                lettersonly: "Please enter characters only"
            },
            city: {
                required: "please enter city name",
                lettersonly: "Please enter characters only"
            },
            state: {
                required: "please enter state name",
                lettersonly: "Please enter characters only",
            },
            feedback: {
                required: "please enter proper feedback",
                lettersonly: "Please enter characters only",
            },
            suggestion: {
                required: "please enter suggestion for us",
                lettersonly: "Please enter characters only",
            },
            number: {
                required: "please enter contact number",
                minlength: "contact number needs atleast 10 numeric values",
                number: "Only numeric value accepted" ,
                phnumber: "Please enter number starting with 789"
            },
            email: {
                required: "please enter your email address",
                tntraemail : "Please enter valid tntra email format",
            },
            info: {
              required:"Please select one from list",
            },
            checkbox1 :{
                required:"please check ckeckbox",
            },

            gender: {
                required:"You must select male, female or others",
            },
        },

        // $("#btnsubmit").click(function() {
        //     var x = $("#formdemo").serializeArray();
        //     $.each(x, function(i, field) {
        //         $("#output").append(field.name + ":"
        //                 + field.value + " ");
        //     });
    });
debugger
    //input data is printed in the table below:
        // var data= " ";
        // $("#btnsubmit").click(function(){
        //     var d1 = $("#fname").val();
        //     var d2 = $("#lname").val();
        //     var d3 = $("#addressline1").val();
        //     var d4 = $("#addressline2").val();
        //     var d5 = $("#city").val();
        //     var d6 = $("#state").val();
        //     var d7 = $("#number").val();
        //     var d8 = $("#email").val();
        //     var d9 = $("#info").val();
        //     var d10 = $("#feedback").val();
        //     var d11 = $("#suggestion").val();
        //     var d12 = $('input[name="gender"]:checked').val();

        //     data = data + "<tr><td>" + d1 + "</td><td>"+ d2 +"</td><td>" + d3 +"</td><td>" + d4 +"</td><td>" + d5 +"</td><td>" + d6 +"</td><td>" + d7 +"</td><td>" + d8 +"</td><td>" + d9 +"</td><td>" + d10 +"</td><td>" + d11 +"</td><td>" + d12 +"</td></tr>";
        //     ;

        //     $("#output").html(data);
        // });

    //input data is printed to the redirected page:
        var data = " ";
        $("#btnsubmit").bind("click", function(){
            var d1 = $("#fname").val();
            localStorage.setItem("fn",d1);
            var d2 = $("#lname").val();
            localStorage.setItem("ln",d2);
            var d3 = $("#addressline1").val();
            localStorage.setItem("ad1",d3);
            var d4 = $("#addressline2").val();
            localStorage.setItem("ad2",d4);
            var d5 = $("#city").val();
            localStorage.setItem("cn",d5);
            var d6 = $("#state").val();
            localStorage.setItem("sn",d6);
            var d7 = $("#number").val();
            localStorage.setItem("nm",d7);
            var d8 = $("#email").val();
            localStorage.setItem("email1",d8);
            var d9 = $("#info").val();
            localStorage.setItem("info1",d9);
            var d10 = $("#feedback").val();
            localStorage.setItem("fb",d10);
            var d11 = $("#suggestion").val();
            localStorage.setItem("sg",d11);
            var d12 = $('input[name="gender"]:checked').val();
            localStorage.setItem("gd",d12);

            data = data + "<tr><td>" + d1 + "</td><td>"+ d2 +"</td><td>" + d3 +"</td><td>" + d4 +"</td><td>" + d5 +"</td><td>" + d6 +"</td><td>" + d7 +"</td><td>" + d8 +"</td><td>" + d9 +"</td><td>" + d10 +"</td><td>" + d11 +"</td><td>" + d12 +"</td></tr>";
            ;

            $("#output").html(data);
        });

});
