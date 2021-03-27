var count = document.getElementsByTagName("p");
var compteur = document.getElementById("count");
compteur.textContent = count.length;

for(var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener('click', function() {
        this.parentNode.remove()

        compteur.textContent = count.length;
        if(document.getElementsByTagName("p").length < 2) {
            document.getElementById("pluriel").remove()}
    })
}

document.getElementById("btnadd").addEventListener("click", function(){

    var newRow = document.createElement("div")
    newRow.className = "row";
    document.body.appendChild(newRow);

    var image = document.createElement("img");
    image.className = "avatar";
    image.src = "avatar-1.jpg";
    newRow.appendChild(image);

    var nameMessageDiv = document.createElement("div");
    newRow.appendChild(nameMessageDiv);

    var h2 = document.createElement('h2');
    h2.textContent = "Ayrton Salvador";
    nameMessageDiv.appendChild(h2);

    var content = document.createElement('p');
    content.textContent = document.getElementById('newmsg').value;
    nameMessageDiv.appendChild(content);

    var trash = document.createElement('img');
    trash.src = "trash.png";
    trash.className = "trash";
    newRow.appendChild(trash);

    document.getElementById('newmsg').value = "";

    var count = document.getElementsByTagName('p');
    var compteur = document.getElementById('count');
    compteur.textContent = count.length;

    for(var i = 0; i < document.getElementsByClassName("trash").length; i++) {
        document.getElementsByClassName("trash")[i].addEventListener('click', function() {
            this.parentNode.remove()

            compteur.textContent = count.length;
            if(document.getElementsByTagName("p").length < 2) {
                document.getElementById("pluriel").remove()}
        })
    }
})