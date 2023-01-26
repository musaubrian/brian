<template>
    <nav class="navbar">
        <ul>
            <li>
                <RouterLink to="/" class="_link">Home</RouterLink> 
            </li>
            <li>
                <RouterLink to="/about" class="_link">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" class="_link">Work</RouterLink>
            </li>
            <li>
                <RouterLink to="/contact" class="_link">Contact</RouterLink>
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
        width: 100%;
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

    li ._link:hover,
    li ._link:active {
        transition: 400ms;
        color: var(--color-text-white-mute);
    }
        @media screen and (max-width: 550px) {
            .navbar{
                display: none;
                visibility: hidden;
            }
        }
</style>

