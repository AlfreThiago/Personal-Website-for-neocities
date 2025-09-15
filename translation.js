const translations = {
    'pt-BR': {
    },
    'en': {
    },
    'es': {
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function changeLanguage(lang) {
    localStorage.setItem('userLanguage', lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    let userPreferredLanguage = localStorage.getItem('userLanguage');
    if (!userPreferredLanguage) {
        const browserLanguage = navigator.language || navigator.userLanguage;
        const shortBrowserLanguage = browserLanguage.split('-')[0];

        if (translations[browserLanguage]) {
            userPreferredLanguage = browserLanguage;
        } else if (translations[shortBrowserLanguage]) {
            userPreferredLanguage = shortBrowserLanguage;
        } else {
            userPreferredLanguage = 'en';
        }
    }
    changeLanguage(userPreferredLanguage);
});