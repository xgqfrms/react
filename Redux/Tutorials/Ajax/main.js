// JSON and AJAX Tutorial: http://codepen.io/anon/pen/RGOqQY

var box = document.getElementById('box'),
    btn = document.getElementById('btn'),
    mask = document.getElementById('mask'),
    dataCounter =1,
    urlPath,
    data,
    error,
    xhr = new XMLHttpRequest();

btn.addEventListener("click", () => {
    urlPath = "https://learnwebcode.github.io/json-example/animals-";
    xhr.open("GET",`${urlPath}${dataCounter}.json`,true);
    xhr.onreadystatechange = () => {
        /*data = JSON.parse(xhr.responseText);
        console.log("data");
        renderHTML(data);*/
        console.log(`Ajax connect info:\nxhr.readyState = ${xhr.readyState}\nxhr.status = ${xhr.status}`);
        if (xhr.status === 200 && xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            renderHTML(data);
        } else {
            xhr.error = "???";
            /*error += `xhr.readyState = ${xhr.readyState}, xhr.status = ${xhr.status}`;
            console.log(`Ajax connect error info:\n\nxhr.error = ${xhr.error}, ${error}`);*/
        }
    };
    xhr.send();

    dataCounter++;
    console.log(dataCounter);
    if (dataCounter > 3){
       dataCounter = 1;
       btn.classList.add("hide-btn");
       mask.classList.add("open");
       // mask.style.display = "block";
    };

    xhr.onerror = () => {
        console.log(`connect server error!`);
    };
});

var renderHTML = (data) => {
    var htmlString = "";
    for (var i = 0; i < data.length; i++) {
        htmlString += `<p><i>${data[i].name}</i> is a ${data[i].species} likes to eat `;
        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j === 0) {
                htmlString += `<mark>${data[i].foods.likes[j]}</mark>`;
            } else {
                htmlString += ` and <mark>${data[i].foods.likes[j]}</mark>`;
            }
        }
        htmlString += " and dislikes ";
        for (let k = 0; k < data[i].foods.dislikes.length; k++) {
            if (k === 0) {
                htmlString += `<strong>${data[i].foods.dislikes[k]}</strong>`;
            } else {
                htmlString += ` and <strong>${data[i].foods.dislikes[k]}</strong>`;
            }
        }
        htmlString += "</p>";
    }
    box.insertAdjacentHTML("beforeEnd", htmlString);
}

