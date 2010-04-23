function remove_value(field, value) {
	target = jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]");
	target.parent().remove();
	textarea = jq("#"+field);
	values = textarea.attr('value').split('\n');
	while (values.indexOf(value)>=0) { values.pop(value) };
	textarea.attr('value', values.join("\n"))
}

function insert_new_date(field) {
	target = jq("div#"+field+"_calendar_target ");
	value = target.children("input#new_date").attr('value');
	textarea = jq("#"+field);
	textarea.attr({'value':textarea.attr('value')+'\n'+value});
	insert_inputs(field, value);
}

function insert_inputs(field, value) {
	if (!value.strip()) {
		return;
	}
	if (jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]")) {
		return;
	};
	target = jq("div#"+field+"_calendar_target div#values_target");
	target.append('<p></p>');
	new_p = target.children(':last') ;
	new_p.append('<input disabled="disabled" type="text" value="'+value+'">');
	new_img = '<img id="'+value+'" src="search_icon.gif">';
	new_p.append(new_img);
	new_p.children('img').click(function () {remove_value(field, value)})
}

function calendarinandoutinit(field) {
	target = jq("div#"+field+"_calendar_target");
	target.css({'display' : 'block'});
	new_date = target.children("input#new_date");
	new_date.datepicker({showOn: 'button', 
						 buttonImage: 'popup_calendar.gif', 
						 buttonImageOnly: true,
						 dateFormat: 'yy-mm-dd'});
	textarea = jq("#"+field); 
	textarea.css({'display' : 'none'});
	values = textarea.attr('value').split('\n');
	for (i=0;i<values.length;i++){
		value = values[i].strip();
		if (value) {insert_inputs(field, value);}
	}
	add_button = target.children('img#insert_new_date');
	add_button.click(function (){insert_new_date(field)});
}

