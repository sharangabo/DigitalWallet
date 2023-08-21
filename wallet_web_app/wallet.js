document.addEventListener('DOMContentLoaded', () => {
    // ... Existing code ...

    // Function to handle responsive behavior
    function handleResponsive() {
        const screenWidth = window.innerWidth;

        // Adjust table layout for small screens
        const transactionsTable = document.querySelector('.transactions table');
        if (screenWidth <= 768) {
            transactionsTable.classList.add('responsive-table');
        } else {
            transactionsTable.classList.remove('responsive-table');
        }

        // Adjust category select width for small screens
        const categoriesSelect = document.querySelector('.categories select');
        if (screenWidth <= 768) {
            categoriesSelect.style.width = '100%';
        } else {
            categoriesSelect.style.width = 'auto';
        }
    }

    // Initial responsive adjustments
    handleResponsive();

    // Listen for window resize events
    window.addEventListener('resize', handleResponsive);
});

