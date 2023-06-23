function toggleMenu() {
    const button = document.getElementById('toggle-menu');
    const navbar = document.getElementById('navbar');
    button.classList.toggle('expanded');
    navbar.classList.toggle('expanded');
}