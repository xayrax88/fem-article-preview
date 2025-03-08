const shareBtn = document.getElementById('social-btn');
const socialLinks = document.querySelector('.social-links');


shareBtn.addEventListener('click', () => {
    // socialLinks.style.display = (socialLinks.style.display === "flex") ? "none" : "flex";
    socialLinks.classList.toggle('active');
    // shareBtn.classList.toggle('share-active')
    if (shareBtn.classList.contains('share-active')) {
        shareBtn.classList.toggle.remove('share-active', 'share-active-img');
    } else {
        shareBtn.classList.add('share-active', 'share-active-img');
    }
})