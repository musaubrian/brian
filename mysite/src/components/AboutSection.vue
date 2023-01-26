<script setup>
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

const targetEl = ref();
useMotion(targetEl, {
    initial: {
        opacity: 0,
        x: -150
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1000,
            delay: 200
        }
    }
})

</script>

<template>
    <div class="about" ref="targetEl">
        <div class="about-image">
            <img src="../assets/avataaars.png" alt="">
        </div>
        <div class="about-me">
            <p>
                I am an experienced developer with a focus on creating visually
                appealing websites. I have a strong understanding of web development
                technologies and am able to create highly functional and responsive websites.
            </p>
            <p>
                I have an interest in scripting and have a few command-line interface (CLI) tools
                that have been useful in automating tasks and integrating with other software.
                <br>
                I am dedicated to finding elegant solutions to complex problems and am always
                looking for ways to improve my skills and stay current in the industry.
            </p>
            <hr />
            <div class="large-view-btn">
                <RouterLink to="/contact" class="button">
                    Reach me
                </RouterLink>
            </div>
            <div class="mobile-btn-container">
                <div class="mail">
                    <span class="mb-sp">Email me:</span>
                    <a href="mailto: musaubrian45@gmail.com" class="mobile-btn">
                        <font-awesome-icon icon="fa-envelope" />
                    </a>
                </div>
                <div class="call">
                    <span class="mb-sp">Call me:</span>
                    <a href="tel: +254792810299" class="mobile-btn">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
@import '@/assets/base.css';

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
    width: 50%;
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

.button:hover,
.mobile-btn:hover {
    /* border: none;
    transform: scale(1.09); */
    background-color: var(--color-text-black);
    color: var(--color-text-white-soft);
    transition: 400ms;
}

.mobile-btn-container {
    display: none;
}

@media screen and (max-width: 790px) {
    .about {
        flex-direction: column;
    }

    .about-image {
        display: none;
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

    .mobile-btn-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
    }

    .mail,
    .call {
        display: flex;
        width: 50%;
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
}
</style>  
