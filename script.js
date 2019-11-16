// Initial DOM Variables

const icons = document.getElementsByClassName('skills__icon');
const projectsContainer = document.getElementById('projects-container');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const main = document.getElementById('main');
const loading = document.getElementById('loading');
const loadingCount = document.getElementById('loadingCount');
const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const menuClose = document.getElementById('menu-close');
const menuItems = document.getElementsByClassName('header__menu__item');

const topArrow = document.getElementById('top');

// This is event that reacts on refresh and its used to fix bug when refreshing to scroll to top
window.onbeforeunload = () => {
	document.documentElement.style.scrollBehavior = 'auto';
	document.documentElement.scrollTop = 0;
};

// Show menu (phone)
function menuShowHandler() {
	toggle.style.display = 'none';
	menuClose.style.display = 'block';
	menu.style.display = 'block';
}

function menuCloseHandler() {
	toggle.style.display = 'block';
	menuClose.style.display = 'none';
	menu.style.display = 'none';
}
// Function that increases numbers from 0 up to 100% (loading counter)
function loadingCounter() {
	let counter = 0;
	const interval = setInterval(() => {
		loadingCount.innerHTML = counter + '%';
		if (counter === 100) clearInterval(interval);
		counter++;
	}, 18);
}

// Function showing TO TOP icon button after scrolling a bit
function topArrowHandler() {
	menuHighlighter();
	if (window.scrollY > 200) {
		topArrow.style.display = 'block';
	} else {
		topArrow.style.display = 'none';
	}
}

// Ensure To Highlight menu using CSS
function menuHighlight(currentItem) {
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].className = 'header__menu__item';
	}
	currentItem.className = 'header__menu__item header__menu__item__active';
}

// Using menuHighlight with scrollY position behaviour
function menuHighlighter() {
	if (window.scrollY > 400) {
		menuHighlight(menuItems[1]);
	}
	if (window.scrollY > 1200) {
		menuHighlight(menuItems[2]);
	}
	if (window.scrollY > 2100) {
		menuHighlight(menuItems[3]);
	}
	if (window.scrollY > 4600) {
		menuHighlight(menuItems[4]);
	}
	if (window.scrollY < 400) {
		menuHighlight(menuItems[0]);
	}
}

// Reset all to defaults, this is needed so that loading screen can work properly
function changeDefaults() {
	document.body.style.overflowY = 'hidden';
	header.style.opacity = '0';
	main.style.opacity = '0';
	footer.style.opacity = '0';
}

// Its to animate some element when user has scrolled near them
function scrollLocationAnimateHandler() {
	if (window.scrollY > 600) {
		for (let i = 0; i < icons.length; i++) {
			icons[i].style.animation = 'brush 1s';
		}
	}
	if (window.scrollY > 1300) {
		projectsContainer.style.animation = 'projects cubic-bezier(.51,.21,.69,1.5) 1s forwards';
	}
}



changeDefaults();
loadingCounter();

toggle.onclick = () => {
	menuShowHandler();
}
menuClose.onclick = () => {
	menuCloseHandler();
}
// Event that reacts whenever a user has scrolled
document.onscroll = () => {
	menuHighlighter();
	topArrowHandler();
	if (window.innerWidth > 1000) scrollLocationAnimateHandler();
};
