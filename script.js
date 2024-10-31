// Array de produtos de exemplo com links de afiliados
const products = [
    { id: 1, name: 'Produto 1', price: 19.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto1' },
    { id: 2, name: 'Produto 2', price: 29.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto2' },
    { id: 3, name: 'Produto 3', price: 39.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto3' },
    { id: 4, name: 'Produto 4', price: 49.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto4' },
    { id: 5, name: 'Produto 5', price: 59.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto5' },
    { id: 6, name: 'Produto 6', price: 69.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto6' },
    { id: 7, name: 'Produto 7', price: 79.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto7' },
    { id: 8, name: 'Produto 8', price: 89.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto8' },
    { id: 9, name: 'Produto 9', price: 99.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto9' },
    { id: 10, name: 'Produto 10', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 11, name: 'Produto 11', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 12, name: 'Produto 12', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 13, name: 'Produto 13', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 14, name: 'Produto 14', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 15, name: 'Produto 15', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 16, name: 'Produto 16', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 17, name: 'Produto 17', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 18, name: 'Produto 18', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 19, name: 'Produto 19', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 20, name: 'Produto 20', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
    { id: 21, name: 'Produto 21', price: 109.99, img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10' },
];

// Função para exibir produtos
function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>R$ ${product.price.toFixed(2)}</p>
            <a href="${product.link}" target="_blank">Comprar Agora</a>
        `;
        productList.appendChild(productCard);
    });
}

// Inicializa a exibição dos produtos
displayProducts();
