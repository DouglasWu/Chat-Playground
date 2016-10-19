/**
Check every 0.5 seconds if the stranger leaves you,
if so, leave the conversation and start a new chat
1 second later.
**/

setInterval(function(){
	if(beLeave) {
		leave();
		setTimeout(clickStartChat, 1000);
	}
},500);