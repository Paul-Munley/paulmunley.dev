const aboutBtn = document.querySelector(".nav__link--about");
const portfolioBtn = document.querySelector(".nav__link--portfolio");
const contactBtn = document.querySelector(".nav__link--contact");
const homeBtn = document.querySelector(".logo");

const subHeading = document.querySelectorAll(".heading--sub");

const aboutSection = document.querySelector(".about");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");
const body = document.body;

// NAV SCROLLING HANDLERS

const aboutHandler = e => {
	aboutSection.scrollIntoView({ behavior: "smooth" });
};

const portfolioHandler = e => {
	projectsSection.scrollIntoView({ behavior: "smooth" });
};

const contactHandler = e => {
	contactSection.scrollIntoView({ behavior: "smooth" });
};

const homeHandler = e => {
	body.scrollIntoView({ behavior: "smooth" });
};

// CHECKING FOR UNDERLINING ANIMATIONS
let observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			console.log(entry);
			if (entry.isIntersecting && entry.target.classList[0] === "about") {
				const aboutHeader = document.querySelector(".textbox__heading");
				aboutHeader.classList.add("underline");
			}
			if (entry.isIntersecting && entry.target.classList[0] === "projects") {
				const projectsHeader = document.querySelector(".projects__heading");
				projectsHeader.classList.add("underline");
			}
		});
	},
	{ threshold: 0.5 }
);
observer.observe(aboutSection);
observer.observe(projectsSection);

// EVENT LISTENERS

aboutBtn.addEventListener("click", aboutHandler);
portfolioBtn.addEventListener("click", portfolioHandler);
contactBtn.addEventListener("click", contactHandler);
homeBtn.addEventListener("click", homeHandler);
