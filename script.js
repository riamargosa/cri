document.addEventListener('DOMContentLoaded', (event) => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    const hasAcceptedCookies = localStorage.getItem('cookieAccepted');

    // Se o usuário não aceitou os cookies antes, mostre o pop-up
    if (!hasAcceptedCookies) {
        cookieConsent.style.display = 'block';
    }

    // Ao clicar no botão "Aceitar", esconda o pop-up e salve a preferência
    acceptCookiesButton.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });
});