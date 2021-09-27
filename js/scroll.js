// SELECTORS

const aboutBtns = document.querySelectorAll(".nav__link--about");
const aboutBtnArray = [...aboutBtns];

const portfolioBtns = document.querySelectorAll(".nav__link--portfolio");
const portfolioBtnArray = [...portfolioBtns];

const contactBtns = document.querySelectorAll(".nav__link--contact");
const contactBtnArray = [...contactBtns];

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
aboutBtnArray.forEach(btn => {
	btn.addEventListener("click", aboutHandler);
});

portfolioBtnArray.forEach(btn => {
	btn.addEventListener("click", portfolioHandler);
});

contactBtnArray.forEach(btn => {
	btn.addEventListener("click", contactHandler);
});

homeBtn.addEventListener("click", homeHandler);

//////////////////////////////////////

// FLIP CARD LOGIC

const flipCardBtns = document.querySelectorAll(".flip-card");
const flipCardBtnArray = [...flipCardBtns];
console.log(flipCardBtnArray);

const flipCardHandler = e => {
	const parent = e.currentTarget.parentElement;
	// Seclect and flip front side of card
	parent.querySelector(".card__side--front").classList.toggle("flip-front");

	// Select and flip back side of card
	parent.querySelector(".card__side--back").classList.toggle("flip-back");
};

flipCardBtnArray.forEach(btn => btn.addEventListener("click", flipCardHandler));
