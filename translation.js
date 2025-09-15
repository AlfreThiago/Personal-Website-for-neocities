const translations = {
    'pt-BR': {
        Intro: "Olá! Bem-vinde ao meu Quarto Digital. Sou Alfre, tenho 19 anos, sou NB, mais especificamente Agenero, uso todos os pronomes (prefiro elu/delu), para saber mais sombre mim explore este estranho lugar.",

        selec: "Mudar o Idioma: "
    },
    'en': {
        Intro: "Hello! Welcome to my Digital Room. Im Alfre, i have 19y, im Enby, more specifically Agender, i use all pronouns (but i prefer they/them/it), to know more about me explore this weird place.",

        selec: "Change Language: "
    },
    'es': {
        Intro: "¡Hola! Bienvenido a mi Cuarto Digital. Soy Alfre, tengo 19 años, soy NB, más específicamente, Agenero. Uso todos los pronombres (prefiero neutro). Para saber más sobre mí, explora este extraño lugar.",

        selec:"Cambiar Idioma: "
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

const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            changeLanguage(selectedLanguage);
        });
    }

    let userPreferredLanguage = localStorage.getItem('userLanguage') || 'en';
    if (languageSelect) {
        languageSelect.value = userPreferredLanguage;
    }