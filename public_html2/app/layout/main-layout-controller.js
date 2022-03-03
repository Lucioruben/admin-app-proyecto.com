$(document).ready(function(){

	$("#header").load("/views/layout/header.html");
	
	$("#footer").load("/views/layout/footer.html");

	$("#mainMenu").load("/views/layout/main-menu.html",seleccionarMenu);

});

function seleccionarMenu(result)
{
	//console.log(document.location.pathname)
	$("#mainMenu li").each(function(index){
		
		menu_item=$(this).first().html();

		index_menu_item=menu_item.indexOf(document.location.pathname);

		if(index_menu_item>0)
		{
			$(this).children().addClass("active");
		}
		console.log(index_menu_item);
		
	});
}