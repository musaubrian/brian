<script setup>
import { ref } from 'vue';
import { vAutoAnimate } from "@formkit/auto-animate"

const isOpen = ref(false);
</script>

<template>
    <nav v-auto-animate class="dropdown-nav" @click="isOpen = !isOpen">
        <div class="header">
            <div class="dropdown-init inline-flex w-full items-center justify-end mr-3 p-3">
                <RouterLink to="#" class="mobile-links">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </RouterLink>
            </div>
        </div>
        <div class="dropdown-menu" v-if="isOpen">
            <ul>
                <li>
                    <a href="/" class="mobile-links">Home</a>
                </li>
                <li>
                    <a href="#projects" class="mobile-links">Projects</a>
                </li>
                <li>
                    <a href="#about-me" class="mobile-links">About me</a>
                </li>
                <li>
                    <a href="#contact" class="mobile-links">Reach me</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<style scoped>
@import '@/assets/base.css';

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
