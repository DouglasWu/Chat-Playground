/**
Automatically respond every message with the same string.
**/

var repeat_word = "是喔"

var lastId, curId, $strangerText, copyText;
setInterval(function(){
    curId = $('.stranger.text').last().attr('mid');
    if(curId!=lastId) {
        $('#messageInput').val(repeat_word);
        send_typing();
        setTimeout(sendMessage, Math.random()*1000+1000);
    }
    lastId = curId;
},100);