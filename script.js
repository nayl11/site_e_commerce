// Données des produits
const produits = [
    {
        id: 1,
        nom: "Huile d'Olive Extra Vierge Bio",
        prix: 12.90,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjdmN2Q2Ii8+PHJlY3QgeD0iNTAlIiB5PSIxNSUiIHdpZHRoPSI0NSUiIGhlaWdodD0iMjAlIiByeD0iMjAlIiBmaWxsPSIjZGRmM2EzIi8+PHJlY3QgeD0iMjAlIiB5PSI0NSUiIHdpZHRoPSI2MCUiIGhlaWdodD0iMTUlIiByeD0iMTAlIiBmaWxsPSIjZjRmN2E1Ii8+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzI1NTAxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk9saXZlIEJpbzwvdGV4dD48L3N2Zz4=",
        description: "Huile d'olive de première pression à froid de Crète"
    },
    {
        id: 2,
        nom: "Huile d'Argan Bio",
        prix: 18.50,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhjOTU0Ii8+PHJlY3QgeD0iMzAlIiB5PSIxMCUiIHdpZHRoPSI0MCUiIGhlaWdodD0iMjUlIiByeD0iMjUlIiBmaWxsPSIjZjk4NzQ3Ii8+PHJlY3QgeD0iNTAlIiB5PSI0NSUiIHdpZHRoPTI1JSBhZWlnaHQ9IjIwJSIgZmlsbD0iI2Y1N2UyZiIvPjx0ZXh0IHg9IjUwJSIgeT0iOTUlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BcmdhbjwvdGV4dD48L3N2Zz4=",
        description: "Huile d'argan 100% pure du Maroc"
    },
    {
        id: 3,
        nom: "Huile de Noisette",
        prix: 15.20,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmRiOTY0Ii8+PHJlY3QgeD0iMjAlIiB5PSIxNSUiIHdpZHRoPSI2MCUiIGhlaWdodD0iMzAlIiByeD0iMjAlIiBmaWxsPSIjZjk4NTI5Ii8+PHJlY3QgeD0iNjAlIiB5PSI1MCUiIHdpZHRoPSIzNSUiIGhlaWdodD0iMjAlIiByeD0iMTAlIiBmaWxsPSIjZjVhZDAwIi8+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzI1NTAxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vaXNldHRlPC90ZXh0Pjwvc3ZnPg==",
        description: "Huile de noisette grillée de Piémont"
    },
    {
        id: 4,
        nom: "Huile de Truffe Blanche",
        prix: 29.90,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHJlY3QgeD0iMjUlIiB5PSIxMCUiIHdpZHRoPSI1MCUiIGhlaWdodD0iMjUlIiByeD0iMjUlIiBmaWxsPSIjOTk5OTk5Ii8+PHJlY3QgeD0iNTAlIiB5PSI0NSUiIHdpZHRoPTMwJSBhZWlnaHQ9IjE1JSIgZmlsbD0iI2Y1ZjVmNSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNmZmY4MDAiLz48dGV4dCB4PSI1MCUiIHk9Ijk1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMjU1MDE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VHJ1ZmZlPC90ZXh0Pjwvc3ZnPg==",
        description: "Huile infusée à la truffe blanche d'Alba"
    },
    {
        id: 5,
        nom: "Huile d'Olive fumée",
        prix: 14.80,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZThjN2E1Ii8+PHJlY3QgeD0iMzAlIiB5PSIxNSUiIHdpZHRoPTQ1JSBhZWlnaHQ9IjIwJSIgZmlsbD0iI2Y3N2I2ZiIvPjxwYXRoIGQ9Ik0xMDAgMTUwIEw4MCAxNzAgTCAxMjAgMTkwIFoiIGZpbGw9IiM5OTk5OTkiLz48cmVjdCB4PSI0NSUiIHk9IjUwJSIgd2lkdGg9IjQwJSIgaGVpZ2h0PSIxNSUiIGZpbGw9IiNmNGQwM2YiLz48dGV4dCB4PSI1MCUiIHk5NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzI1NTAxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZ1bWVlPC90ZXh0Pjwvc3ZnPg==",
        description: "Huile d'olive fumée au bois de chêne"
    },
    {
        id: 6,
        nom: "Huile de Sésame grillé",
        prix: 11.50,
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmFiN2EzIi8+PHJlY3QgeD0iMjAlIiB5PSIxNSUiIHdpZHRoPSI2MCUiIGhlaWdodD0iMjUlIiByeD0iMjAlIiBmaWxsPSIjZjFkOTBhIi8+PHJlY3QgeD0iNTAlIiB5PSI1MCUiIHdpZHRoPTQwJSBhZWlnaHQ9IjIwJSIgZmlsbD0iI2Y4Y2I4ZiIvPjx0ZXh0IHg9IjUwJSIgeT0iOTUlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMyNTUwMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TZXNhbWU8L3RleHQ+PC9zdmc+",
        description: "Huile de sésame toasté d'Asie"
    }
];

