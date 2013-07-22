function createToDo (event) {
		event.preventDefault();
		newToDo = document.createElement('li');
		$(newToDo).addClass("todoItem");
		var todoValue = $('.add textarea').val();
		$(newToDo).html(todoValue);
		$('.container .todos').append(newToDo);

}

$(document).ready( function() {
	$('.add a').click(createToDo);
});


