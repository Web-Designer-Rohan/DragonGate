function switchForm(formType) {
            const container = document.querySelector('.container');
            container.classList.remove('sign-in', 'sign-up');
            container.classList.add(formType);
}
