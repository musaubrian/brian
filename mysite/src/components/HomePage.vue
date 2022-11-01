<template>
    <div class="homepage">
        <div class="image-container">
            <img src="../assets/avataaars.png" class="pika">
        </div>
        <div class="welcome">
            <h1> I'm Ernest </h1>
            <p> Software Engineer & tech writer </p>
            <RouterLink to="/about" class="mobile-button-large">
                About me
            </RouterLink>
            <a href="#about-me" class="mobile-button-small">
                About me
            </a>
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
        width: 100%;
        height: 100%;
        justify-content: center;
        align-content: center;
        flex-direction: column;
}
    .image-container {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 20%;
        width: 20%;
        margin: auto;
        padding: 1rem;
    }
    .image-container img {
        width: 90%;
        height: 90%;
        padding: 1rem;
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
        font-size: 2.3rem;
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
    .mobile-button-small {
        display: none;
    }
    .mobile-button-large{
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
    .mobile-button-large:hover {
        background-color: var(--color-text-black);
        color: var(--color-text-white);
        transition: 300ms ease;
    }

    @media screen and (max-width: 580px) {
        .mobile-button-large {
            display: none;
        }
        .image-container{
            height: 100%;
            width: 100%;
        }
        .image-container img {
            width: 50%;
            height: 100%;
        }
        h1 {
            font-size: 3rem;
        }
        .welcome p {
            font-size: 1.3rem;
        }
        .mobile-button-small{
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
        .mobile-button-small:hover {
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
