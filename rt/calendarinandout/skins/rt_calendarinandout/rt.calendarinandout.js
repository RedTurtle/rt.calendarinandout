/*
 * @author: alert
 * 
 * @summary: 
 * Calendar in and out widget javascript
 * 
 */

function rtciao_remove_value(field, value) {
	/*
	 * Removes a value from the target inputs
	 */
	target = jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]");
	target.parent().remove();
	rtciao_sync_textarea(field);
}

function rtciao_sync_textarea(field) {
	/*
     * Syncs the textarea with the newly available values
     */
	inputs = jq("div#"+field+"_calendar_target div#values_target input");
    var new_values=[];
	for (var i=0; i<inputs.length; i++) {
		new_values.push(inputs[i].value);
    }
	textarea = jq("#"+field);
	textarea.attr({'value' : new_values.join("\n")});
}

function rtciao_sync_inputs(field) {
    /*
     * Syncs the inputs with the saved values
     */
	textarea = jq("#"+field);
    values = textarea.attr('value').split("\n").sort();
	for (i=0;i<values.length;i++){
        value = values[i].strip();
        if (value) {rtciao_insert_inputs(field, value);}
    }
}

function rtciao_insert_new_date(field) {
    /*
     * Inserts a new date into the inputs and then syncs the textarea
     */
	target = jq("div#"+field+"_calendar_target ");
	value = target.children("input#new_date").attr('value');
	rtciao_insert_inputs(field, value);
	rtciao_sync_textarea(field);
}

function rtciao_insert_inputs(field, value) {
    /*
     * Inserts an input with the given value
     */
	// we want the value to be not null
	if (!value.strip()) {
		return;
	}
	// we want it to be non existent
	if (jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]").length >0 ) {
		return;
	};
	// we have a slot on the page where to add those new input
	target = jq("div#"+field+"_calendar_target div#values_target");
	target.append('<p></p>');
	new_p = target.children(':last') ;
	new_p.append('<input disabled="disabled" type="text" value="'+value+'">');
    // We also add a link to remove the added date
	new_img = '<img id="'+value+'" src="delete_icon.gif" alt="[-]" style="cursor:pointer">';
	new_p.append(new_img);
	new_p.children('img').click(function () {rtciao_remove_value(field, value)})
}

function rtciao_init(field) {
	/*
	 * Initializes the app
	 */
	target = jq("div#"+field+"_calendar_target");
	target.css({'display' : 'block'});
	new_date = target.children("input#new_date");
    textarea = jq("#"+field); 
	
	values = textarea.attr('value').split('\n');
	for (i=0;i<values.length;i++){
		value = values[i].strip();
		if (value) {rtciao_insert_inputs(field, value);}
	}
	add_button = target = jq("div#"+field+"_calendar_target img#insert_new_date");
	add_button.click(function (){rtciao_insert_new_date(field)});
    textarea.hide();
    new_date.datepicker({showOn: 'button', 
                         buttonImage: 'popup_calendar.gif', 
                         buttonImageOnly: true,
                         dateFormat: 'yy-mm-dd'});
}

