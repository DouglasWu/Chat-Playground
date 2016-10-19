/**
If you want a line break, just type \n
**/

function sendMessage() {
    if (beLeave) $("#messageInput").blur(), setTimeout(function() {
        report()
    }, 300);
    else {
        var e = $("#messageInput").val().substring(0, 500).replace(/\\n/g, "\n");
        dispatcher && "connected" == dispatcher.state && !is_leave && 0 != e.length && (dispatcher.trigger("new_message", {
            message: e,
            msg_id: msg_id
        }), $("#messageInput").val(""), $("#messageInput").focus(), last_send_typing = 0, displayMyMessage(e, msg_id), msg_id++, msg_count++)
    }
}