<template>
    <div class="hompeage">
        <div class="image-container">
            <img src="https://github.com/musaubrian/brian/blob/main/mysite/images/pikachugif.gif?raw=true" alt="pikachu waving" class="pika">
        </div>
        <div class="welcome">
            <h1> I'm Ernest </h1>
            <p> Software Engineer & tech writer </p>
            <RouterLink to="/about" class="mobile-button">
                About me
            </RouterLink>
        </div>
        <div class="socials">
            <RouterLink to="/twitter" class="social-icons">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </RouterLink>
            <RouterLink to="/linkedin" class="social-icons">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </RouterLink>
            <RouterLink to="/github" class="social-icons">
                <font-awesome-icon icon="fa-brands fa-github-alt" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .homepage {
        display: flex;
        width: 100vh;
        height: 100%;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        margin-top: 1rem;
    }
    .image-container {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 50%;
        width: 100%;
        padding: 1rem;
    }
    .image-container img {
        width: 20%;
        height: 20%;
        padding: 1rem;
        border-radius: 50%;
    }
    .welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        flex-direction: column;
    }
    .welcome p {
        font-size: 2rem;
        margin: 1rem auto;
    }
    .socials {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
        border-top: 50%;
        border-width: 10px;
        padding: 1rem;
    }
    .social-icons{
        padding: 1rem;
        font-size: 2rem;
        color: var(--color-text-black);
        transition: 500ms;
    }
    h1 {
        font-size: 3.5rem;
        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 5s;
    }
    @keyframes typewriter {
        from {
            width: 0%;            
        }

        to {
            width: 30%;
            background: transparent;
        }
    }
    .social-icons:hover {
        color: var(--color-text-white-mute);
        transition: 500ms;
    }
    .mobile-button {
        display: none;
        visibility: hidden;
    }

    @media screen and (max-width: 580px) {
        .image-container {
            margin-top: 2rem;
        }
        .image-container img {
            width: 60%;
        }
        h1 {
            font-size: 3rem;
        }
        .welcome p {
            font-size: 1.3rem;
        }
        .mobile-button {
            visibility: visible;
            display: flex;
            padding: 1rem;
            border: 3px solid var(--color-text-black);
            border-radius: 15px;
            margin: 1rem auto;
            text-decoration: none;
            color: var(--color-text-black);
            font-size: 1.2rem;
            font-weight: 650;
            transition: 300ms;
        }
        .mobile-button:hover,
        .mobile-button:active {
            background-color: var(--color-text-black);
            color: var(--color-text-white);
            transition: 300ms;
        }
        @keyframes typewriter {
            from {
                width: 0%;
            }

            to {
                width: 70%;
                background: transparent;
            }
        }
        
    }
</style>
