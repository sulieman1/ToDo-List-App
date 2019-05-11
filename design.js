var a = document.querySelector('#a');
var h1 = document.createElement('h1');
var item = document.querySelector('input[type="text"]');
function add(event){
    if(event.key =="Enter"){
        var text = document.createElement('h3');
        var div = document.createElement('div');
        text.textContent = item.value;
        div.appendChild(text);
        a.appendChild(div);
        item.value = "";
    }
}
function remove(e){
    e.target.remove();
}
item.addEventListener('keydown',add)
a.addEventListener('click',remove);
