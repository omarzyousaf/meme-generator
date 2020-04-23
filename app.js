const form = document.querySelector('#memes');
const results = document.querySelector('.results');

const imageURL = document.querySelector('#imageURL');
const textOnTop = document.querySelector('#textOnTop');
const textOnBottom = document.querySelector('#textOnBottom');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (imageURL.value === '') {
		alert('Please submit a link before adding meme!');
	} else {
		let imgMeme = document.createElement('img');
		imgMeme.src = imageURL.value;
		imgMeme.classList.add('image');

		let deleteMeme = document.createElement('span');
		deleteMeme.innerHTML = '<i class="fas fa-user-minus"></i>';
		deleteMeme.classList.add('overlay');

		let topText = document.createElement('div');
		topText.innerText = textOnTop.value;
		topText.classList.add('top');

		let bottomText = document.createElement('div');
		bottomText.innerText = textOnBottom.value;
		bottomText.classList.add('bottom');

		let meme = document.createElement('div');
		results.append(meme);
		meme.classList.add('meme');

		meme.append(imgMeme);
		meme.append(topText);
		meme.append(bottomText);
		meme.append(deleteMeme);

		form.reset();
	}
});

results.addEventListener('click', function(e) {
	console.log(e.target.tagName);
	if (e.target.tagName === 'I') {
		let memeForI = e.target.parentElement.parentElement;
		memeForI.remove();
	} else if (e.target.tagName === 'IMG') {
		let memeForImg = e.target.parentElement;
		memeForImg.remove();
	} else if (e.target.tagName === 'DIV') {
		let memeForText = e.target.parentElement;
		memeForText.remove();
	}
});
