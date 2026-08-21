// Scroll To Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show Top Button
window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
};

// Skip Intro
function skipIntro() {
    document
        .getElementById('introOverlay')
        .classList.add('hidden');

    const audio = document.getElementById('welcomeSound');
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio blocked'));
    }
}
