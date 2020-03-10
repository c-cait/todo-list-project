// check off specfic todo by clicking
//can also use .click(function(){}), use keyword "this" which refers to specific li that wasclicked 
//on click listens for future elements 
//when we are adding new elements to the page but we need to be able to have events fire on them still
//we need to call the event on the parent element, hence on elements that exist when the code is run for the first time 
//before it was $("li").on("click", function(){})
//this essentially says when an "li is clicked inside of a ul" then fire this function 
$("ul").on("click", "li", function(){
	//toggleClass will put class on if off and visa versa 
	$(this).toggleClass("strike");
});


// Click on X to delete entire todo (the li of the specific X)
// we want to fadeout when we "delete a todo" (600 millaseconds)
// BUT fadeout does not remove the actual element
//we must still use remove but we want to element to be removed after the fadeout is complete
//before it was $("span").on("click", function(){})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){ //this refers to span that was clicked
		$(this).remove(); //this refers to li because it is the parent
	});
	event.stopPropagation();
})
//The stopPropagation() method of the Event interface prevents further 
//propagation of the current event in the capturing and bubbling phases.

// Add new Todo when Enter key is pressed in input bar
$("input[type='text']").keypress(function(e){
	// if the enter button is clicked, take text in input box and add new li
	if(e.which == 13){
		//extract the value in the input box
		var todoText = $(this).val();
		//create a new li adn add to ul
		//argument in append can be HTMl
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"); 
		$("input[type='text']").val("");
	}

});

//hide the whole body by toggling a class with the plus button 
$("h1").on("click", "i", function(){
	$("input").fadeToggle("slow");
})
