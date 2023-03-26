<template>
    <nav class="navbar">
        <ul class="md: w-4/6">
            <li>
                <NuxtLink to="/" class="_link">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="_link">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" class="_link">Work</NuxtLink>
            </li>
        </ul>
    </nav>
</template>



<style scoped>
.navbar {
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

li ._link {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
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
    .navbar {
        display: none;
        visibility: hidden;
    }
}
</style>
