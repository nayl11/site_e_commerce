// 🛒 Données des produits avec IMAGES RÉALISTES
const produits = [
    {
        id: 1,
        nom: "Huile d'Olive Extra Vierge Bio",
        prix: 12.90,
        image: "https://images.unsplash.com/photo-1582359646-dd955e0a8dc9?w=400&h=300&fit=crop&crop=center",
        description: "Huile d'olive de première pression à froid de Crète"
    },
    {
        id: 2,
        nom: "Huile d'Argan Bio",
        prix: 18.50,
        image: "https://images.unsplash.com/photo-1587014611670-397b1e8e8cd9?w=400&h=300&fit=crop&crop=center",
        description: "Huile d'argan 100% pure du Maroc"
    },
    {
        id: 3,
        nom: "Huile de Noisette",
        prix: 15.20,
        image: "https://images.unsplash.com/photo-1541599468178-6b2a4e8df16d?w=400&h=300&fit=crop&crop=center",
        description: "Huile de noisette grillée de Piémont"
    },
    {
        id: 4,
        nom: "Huile de Truffe Blanche",
        prix: 29.90,
        image: "https://images.unsplash.com/photo-1603048297194-8f7d9e7f8d3e?w=400&h=300&fit=crop&crop=center",
        description: "Huile infusée à la truffe blanche d'Alba"
    },
    {
        id: 5,
        nom: "Huile d'Olive fumée",
        prix: 14.80,
        image: "https://images.unsplash.com/photo-1571934811356-6e3d2a5a1e63?w=400&h=300&fit=crop&crop=center",
        description: "Huile d'olive fumée au bois de chêne"
    },
    {
        id: 6,
        nom: "Huile de Sésame grillé",
        prix: 11.50,
        image: "https://images.unsplash.com/photo-1583836639383-9a3e543965f1?w=400&h=300&fit=crop&crop=center",
        description: "Huile de sésame toasté d'Asie"
    }
];

// 🛒 Panier
let panier = [];

// 🎯 DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeModal = document.querySelector('.close');
const emptyCartBtn = document.getElementById('emptyCart');
const checkoutBtn = document.querySelector('.btn-checkout');

// 🚀 Initialisation
document.addEventListener('DOMContentLoaded', function() {
    afficherProduits();
    setupEventListeners();
    smoothScrolling();
    mobileMenu();
    chargerPanier(); // Charger panier depuis localStorage
});

// 🖼️ Afficher les produits
function afficherProduits() {
    productsGrid.innerHTML = '';
    produits.forEach(produit => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}" class="product-image" loading="lazy">
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

// ➕ Ajouter au panier
function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    const itemExistant = panier.find(item => item.id === id);

    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({ ...produit, quantite: 1 });
    }

    mettreAJourPanier();
    sauvegarderPanier();
    
    // 🎉 Animation de succès
    const bouton = event.target.closest('.add-to-cart');
    const icon = bouton.querySelector('i');
    const text = bouton.innerHTML;
    
    bouton.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
    bouton.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    
    setTimeout(() => {
        bouton.style.background = '';
        bouton.innerHTML = text;
    }, 1500);
}

// 📊 Mettre à jour l'affichage du panier
function mettreAJourPanier() {
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);
    cartCount.textContent = totalArticles;
    cartCount.style.display = totalArticles > 0 ? 'flex' : 'none';
}

// 🛒 Ouvrir le panier
cartIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    afficherPanier();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// ❌ Fermer le panier
closeModal.addEventListener('click', fermerPanier);
window.addEventListener('click', function(e) {
    if (e.target === cartModal) {
        fermerPanier();
    }
});

function fermerPanier() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 🛍️ Afficher le contenu du panier
function afficherPanier() {
    if (panier.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem; font-size: 1.1rem;">Votre panier est vide 😢<br><small>Commencez à ajouter des produits !</small></p>';
        cartTotal.textContent = '0€';
        return;
    }

    cartItems.innerHTML = panier.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.nom}" loading="lazy">
            <div class="cart-item-info">
                <h4>${item.nom}</h4>
                <p>${(item.prix * item.quantite).toFixed(2)}€ <small>(x${item.quantite})</small></p>
            </div>
            <button class="remove-item" onclick="retirerDuPanier(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    cartTotal.textContent = total.toFixed(2) + '€';
}

// 🗑️ Retirer un article
function retirerDuPanier(id) {
    panier = panier.filter(item => item.id !== id);
    afficherPanier();
    mettreAJourPanier();
    sauvegarderPanier();
}

// 🗑️ Vider le panier
emptyCartBtn.addEventListener('click', function() {
    if (confirm('Voulez-vous vraiment vider votre panier ?')) {
        panier = [];
        afficherPanier();
        mettreAJourPanier();
        sauvegarderPanier();
    }
});

// 💳 Passer la commande
checkoutBtn.addEventListener('click', function() {
    if (panier.length === 0) {
        alert('Votre panier est vide ! 😅');
        return;
    }
    
    const total = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    alert(`🎉 MERCI POUR VOTRE COMMANDE ! 🛒\n\nTotal: ${total.toFixed(2)}€\n\n✅ Livraison offerte dès 50€\n✅ Paiement sécurisé\n\n(Fonctionnalité Stripe à implémenter)`);
    
    panier = [];
    afficherPanier();
    mettreAJourPanier();
    sauvegarderPanier();
    fermerPanier();
});

// 🔗 Navigation fluide
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

// 📱 Menu mobile
function mobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Fermer menu au clic sur lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// 💾 LocalStorage - Sauvegarder panier
function sauvegarderPanier() {
    localStorage.setItem('panier_huilesdor', JSON.stringify(panier));
}

// 💾 LocalStorage - Charger panier
function chargerPanier() {
    const panierSauvegarde = localStorage.getItem('panier_huilesdor');
    if (panierSauvegarde) {
        panier = JSON.parse(panierSauvegarde);
        mettreAJourPanier();
    }
}

// 🎨 Effets au scroll
function setupEventListeners() {
    // Header qui se floute au scroll
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

    // Parallax léger sur hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Clavier - ESC pour fermer modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartModal.style.display === 'block') {
        fermerPanier();
    }
});
