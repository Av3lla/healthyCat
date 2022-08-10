let myImage = document.querySelector('img');

myImage.onclick = function()	{
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/다운로드.jfif')	{
		myImage.setAttribute('src', 'images/다운로드2.jpg');
	}	else	{
		myImage.setAttribute('src', 'images/다운로드.jfif');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()	{
	let myName = prompt('Please enter your name.');
	if (!myName || myName === null)	{
		setUserName();
	}	else	{
		localStorage.setItem('name', myName);
		myHeading.textContent = myName + '\'s favorite animal is cat.';
	}
	
}

if (!localStorage.getItem('name'))	{
	setUserName();
}	else	{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + '\'s favorite animal was cat.';
}

myButton.onclick = function()	{
	setUserName();
}