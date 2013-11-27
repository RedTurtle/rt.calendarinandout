/**
 * @author: alert
 * 
 * @summary: 
 * Calendar in and out (CIAO) widget javascript
 * 
 */

(function($) {

var allowDuplicate = false;

/**
 * Syncs the textarea with the newly available values
 */
function rtciao_sync_textarea(field) {
    var inputs = $("div#"+field+"_calendar_target div#values_target input");
    var new_values=[];
    for (var i=0; i<inputs.length; i++) {
        new_values.push(inputs[i].value);
    }
    var textarea = $("#"+field);
    textarea.attr({'value' : new_values.join("\n")});
}

/**
 * Removes a value from the target inputs
 */
function rtciao_remove_value(field, value) {
    var target = $("div#"+field+"_calendar_target div#values_target input[value="+value+"]");
    target.parent().remove();
    rtciao_sync_textarea(field);
}

/**
 * Inserts an input with the given value
 */
function rtciao_insert_inputs(field, value) {
    // we want the value to be not null
    if (!$.trim(value)) {
        return;
    }
    
    if (!allowDuplicate) {
        // we want it to be non existent
        var inputs = $("div#"+field+"_calendar_target div#values_target input[value="+value+"]"); 
        if (inputs.length >0 ) {
            inputs.animate({color:'red'});
            inputs.animate({color:'black'});
            return;
        }
    }

    // we have a slot on the page where to add those new input
    var target = $("div#"+field+"_calendar_target div#values_target");
    target.append('<p></p>');
    var new_p = target.children(':last') ;
    new_p.append('<input disabled="disabled" type="text" size="10" maxlength="10" value="'+value+'">');
    // We also add a link to remove the added date
    var new_img = '<img id="'+value+'" src="' + portal_url + '/++resource++rt.calendarinandout.images/delete_icon.gif" alt="[-]" style="cursor:pointer" title="[-]">';
    new_p.append(new_img);
    new_p.children('img').click(function () {
        rtciao_remove_value(field, value);
    });
}

/**
 * Syncs the inputs with the saved values
 */
function rtciao_sync_inputs(field) {
    var textarea = $("#"+field);
    var values = textarea.attr('value').split("\n").sort();
    for (var i=0;i<values.length;i++){
        var value = $.trim(values[i]);
        if (value) {rtciao_insert_inputs(field, value);}
    }
}

/**
 * Inserts a new date into the inputs and then syncs the textarea
 * @param clearAfter: clear the selection field after adding
 */
function rtciao_insert_new_date(field, clearAfter) {
    var target = $("div#"+field+"_calendar_target ");
    var value = target.children("input.new_date").attr('value');
    rtciao_insert_inputs(field, value);
    if (clearAfter) {
        var new_date = target.children("input.new_date");
        new_date.val(null);
    }
    rtciao_sync_textarea(field);
}

function insert_date_keydown(event) {
    var keyCode, value;
    keyCode = ('which' in event) ? event.which : event.keyCode;
    value = $(this).attr('value');
    if (keyCode === 13) {
        event.preventDefault();
        if (value.length === 10) {
            rtciao_insert_inputs(event.data.field,value);
        }
    }
}

/**
 * Initializes the app
 */
function rtciao_init(field, auto_add, allow_duplicate) {
    allowDuplicate = allow_duplicate;
    
    var target = $("div#"+field+"_calendar_target");
    target.css({'display' : 'block'});
    var new_date = target.children("input.new_date");
    // new_date.attr('disabled', 'disabled');
    var textarea = $("#"+field);     
    var values = textarea.attr('value').split('\n');
    for (var i=0;i<values.length;i++) {
        value = $.trim(values[i]);
        if (value) {
            rtciao_insert_inputs(field, value);
        }
    }
    $("div#"+field+"_calendar_target img#insert_new_date").click(function (){
        rtciao_insert_new_date(field);
    });
    $(new_date).bind('keydown', {field: field}, insert_date_keydown);
    textarea.hide();
    new_date.datepicker({showOn: 'button', 
                         buttonImage: portal_url + '/++resource++rt.calendarinandout.images/popup_calendar.gif', 
                         buttonImageOnly: true,
                         dateFormat: 'yy-mm-dd',
                         onSelect: auto_add && function() {
                             rtciao_insert_new_date(field, true);
                         } || null
    });
}

$(document).bind('rtciao:init', function(event, field, autoAdd, allowDuplicate) {
    rtciao_init(field, autoAdd, allowDuplicate);
});

})(jQuery);
