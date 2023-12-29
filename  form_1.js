function functionName() {
    var nombre = document.getElementById("name").value;
    document.getElementById("welcome-message").innerHTML = `hi, ${nombre} Your message has been sent`;
}
function maxCharacters() {
    var max = 20;
    var message = document.getElementById("subject").value;
    var long = message.length;
    if (long >= max) {
        document.getElementById("counter").innerHTML = `Maximum limit exceeded:${long}/${max}`;
    }
}