// Panier
let panier = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeModal = document.querySelector('.close');

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherProduits();
    setupEventListeners();
    smoothScrolling();
    mobileMenu();
});

// Afficher les produits
function afficherProduits() {
    productsGrid.innerHTML = '';
    produits.forEach(produit => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}" class="product-image">
            <div class="product-info">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <div class="product-price">${produit.prix.toFixed(2)}€</div>
                <button class="add-to-cart" onclick="ajouterAuPanier(${produit.id})">
                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Ajouter au panier
function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    const itemExistant = panier.find(item => item.id === id);

    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({ ...produit, quantite: 1 });
    }

    mettreAJourPanier();
    
    // Animation de succès
    const bouton = event.target;
    bouton.style.background = '#27ae60';
    bouton.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    setTimeout(() => {
        bouton.style.background = '';
        bouton.innerHTML = '<i class="fas fa-shopping-cart"></i> Ajouter au panier';
    }, 1500);
}

// Mettre à jour l'affichage du panier
function mettreAJourPanier() {
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);
    cartCount.textContent = totalArticles;
    cartCount.style.display = totalArticles > 0 ? 'flex' : 'none';
}

// Ouvrir le panier
cartIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    afficherPanier();
    cartModal.style.display = 'block';
});

// Fermer le panier
closeModal.addEventListener('click', fermerPanier);
window.addEventListener('click', function(e) {
    if (e.target === cartModal) {
        fermerPanier();
    }
});

function fermerPanier() {
    cartModal.style.display = 'none';
}

// Afficher le contenu du panier
function afficherPanier() {
    if (panier.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Votre panier est vide 😢</p>';
        cartTotal.textContent = '0€';
        return;
    }

    cartItems.innerHTML = panier.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.nom}">
            <div class="cart-item-info">
                <h4>${item.nom}</h4>
                <p>${item.prix.toFixed(2)}€ x ${item.quantite}</p>
            </div>
            <button class="remove-item" onclick="retirerDuPanier(${item.id})">
                Retirer
            </button>
        </div>
    `).join('');

    const total = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    cartTotal.textContent = total.toFixed(2) + '€';
}

// Retirer un article
function retirerDuPanier(id) {
    panier = panier.filter(item => item.id !== id);
    afficherPanier();
    mettreAJourPanier();
}

// Vider le panier
document.getElementById('emptyCart').addEventListener('click', function() {
    panier = [];
    afficherPanier();
    mettreAJourPanier();
});

// Passer la commande
document.querySelector('.btn-checkout').addEventListener('click', function() {
    if (panier.length === 0) {
        alert('Votre panier est vide !');
        return;
    }
    
    const total = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    alert(`Merci pour votre commande ! 🛒\nTotal: ${total.toFixed(2)}€\n\n(Fonctionnalité de paiement à implémenter)`);
    
    panier = [];
    afficherPanier();
    mettreAJourPanier();
    fermerPanier();
});

// Navigation fluide
function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Menu mobile
function mobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Écouteurs d'événements
function setupEventListeners() {
    // Scroll pour réduire le header
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(45, 80, 22, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#2d5016';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// LocalStorage pour persistance du panier
function sauvegarderPanier() {
    localStorage.setItem('panier', JSON.stringify(panier));
}

function chargerPanier() {
    const panierSauvegarde = localStorage.getItem('panier');
    if (panierSauvegarde) {
        panier = JSON.parse(panierSauvegarde);
        mettreAJourPanier();
    }
}

// Charger le panier au démarrage
chargerPanier();

// Sauvegarder à chaque modification
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.remove-item')) {
        setTimeout(sauvegarderPanier, 100);
    }
});
