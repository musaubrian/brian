<template>
    <div class="hompeage">
        <div class="image-container">
           <img src="../assets/logo.png" alt="" srcset="">
        </div>
        <div class="welcome">
            <h1>Moving text goes here</h1>
        </div>
        <div class="socials">
            <h1>links go here</h1>
            <h1>Another link</h1>
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
    }
    .image-container img {
        width: 50%;
        height: 50%;
        padding: 1rem;
    }
    .socials {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    h1 {
        padding: 1rem;
    }
</style>
