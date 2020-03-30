//new RegExp(/^[A-Z]/)
function findMessage(data) {
    return data.replace(/[^A-Z]/g, '');
}
findMessage("How are you? Eh, ok. Low or Lower? Ohhh."); //"HELLO"
