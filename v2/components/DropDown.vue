<script setup>

const isOpen = ref(false);
</script>

<template>
    <nav class="dropdown-nav" @click="isOpen = !isOpen">
        <div class="header">
            <NuxtImg placeholder src="/static/Artboard.png" width="120" height="20" />
            <div class="dropdown-init inline-flex w-full items-center justify-end mr-3 p-3">
                <RouterLink to="#" class="mobile-links">
                    <NuxtImg placeholder src="/static/menu.svg" alt="menu-icon right" width="25" height="25" />
                </RouterLink>
            </div>
        </div>
        <div class="dropdown-menu" v-if="isOpen">
            <ul>
                <li>
                    <NuxtLink to="/" class="mobile-links">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects" class="mobile-links">Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="mobile-links">About me</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.dropdown-nav {
    display: none;
}

@media screen and (max-width: 550px) {
    .dropdown-nav {
        display: flex;
        width: 95%;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        border-bottom: 2px outset var(--color-text-black);
        width: 100%;
        height: 30%;
    }

    .dropdown-menu {
        width: 100%;
        border-bottom: 2px solid var(--color-text-black);
    }

    .dropdown-menu ul {
        margin: auto;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .dropdown-menu ul li {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0.5rem;
    }

    .mobile-links {
        color: var(--color-text-black);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
    }
}
</style>