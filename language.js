document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');

    // Check current language and set the toggle state
    if (window.location.pathname.includes('/en')) {
        languageToggle.checked = true;
    }

    languageToggle.addEventListener('change', function () {
        const newPath = languageToggle.checked ? '/en' : '/';
        window.location.href = window.location.origin + newPath;
    });
});
