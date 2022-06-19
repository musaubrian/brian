<template>
    <nav class="navbar">
        <div class="left">
            <div class="logo">
                <img src="../assets/logo.png" alt="the letter m and b">
            </div>
        </div>
        <div class="links-right">
            <ul>
                <li>
                    <RouterLink to="/" class="_link">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="_link">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects" class="_link">projects</RouterLink>
                </li>
            </ul>
        </div>
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
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .left,
    .links-right {
        width: 50%;
    }
    .logo {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        height: 100%;
        background: blue;
        width: 40%;
    }
    .logo img {
        height: 50%;
        width: 50%;
        padding: 1rem;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        padding: 0.5rem;
        background-color: transparent;
    }
    li ._link{
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        justify-content: flex-end;
        color: var(--color-text-black);
    }
</style>

