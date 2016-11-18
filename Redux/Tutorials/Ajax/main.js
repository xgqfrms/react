// 

var box = document.getElementById('box'),
    btn = document.getElementById('btn'),
    xhr = new XMLHttpRequest();

btn.addEventListener("click", function(){
    let dataCounter, urlPath, data;
    dataCounter = 1;
    url = "https://learnwebcode.github.io/json-example/animals-";
    xhr.open("GET",`${urlPath}${dataCounter}.json`);
    xhr.onreadystatechange = () => {
        if (this.status === 200 && this.readyState === 4) {
            //
        } else {
            alert(`Ajax connect error info: ${xhr.error}`);
        }
    }
    xhr.send();
});


