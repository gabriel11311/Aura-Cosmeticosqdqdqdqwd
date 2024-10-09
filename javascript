const nav = document.querySelector('nav');
const main = document.querySelector('main');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    main.innerHTML = `<h1>${href}</h1>`;
  }
});
