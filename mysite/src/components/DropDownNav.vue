<script setup>
    import { ref} from 'vue';
    import {vAutoAnimate} from "@formkit/auto-animate"

    const isOpen = ref(false);
</script>

<template>
    <div v-auto-animate class="dropdown-nav" @click="isOpen = !isOpen">
        <div class="header">
            <div class="logo">
                <img src="../assets/Artboard.png" alt="">
            </div>
            <div class="dropdown-init">
                <RouterLink to="#" class="mobile-links">
                    <img src="../assets/menu.svg" alt="menu-icon right">
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
    </div>

</template>

<style scoped>
    @import '@/assets/base.css';
    .dropdown-nav{
        display: none;
    }
    @media screen and (max-width: 550px){
        .dropdown-nav{
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
        .logo {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .logo img {
            width: 100%;
            height: 100%;
        }
        .dropdown-init{
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-content: center;
        }
        .dropdown-menu{
            width: 100%;
            border-bottom: 2px solid var(--color-text-black);
        }
        .dropdown-menu ul{
            margin: auto;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
        .dropdown-menu ul li{
            display: flex;
            justify-content: center;
            align-content: center;
            padding: 0.5rem;
        }
        .mobile-links{
            color: var(--color-text-black);
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
    
</style>
