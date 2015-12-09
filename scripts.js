$(document).ready(function(){
	arrange_screen();
	
	$("#question_1,#question_2,#question_3,#question_4").change(function(){
		page_2_check();
	});
	
	$("#question_5,#question_6,#question_7").change(function(){
		page_3_check();
	});
	
	$("#question_8,#question_9,#question_10").change(function(){
		page_4_check();
	});
	
});

$(window).resize(function(){arrange_screen()});

function arrange_screen(){
	$("#viewport").height($(window).height() - $("#navbar").height() + "px");
}

function is_alpha(a){
	var arr = a.split('');
	var patt = /[a-zA-Z ]/;
	for (i=0;i<arr.length;i++){
		if (patt.test(arr[i]) == false){
			return false;
			break;
		};
	};
	return true;
}

function test_name(){
	if ((is_alpha($("#name").val()) == true) && ($("#name").val().length > 2)){
			$("#submit_name_button").prop("class","btn btn-success col-md-4 col-md-offset-4");
			$("#submit_name_button").prop("disabled",false);
			$("#submit_name_button").off("click");
			$("#submit_name_button").click(function(){
				page_1_approve();
			});
	} else if (is_alpha($("#name").val()) == false) {
		$("#submit_name_button").prop("class","btn btn-danger col-md-4 col-md-offset-4");
		$("#submit_name_button").off("click");
		$("#submit_name_button").click(function(){
			$("#p1_alert").empty();
			$("#p1_alert").append("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Whoops!</strong> Names must have at least three characters and can only be comprised of letters and spaces.</div>");
			$("#p1_alert").fadeIn(150).delay(2750).fadeOut(500);
			$("#name").val("");
			$("#submit_name_button").prop("class","btn btn-primary col-md-4 col-md-offset-4");
			$("#submit_name_button").prop("disabled",true);
		});
	} else {
		$("#submit_name_button").prop("class","btn btn-primary col-md-4 col-md-offset-4");
		$("#submit_name_button").prop("disabled",false);
		$("#submit_name_button").off("click");
		$("#submit_name_button").click(function(){
			$("#p1_alert").empty();
			$("#p1_alert").append("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Names must have at least three characters and can only be comprised of letters and spaces.</div>");
			$("#p1_alert").fadeIn(150).delay(4000).fadeOut(500);
			$("#name").val("");
			$("#submit_name_button").prop("class","btn btn-primary col-md-4 col-md-offset-4");
			$("#submit_name_button").prop("disabled",true);
		});
	}
}

function page_1_approve(){

	var name = $("#name").val();
	
	$.post("namecheck.php",{name:name},function(data,status){
		if (status=="success"){
			if (data.search("fail") > -1){
				$("#p1_alert").empty();
				$("#p1_alert").append("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Someone with that name has recently taken the test. Go legally change your name, then come back and try again.</div>");
				$("#p1_alert").fadeIn(150).delay(4000).fadeOut(500);
				$("#name").val("");
				$("#submit_name_button").prop("class","btn btn-primary col-md-4 col-md-offset-4");
				$("#submit_name_button").prop("disabled",true);
			} else {
				$("#navbar_list").append("<li onclick='location.reload()'><a href='#'>Restart Test</a></li>");
				$("#page_1").fadeOut(50);
				$("#page_2").fadeIn(150);
			}
		}
	});
	
}

function page_2_check(){
	for (i=1;i<5;i++){
		if ($('input[name=question_' + i + ']:checked').val()){
			$("#page_2_submit").prop("disabled",false);
		} else {
			$("#page_2_submit").prop("disabled",true);
			break;
		};
	}
}

function page_2_approve(){
	$("#page_2").fadeOut(50);
	$("#page_3").fadeIn(150);
}

function page_3_check(){
	for (i=5;i<8;i++){
		if ($('input[name=question_' + i + ']:checked').val()){
			$("#page_3_submit").prop("disabled",false);
		} else {
			$("#page_3_submit").prop("disabled",true);
			break;
		};
	}
}

function page_3_approve(){
	$("#page_3").fadeOut(50);
	$("#page_4").fadeIn(150);
}

function page_4_check(){
	for (i=1;i<11;i++){
		if ($('input[name=question_' + i + ']:checked').val()){
			$("#page_4_submit").prop("disabled",false);
		} else {
			$("#page_4_submit").prop("disabled",true);
			break;
		};
	}
}

