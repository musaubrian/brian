<template>
    <footer>
        <div
            class="inline-flex w-full justify-center items-center bg-[#9b9a9a56] static bottom-0 sm:mt-20 md:m-0 md:hidden">
            <span>
                <NuxtLink to="https://bio.link/musaubrian" target="_blank">© {{ year }} musuabrian</NuxtLink>
            </span>
        </div>

    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>


<style scoped>
.footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9b9a9a56;
}

span,
a {
    font-size: 1rem;
    padding: 0.5rem;
    color: var(--color-text-black);
    text-decoration: none;
}
</style>