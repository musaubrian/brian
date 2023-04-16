<script setup>
definePageMeta({
    layout: "default"
})
</script>

<template>
    <div class="about flex flex-col md:flex-row">
        <div class="about-image">
            <NuxtImg src="/static/avataaars.png" alt="avatar" class="hidden rounded-full w-3/6 md:block" placeholder />
        </div>
        <div class="about-me">
            <p class="mb-2 md:mb-0">
                I am a developer with a focus on creating visually appealing websites
                with an understanding of web development
                technologies and I'm able to create functional and responsive websites.
            </p>
            <p class="mb-2 md:mb-0">
                Interested in scripting and have built a few command-line interface (CLI) tools
                that have been useful in automating tasks and integrating with other software.
            </p>
            <p class="mb-2 md:mb-0">
                Dedicated to finding elegant solutions to problems and always
                looking for ways to improve my skills.
                <br>
                <span>Checkout some of the things I've built <NuxtLink to="/projects" class="font-semibold underline">here
                    </NuxtLink>
                </span>
            </p>

            <hr />

            <div class="mobile-btn-container">
                <div class="mail">
                    <span class="mb-sp">Email me:</span>
                    <NuxtLink to="mailto: musaubrian15@gmail.com" class="mobile-btn active:text-gray-400">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                    </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

  
<style>
.about {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.about-me {
    width: 50%;
    padding: 1rem;
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-image {
    width: 40%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-image img {
    width: 80%;
    padding: 2rem;
}

.about-me p {
    padding: 1rem;
    font-size: 1.2rem;
    text-align: justify;
}

.large-view-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.button,
.mobile-btn {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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

.mobile-btn {
    width: 85%;
}

.mobile-btn-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}

.mail {
    display: flex;
    width: 60%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.mb-sp {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
}

@media screen and (max-width: 790px) {
    .about {
        flex-direction: column;
    }

    .about-image {
        width: 100%;
    }

    .about-me {
        width: 100%;
        padding: none;
    }

    .about-me p {
        padding: 0;
        font-size: 1.2rem;
    }

    .large-view-btn {
        display: none;
    }


}
</style>  