text = document.getElementById('textread');

xhr = new XMLHttpRequest();
xhr.open("GET", "https://brocodejiit.github.io/assets/updates.txt");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4)
        text.innerHTML = xhr.responseText;
}
