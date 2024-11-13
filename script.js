const glass = document.querySelector('.glass');

document.addEventListener('mousemove', (e) => {
  const xRotation = (window.innerHeight / 2 - e.clientY) / 20;
  const yRotation = (e.clientX - window.innerWidth / 2) / 20;
  glass.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

document.addEventListener('mouseleave', () => {
  glass.style.transform = `rotateX(0deg) rotateY(0deg)`;
});