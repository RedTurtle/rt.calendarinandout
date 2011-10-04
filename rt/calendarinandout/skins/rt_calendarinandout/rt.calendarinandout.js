/**
 * @author: alert
 * 
 * @summary: 
 * Calendar in and out (CIAO) widget javascript
 * 
 */

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

/**
 * Syncs the textarea with the newly available values
 */
function rtciao_sync_textarea(field) {
    var inputs = jq("div#"+field+"_calendar_target div#values_target input");
    var new_values=[];
    for (var i=0; i<inputs.length; i++) {
        new_values.push(inputs[i].value);
    }
    var textarea = jq("#"+field);
    textarea.attr({'value' : new_values.join("\n")});
}

/**
 * Removes a value from the target inputs
 */
function rtciao_remove_value(field, value) {
    var target = jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]");
    target.parent().remove();
    rtciao_sync_textarea(field);
}

/**
 * Inserts an input with the given value
 */
function rtciao_insert_inputs(field, value) {
    // we want the value to be not null
    if (!value.trim()) {
        return;
    }
    // we want it to be non existent
    var inputs = jq("div#"+field+"_calendar_target div#values_target input[value="+value+"]"); 
    if (inputs.length >0 ) {
        inputs.animate({color:'red'});
        inputs.animate({color:'black'});
        return;
    }
    // we have a slot on the page where to add those new input
    var target = jq("div#"+field+"_calendar_target div#values_target");
    target.append('<p></p>');
    var new_p = target.children(':last') ;
    new_p.append('<input disabled="disabled" type="text" value="'+value+'">');
    // We also add a link to remove the added date
    var new_img = '<img id="'+value+'" src="delete_icon.gif" alt="[-]" style="cursor:pointer" title="[-]">';
    new_p.append(new_img);
    new_p.children('img').click(function () {
		rtciao_remove_value(field, value);
	});
}

/**
 * Syncs the inputs with the saved values
 */
function rtciao_sync_inputs(field) {
    var textarea = jq("#"+field);
    var values = textarea.attr('value').split("\n").sort();
    for (var i=0;i<values.length;i++){
        var value = values[i].trim();
        if (value) {rtciao_insert_inputs(field, value);}
    }
}

/**
 * Inserts a new date into the inputs and then syncs the textarea
 */
function rtciao_insert_new_date(field) {
    var target = jq("div#"+field+"_calendar_target ");
    var value = target.children("input.new_date").attr('value');
    rtciao_insert_inputs(field, value);
    rtciao_sync_textarea(field);
}

/**
 * Initializes the app
 */
function rtciao_init(field, auto_add) {
      var target = jq("div#"+field+"_calendar_target");
      target.css({'display' : 'block'});
      var new_date = target.children("input.new_date");
      // new_date.attr('disabled', 'disabled');
      var textarea = jq("#"+field); 	
      var values = textarea.attr('value').split('\n');
      for (var i=0;i<values.length;i++){
          value = values[i].trim();
	  if (value) {rtciao_insert_inputs(field, value);}
      }
      jq("div#"+field+"_calendar_target img#insert_new_date").click(function (){
          rtciao_insert_new_date(field);
      });
    textarea.hide();
    new_date.datepicker({showOn: 'button', 
                         buttonImage: 'popup_calendar.gif', 
                         buttonImageOnly: true,
                         dateFormat: 'yy-mm-dd',
			 onSelect: auto_add && function() {
                           console.log(this);
    		 	    rtciao_insert_new_date(field);
			   } || null
			});
}
