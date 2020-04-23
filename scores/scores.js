"use strict";
$(document).ready(function() {
        var array = new Array();
        var name_scores= new Array();
        var sum = 0;
        var scores =0;
        var averageScore=0;
        
		var displayScores = function () {   
		  var str='';
        for( var i=0; i<array.length && i<name_scores.length;i++)
            {
                str +=name_scores[i]+" "+array[i];
            }
        $("#scores").val(str);
        for( var i=0;i<array.length;i++)
            {
                sum=Number(sum)+Number(array[i]);
                scores++;
                averageScore=Number(sum)/Number(scores);
                $("#average_score").val(averageScore);
            }
    };
    
    $("#add_button").click(function() {
         var first_name=$("#first_name").val();
		var last_name=$("#last_name").val();
		first_name+=" "+last_name;
		var score=$("#score").val()+"\n";
		
		array.push(score);
		
		name_scores.push(first_name);
		displayScores();
        
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()
    
    $("#clear_button").click(function() {
        $("#first_name").val( "" );
		
		$("#last_name").val( "" );
		
		$("#score").val( "" );
		
		$("#first_name").focus();
		array.length=0;
		student.length=0;

        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click(function() {
        name_scores.sort();
		
        $("#scores").val(name_scores);
    }); // end click()
    
    $("#first_name").focus();
});