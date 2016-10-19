/**
Press esc key to leave the conversation directly.
Press enter key to start a new chat.
**/

var changePerson_key = 27; // esc
var startChat_key = 13; // enter

function changePerson() {
    leave();
    /*beLeave ? leave() : isbluring && window.mobilecheck() ? setTimeout(function() {
        popupLeaveDialog()
    }, 500) : popupLeaveDialog()*/
}
$(document).keydown(function(e){
	var key = parseInt(e.which);
	if(key == changePerson_key){
		changePerson();
	}
	if(key == startChat_key) {
		clickStartChat();
	}
});
