// ***** Sidebar ***** //
// const sidebar = document.querySelector('.sidebar');
// const open = document.querySelector('.open-btn');
// const close = document.querySelector('.close-btn');

// open.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
//     open.style.display = 'none';
// });

// close.addEventListener('click', () => {
//     sidebar.classList.remove('active');
//     open.style.display = 'block';
// });

// ***** Redirection ***** //
// Mettre à jour le bouton "Se connecter" avec le nom d'utilisateur
document.addEventListener("DOMContentLoaded", () => {
    // Sauvegarder la page précédente dans le localStorage
    localStorage.setItem("previousPage", document.referrer);
    
    const navLogin = document.querySelector(".nav-login");
    const navUser = document.querySelector(".nav-user");
    const navLogout = document.querySelector(".nav-logout");

    const toggleNavElements = (loggedIn) => {
        if (loggedIn) {
            navLogin.style.display = "none";
            navUser.style.display = "flex";
            navLogout.style.display = "flex";
        } else {
            navLogin.style.display = "flex";
            navUser.style.display = "none";
            navLogout.style.display = "none";
        }
    };

    // Lire l'état de connexion depuis le localStorage
    const userPseudo = localStorage.getItem("userPseudo");

    // Appel initial avec l'état de connexion
    toggleNavElements(userPseudo !== null);

    navLogout.addEventListener("click", () => {
        const confirmLogout = confirm("Êtes-vous sûr de vouloir vous déconnecter ?");

        if (confirmLogout) {
            // Supprimer l'état de connexion du localStorage
            localStorage.removeItem("userPseudo");
            
            // Mettre à jour l'affichage de la navigation
            toggleNavElements(false);

            // Rediriger l'utilisateur vers la page d'accueil ou une autre page appropriée
            window.location.href = "home.html";
        }
    });
});

