document.addEventListener('DOMContentLoaded', () => {
    const changingText = document.getElementById('changing-text');
    const texts = [
        "Software Developer",
        "UI/UX Designer"
    ];
    let index = 0;
    let textIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[index];
        if (isDeleting) {
            changingText.textContent = currentText.substring(0, textIndex);
            textIndex--;
            if (textIndex < 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, 500); // Short pause before starting to type the next text
                return;
            }
        } else {
            textIndex++;
            changingText.textContent = currentText.substring(0, textIndex);
            if (textIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Wait for 2 seconds before starting to delete
                return;
            }
        }

        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
