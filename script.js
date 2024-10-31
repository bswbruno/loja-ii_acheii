// Array de produtos de exemplo com links de afiliados
const products = [
    { id: 1, name: 'Prateleira 4 andares', img: 'img/organizador_4_andares.png', link: 'https://s.shopee.com.br/BCEwhUqPb', code: '0001' },
    { id: 3, name: 'Produto 3', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto3', code: 'SKU002' },
    { id: 4, name: 'Produto 4', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto4', code: 'SKU003' },
    { id: 5, name: 'Produto 5', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto5', code: 'SKU004' },
    { id: 6, name: 'Produto 6', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto6', code: 'SKU005' },
    { id: 7, name: 'Produto 7', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto7', code: 'SKU006' },
    { id: 8, name: 'Produto 8', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto8', code: 'SKU007' },
    { id: 9, name: 'Produto 9', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto9', code: 'SKU008' },
    { id: 10, name: 'Produto 10', img: 'https://via.placeholder.com/150', link: 'https://exemplo.com/produto10', code: 'SKU009' },
    // ... adicione mais produtos conforme necessário
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
            <p>Código: ${product.code}</p> <!-- Exibindo o código do produto -->
            <a href="${product.link}" target="_blank">IR À LOJA</a>
        `;
        productList.appendChild(productCard);
    });
}

// Inicializa a exibição dos produtos
displayProducts();
