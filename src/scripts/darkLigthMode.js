let styleSheet = document.querySelector('.style-sheet');
let darkIcon = document.querySelector('.dark');
let lightIcon = document.querySelector('.ligth');

const loadDarkMode = () => {
    if(location.href.endsWith('/index.html')) {
        styleSheet.setAttribute("href", "./src/styles/darkMode.css");
    } else {
        styleSheet.setAttribute("href", "../styles/darkMode.css");
    }
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
}

const loadLigthMode = () => {
    if(location.href.endsWith('/index.html')) {
        styleSheet.setAttribute("href", "./src/styles/styles.css");
    } else {
        styleSheet.setAttribute("href", "../styles/styles.css");
    }
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
}


darkIcon.addEventListener('click', loadDarkMode);
lightIcon.addEventListener('click', loadLigthMode);