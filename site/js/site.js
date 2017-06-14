////////////////////////////////////////////////////
//Animated section library
////////////////////////////////////////////////////
AOS.init({
});

////////////////////////////////////////////////////
//Scroll to each section by menu click
////////////////////////////////////////////////////
$('[href="#evaluation"]').click(function(){
	$('#evaluation').animatescroll({
		scrollSpeed:1000,
		padding: "56"
	});
});

$('[href="#aboutUs"]').click(function(){
	$('#aboutUs').animatescroll({
		scrollSpeed:1000,
		padding: "120"
	});
});

$('[href="#therapies"]').click(function(){
	$('#therapies').animatescroll({
		scrollSpeed:1000,
		padding: "56"
	});
});

$('[href="#mainFooter"]').click(function(){
	$('#mainFooter').animatescroll({
		scrollSpeed:1000,
		padding: "58"
	});
});

////////////////////////////////////////////////////
//talk-to API
////////////////////////////////////////////////////
$('[href="#evaluation"]').click(function(){
	Tawk_API.maximize();
});
