const productList = document.getElementById('product-list');

function renderProducts() {
 
  products.forEach((product) => {
    const productHTML = document.createElement('li');
    productHTML.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>R$ ${product.price.toFixed(2)}</p>
    `;

    productList.appendChild(productHTML);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);