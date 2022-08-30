const headerToggleBtn = document.querySelector('.main-header__toggle-button');
const headerLinksToHide = document.querySelectorAll('.main-header__link + .main-header__link');

window.addEventListener('scroll', function() {
	const header = document.querySelector('.main-header');
	const html = document.documentElement;

	if (html.scrollTop > header.clientHeight/2) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

headerToggleBtn.addEventListener('click', function() {
	if (!headerLinksToHide[0].classList.contains('show')) {
		headerLinksToHide.forEach((link) => {
			link.style.display = "block";
			window.setTimeout(function(){
				link.classList.add('show');
			  },0);
		});
	} else {
		headerLinksToHide.forEach((link) => {
			link.classList.remove('show');
			window.setTimeout(function(){
				link.style.display = "none";
			  },750);
		});
	}
});