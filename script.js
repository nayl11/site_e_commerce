// Données des produits
const products = [
    {
        id: 1,
        name: "Huile d'Olive Extra Vierge",
        description: "Huile d'olive biologique pressée à froid",
        price: 15.90,
        image: "data:image/svg+xml;utf8,<svg xmlns='[w3.org](http://www.w3.org/2000/svg)' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23f1c40f'/></svg>"
    },
    {
        id: 2,
        name: "Huile de Coco Bio",
        description: "Huile de coco vierge extraite à froid",
        price: 12.50,
        image: "data:image/svg+xml;utf8,<svg xmlns='[w3.org](http://www.w3.org/2000/svg)' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23f5b041'/></svg>"
    },
    {
        id: 3,
        name: "Huile de Ricin",
        description: "Idéale pour les soins capillaires et cutanés",
        price: 9.90,
        image: "data:image/svg+xml;utf8,<svg xmlns='[w3.org](http://www.w3.org/2000/svg)' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232ecc71'/></svg>"
    },
    {
        id: 4,
        name: "Huile d'Argan",
        description: "Huile marocaine précieuse aux multiples bienfaits",
        price: 24.90,
        image: "data:image/svg+xml;utf8,<svg xmlns='[w3.org](http://www.w3.org/2000/svg)' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23e74c3c'/></svg>"
    }
];

// Panier d'achat
let cart = [];
let cartCount = 0;

// Chargement des produits
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
});

function loadProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; border-radius:5px;">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price.toFixed(2)}€</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        container.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount;
}

// Navigation fluide
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
