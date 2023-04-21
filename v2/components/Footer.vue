<script setup>
    const year = new Date().getFullYear()
</script>

<template>
    <footer>
        <div
            class="inline-flex w-full justify-center items-center bg-[#9b9a9a56] static bottom-0 sm:mt-20 md:m-0 md:hidden">
            <span class="text-lg text-gray-800">
                <NuxtLink to="https://linktr.ee/musaubrian" target="_blank">© {{ year }} musaubrian</NuxtLink>
            </span>
        </div>

    </footer>
</template>
