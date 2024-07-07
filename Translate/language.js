// Importera översättningar från translations.js
import translations from './translations.js';


document.addEventListener('DOMContentLoaded', () => {
    // Ladda språkinställning från localStorage
    const savedLanguage = localStorage.getItem('language') || 'sv';
    loadLanguage(savedLanguage);

    // Ställ in checkbox-status baserat på sparad språkinställning
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.checked = (savedLanguage === 'en');

    // Lägg till händelselyssnare för språkväxling
    languageToggle.addEventListener('change', () => {
        const newLanguage = languageToggle.checked ? 'en' : 'sv';
        loadLanguage(newLanguage);
    });
});

function loadLanguage(language) {
    applyTranslations(translations[language]);
    document.documentElement.lang = language; // Uppdatera språkattributet på html-taggen
    localStorage.setItem('language', language); // Spara språkinställning i localStorage

    // Uppdatera meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.content = translations[language]['subTitle'];
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });
}