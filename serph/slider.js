export function slider() {
    try {
        const register = document.getElementById('register');
        const login = document.getElementById('login');
        const container = document.getElementById('containerslider');
    
        register.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    
        login.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    } catch (error) {
        console.error('Error:', error);
    }
}