const nav = document.querySelector('nav');
const main = document.querySelector('main');
const productList = document.getElementById('product-list');
const productsLink = document.getElementById('products-link');

const products = [
  {
    id: 1,
    name: "Perfume Floral",
    description: "Um perfume fresco e floral",
    price: 50.00,
    image: "perfume-floral.jpg"
  },
  {
    id: 2,
    name: "Perfume Oriental",
    description: "Um perfume rico e oriental",
    price: 70.00,
    image: "perfume-oriental.jpg"
  },
  {
    id: 3,
    name: "Perfume Fruity",
    description: "Um perfume doce e frutado",
    price: 40.00,
    image: "perfume-fruity.jpg"
  }
  // ...
];

productsLink.addEventListener('click', (e) => {
  e.preventDefault();
  renderProducts();
});

function renderProducts() {
  productList.innerHTML = '';
  products.forEach((product) => {
    const productHTML = `
      <li>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>R$ ${product.price.toFixed(2)}</p>
      </li>
    `;
    productList.innerHTML += productHTML;
  });
}

window.addEventListener('load', () => {
  const productsSection = document.getElementById('products');
  window.location.hash = '#products';
  productsSection.scrollIntoView();
  renderProducts();
});