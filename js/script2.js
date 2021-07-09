let button = document.getElementById('Darkmode');
button.addEventListener('click', activedarkmode);

function activedarkmode(){
	console.log('onclick')
	let body = document.getElementById('page-top');
	let formation = document.getElementById('portfolio');
	let fond = document.getElementsByClassName('portfolio-caption');
	body.classList.toggle('bg-dark');
	formation.classList.toggle('bg-dark');
	body.classList.toggle('text-white');
	for(let i=0;i<fond.length;i++){
		fond[i].classList.toggle('bg-dark');
		fond[i].classList.toggle('text-white');
	}

	
 if (body.classList.contains('bg-dark')) {
 	button.innerHTML = "Lightmode";
 } else {
 	button.innerHTML = "Darkmode";
 }


}