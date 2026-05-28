const shareBtn = document.getElementById('social-btn');
const socialLinks = document.querySelector('.social-links');


shareBtn.addEventListener('click', () => {
    socialLinks.classList.toggle('active');

    if (shareBtn.classList.contains('share-active')) {
        shareBtn.classList.remove('share-active', 'share-active-img');
    } else {
        shareBtn.classList.add('share-active', 'share-active-img');
        console.log(shareBtn.classList);

    }
})