function page_4_approve(){
	
	var name = $("#name").val();
	var a = $('input[name=question_1]:checked').val();
	var b = $('input[name=question_2]:checked').val();
	var c = $('input[name=question_3]:checked').val();
	var d = $('input[name=question_4]:checked').val();
	var e = $('input[name=question_5]:checked').val();
	var f = $('input[name=question_6]:checked').val();
	var g = $('input[name=question_7]:checked').val();
	var h = $('input[name=question_8]:checked').val();
	var i = $('input[name=question_9]:checked').val();
	var j = $('input[name=question_10]:checked').val();
	
	$.post("runtest.php",{name:name,a:a,b:b,c:c,d:d,e:e,f:f,g:g,h:h,i:i,j:j},function(data,status){
		
		if (status=="success"){
			var res = new Array();
			eval(data);
			$("#result_image_div,#result_text_div").empty();
			if (res['turtle'] == "leo"){
				$("#result_image_div").append("<img src='leonardo.gif' style='height:30%;width:auto;margin-top:2.5vh;margin-bottom:2.5vh'>");
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2">Leonardo is considered the "big brother" of the group due to his serious and responsible nature. He has taken on the unofficial title of "leader" of the Turtles and leads by example and not by giving orders, thus earning Leo great respect from his brothers. Leo is everything you\'d want in a hero because no one works, studies, or trains harder than he does.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>Leo\'s favorite color is blue and his weapons are twin katana swords, bestowed upon him by Splinter due to the turtle\'s sharp mind and steely resolve.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>You are responsible and disciplined. The upside of this is that you have definite leadership potential, and in your personal life you are a highly trustworthy and dependable friend. You may come across as a bit "goody-goody" and tight-laced, you may want to focus on loosening up more; you could definitely afford to, and it will likely pay dividends in both your personal and professional lives.</p>');
			} else if (res['turtle']== 'mike'){
				$("#result_image_div").append("<img src='michaelangelo.jpg' style='width:100%;height:auto;margin-bottom:2.5vh;margin-left:.25vw'>");
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2">Michelangelo is a naturally skilled athlete, which often makes up for his lack of eagerness to participate in long training sessions. He is a practical joker and class-clown who keeps his brothers both annoyed and entertained at times.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>Splinter chose the nunchaku as Mikey\'s weapon since it best suited his show-stopping style and spirit. His favorite color is orange and he loves pizza the most out of any of the Turtles.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>You\'re a joker. You smoke a lot of weed. Your friends love hanging out with you, despite the fact that they always have to pick up the tab. What your parents always say is totally true, you need to go cut your damn hair and get a real job, stoner!');
			} else if (res['turtle'] == 'don'){
				$("#result_image_div").append("<img src='donatello.jpg' style='width:100%;height:auto;margin-bottom:2.5vh;'>");
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2">Donatello is the brainiest turtle of the bunch and has the unique ability to figure out how things work. His brothers are fortunate to have him around because he has invented many of their bodacious transportation vehicles, including the Battle Shell, Shell Cycle and the Sewer Slider.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>Donnie would rather solve a problem by talking it out rather than fighting, but this is rarely an option in a world in which the Foot Clan lurks. This makes the bo staff the perfect weapon for Donatello since he is long on inspiration and stout of heart. His favorite color is purple.</p>');
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>You are intelligent, rational, and logical almost to a fault. You were probably not the most popular kid in your high school, but now you have a small group of close friends and it\'s way better than high school. You are probably extremely technically proficient at your job, but it is also likely that you have not negotiated yourself the best compensation package possible. Go ask your boss for a raise, pointdexter!');
			} else if (res['turtle'] == 'raph'){
				$("#result_image_div").append("<img src='raphael.jpg' style='width:100%;height:auto;margin-bottom:2.5vh;margin-left:.5vw'>");
				$("#result_text_div").append('<p class="row col-md-8 col-md-offset-2">Raphael is by far the most fearsome and fearless fighter of the group, although he has trouble mastering his emotions at times. He is often steadfast and strong-minded and he acts like a typical rebel who questions authority. Raph understands he needs to work on keeping his temper in control but, simply put, he prefers to be left alone at times.');
			    $("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>Raph\'s favorite color is red. Splinter chose twin sais for his weapon due to his quick and "pointed" personality.');
			    $("#result_text_div").append('<p class="row col-md-8 col-md-offset-2"><br>You\'re kind of a badass. You tend to have passionate relationships, but you also tend to burn bridges. You are a high performer at work, but you may be seen as more than a little difficult to get along with. You and alcohol is a dangerous combination.');
			};
			
			var mrp = "my_results_pie";
			
			$("#navbar_list").append("<li id='new_li'><a href='#'>View Stats</a></li>");
			$("#new_li").click(function(){showStats(res['leo'],res['raph'],res['mike'],res['don'],"my_results_pie",res['name'] + "'s Results : ")})
			
			$("#page_4").fadeOut(50);
			$("#page_5").fadeIn(150);

		}
		
	});
}

function drawChart(a,b,c,d,e,f) {

        var data = google.visualization.arrayToDataTable([
          ['Turtle', 'Percentage'],
          ['Leonardo',     a],
          ['Raphael',      b],
          ['Michaelangello',  c],
          ['', 0],
          ['Donatello',    d]
        ]);

        var options = {
          title: f
        };

        var chart = new google.visualization.PieChart(document.getElementById(e));

        chart.draw(data, options);
}

function showStats(a,b,c,d,e,f){

	drawChart(a,b,c,d,e,f);
	$("#page_5").fadeOut(150);
	$("#gif").show()
	
	$.post("alldata.php",function(data,status){
	
		if (status=="success"){
			
			var arr=new Array();
			eval(data);
			
			$("#latest_table tbody").empty();
			for (i=0;i<6;i++){
				if (arr[i]){
					$("#latest_table").append("<tr><td>" + arr[i]['name'] + "</td><td>" + full_name(arr[i]['turtle']) + "</td></tr>");
				}
			};
			
			var raph = 0;
			var don = 0;
			var leo = 0;
			var mike = 0;
			
			for (i=0;i<arr.length;i++){
				if (arr[i]['turtle'] == 'raph'){
					raph+=1;
				} else if (arr[i]['turtle'] == 'don'){
					don+=1;
				} else if (arr[i]['turtle'] == 'leo'){
					leo+=1;
				} else if (arr[i]['turtle'] == 'mike'){
					mike+=1;
				}
			};
			
			drawChart(leo,raph,mike,don,"total_results_pie","Overall Combined Results : ");
			
			$("#gif").fadeOut(50);
			$("#page_6").fadeIn(150);
			
		}
	
	});
	
}

function full_name(a){
	if (a=="don"){
		return "Donatello";
	} else if (a=="raph"){
		return "Raphael";
	} else if (a=='leo'){
		return "Leonardo";
	} else if (a=="mike"){
		return "Michaelangello";
	}
}