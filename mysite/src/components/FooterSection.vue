<template>
    <footer>
        <div class="footer-container">
            <span>
                <RouterLink to="/github">©️2022 musuabrian</RouterLink>
            </span>
        </div>
        
    </footer>
</template>

<style scoped>
    footer {
        width: 100%;
        height: auto;
        background-color: #b4aeae;
    }
    .footer-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span,
    a{
        font-size: small;
        padding: 0.5rem;
        color: var(--color-text-black);
        text-decoration: none;
    }
</style>