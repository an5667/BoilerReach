// Smooth Scrolling Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Menu Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Adjust the logic to highlight current section in view
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Modal Pop-Up Example
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>More Information</h2>
        <p>This is where additional information can be displayed.</p>
    </div>
`;
document.body.appendChild(modal);

// Function to open modal with dynamic content
function openModal(content) {
    modal.querySelector('.modal-content p').innerText = content;
    modal.style.display = "block";
}

// Close Modal
modal.querySelector('.close-button').addEventListener('click', () => {
    modal.style.display = "none";
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Event Listeners for Links to Open Modal with Dynamic Content
document.querySelectorAll('.news-link, .resources-link, .mappy-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentMap = {
            'news-link': "Explore Purdue’s Latest News - Stay in the loop with real-time updates!",
            'resources-link': "Purdue’s Student Resources - From academic support to mental health services, you’re just a click away!",
            'mappy-link': "Say hi to Mappy! Navigate Purdue's vibrant campus with our event map."
        };
        openModal(contentMap[link.classList[0]]);
    });
});

// Dynamic Content Loading (Example)
const dynamicContent = {
    news: "Latest News: Purdue has announced new policies for student support.",
    resources: "Resources Update: New counseling services are now available for students.",
    mappy: "Mappy Update: Check out the new features for event navigation."
};

function loadContent(section) {
    const contentArea = document.querySelector('.dynamic-content');
    contentArea.innerText = dynamicContent[section] || "Content not available.";
}

// Event Listeners for Navigation Links to Load Dynamic Content
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('href').substring(1); // Get section name without '#'
        loadContent(section);
    });
});
