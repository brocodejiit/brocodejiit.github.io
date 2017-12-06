text = document.getElementById('textread');

xhr = new XMLHttpRequest();
xhr.open("GET", "https://brocodejiit.github.io/assets/updates.txt");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4)               //the readyState if the status of the request
        text.innerHTML = xhr.responseText; // (http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)
                                           // 4 is a completed request
}
