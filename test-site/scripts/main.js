let myImg = document.querySelector('img');
myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/pic-bulboff.gif') {
        myImg.setAttribute('src', 'images/pic-bulbon.gif');
    } else {
        myImg.setAttribute('src', 'images/pic-bulboff.gif');
    }
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');

if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

document.querySelector('button').onclick = setUserName;