updateTheme()

function updateTheme() {
    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
}

function switchTheme() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
        updateTheme()
    } else {
        localStorage.theme = 'dark'
        updateTheme()
    }
}
    
themeButton = document.getElementById('theme-switcher').addEventListener('click', switchTheme, false)