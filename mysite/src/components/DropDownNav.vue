<script setup>
    import { ref} from 'vue';
    import {vAutoAnimate} from "@formkit/auto-animate"

    const isOpen = ref(false);
</script>

<template>
    <div v-auto-animate class="dropdown-nav" @click="isOpen = !isOpen">
        <div class="dropdown-init">
            <RouterLink to="#" class="mobile-links">
                <img src="../assets/menu.svg" alt="menu-icon right">
            </RouterLink>
        </div>
        <div class="dropdown-menu" v-if="isOpen">
            <ul>
                <li>
                    <RouterLink to="/" class="mobile-links">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects" class="mobile-links">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="mobile-links">About me</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="mobile-links">Reach me</RouterLink>
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
        .dropdown-init{
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: flex-end;
            align-content: center;
            padding: 0.5rem;
            border-bottom: 2px outset var(--color-text-black);
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
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
    
</style>
