document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    }
});

function updateTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
    currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

updateTime();
setInterval(updateTime, 1000);
