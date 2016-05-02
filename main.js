function changeParagraph(par)
{
	$.getJSON( "paragraphs/"+par+".json", function( data ) 
	{
		console.log(data);
		
		$("#title").html(data.title);
		$("#text").html(data.text);
		
		var a = "";
		for(var o in data.options)
		{
			$("<span>").addClass("option").html(data.options[o].text).appendTo("#options");
			$("#options").append("</br>");
		}
		
		
		$("body").css("background-color", data.color);
	})
	.fail(function(jq, stat, e) 
	{
		console.log(jq);
		console.log(stat);
		console.log(e);
	});
}