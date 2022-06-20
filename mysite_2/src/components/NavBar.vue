<template>
    <nav class="navbar">
        <ul>
            <li>
                <RouterLink to="/" class="_link">Home </RouterLink>
            </li>
            <li>
                <RouterLink to="/about" class="_link">About </RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" class="_link">Work</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>




    @import '@/assets/base.css';
    .navbar{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0.5rem;
        background-color: transparent;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-content: center;
        width: 80%;
        padding: 0.5rem;
        background-color: transparent;
    }
    li ._link{
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 650;
        text-decoration: none;
        justify-content: center;
        color: var(--color-text-black);
        transition: 400ms;
    }

    li ._link:hover {
        transition: 400ms;
        font-size: 1.6rem;
    }
    @media screen and (max-width: 580px) {
        
        .navbar {
            visibility: hidden;
        }
        ul {
            justify-content: center;
        }
    }
</style>

