// Initial DOM Variables

const icons = document.getElementsByClassName('skills__icon');
const projectsContainer = document.getElementById('projects-container');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const main = document.getElementById('main');
const loading = document.getElementById('loading');

// This is event that reacts on refresh and its used to fix bug when refreshing to scroll to top
window.onbeforeunload = () => {
	document.documentElement.style.scrollBehavior = "auto";
	document.documentElement.scrollTop = 0;


};

function changeDefaults() {
	// This is needed so that loading screen can work properly
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

// Event that reacts whenever a user has scrolled
document.onscroll = () => {
	if(window.innerWidth > 1000)
	scrollLocationAnimateHandler();
};
