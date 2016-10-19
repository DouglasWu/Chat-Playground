/**
Repeatedly copy the message from the stranger 
and send it back to him/her.
**/

var preId, curId, $strangerText, copyText;
setInterval(function() {
    curId = $('.stranger.text').last().attr('mid');
    if (curId != preId && curId!=undefined) {
        $strangerText = $('.stranger.text').last().clone();
        $strangerText.find('.hidden_text').remove();
        $strangerText.find('.stranger.comment').remove();
        copyText = $strangerText.text();
        $('#messageInput').val(copyText);
        send_typing();
        setTimeout(function() {
            sendMessage();
        }, Math.floor(Math.random() * 400) + 500);
    }
    preId = curId;
}, 500);