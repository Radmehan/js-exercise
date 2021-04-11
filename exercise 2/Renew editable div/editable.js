console.log("this is a editable div");


/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

//create element
let divElem = document.createElement('div');

//add textnode created element
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode("This is my element. click to edit it");
}
else {
    text = document.createTextNode(val);
}
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border:2px solid black; width:250px; height:150px; margin:34px, padding:23px');
divElem.appendChild(text);
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

//insert the element before element with id
container.insertBefore(divElem, first);


console.log(divElem, container, first);

// add eventlistener to the div elem

divElem.addEventListener('click', () => {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = divElem.innerHTML
        divElem.innerHTML = `<textarea class="textarea form-control" style="margin:3px 3px" placeholder="Leave a comment here" id="textarea">${html}</textarea>`;
    }

    //listen for theblur event on text area 
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',elem.innerHTML);
    })
});


