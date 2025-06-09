export function enableLogoTiltEffect() {
  const images = document.querySelectorAll('.partners-logos img');

  images.forEach(img => {
    img.addEventListener('mousemove', e => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      const rotateX = moveY * 10;
      const rotateY = moveX * 10;

      img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}