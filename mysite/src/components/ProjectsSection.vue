<template>
    <div class="projects-container">
        <div class="card-row">
            <div class="card">
            <h1>TinyDb</h1>
            <div class="card-body">
                <img src="../assets/rndom.png" alt="">
            </div>
            <p>
                Created this *database for personal use
            </p>
            <button class="to-github">
                See code
            </button>
        </div>
        <div class="card">
            <h1>Auto-github</h1>
            <div class="card-body">
                <img src="../assets/random.png" alt="">
            </div>
            <p>
                Automate repo creation and cloning.
            </p>
            <p>
                You just set it up and you are good to go
            </p>
            
            <button class="to-github">
                See code
            </button>
        </div>
        </div>
        <div class="card-row">
            <div class="card">
                <h1>Magaoni School</h1>
                <div class="card-body">
                    <img src="../assets/random.png" alt="">
                </div>
                <p>
                    School website with an admin section
                    for uploading files.
                    <span><b>(WIP)</b></span>
                </p>
                <button class="to-github">
                    See code
                </button>
            </div>
        </div>
    </div>
</template>

<style>
    .projects-container {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
    .card-row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 1rem;
    }
    .card {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        width: 40%;
        background-color: transparent;
        border: 2px solid var(--color-background-black);
        border-radius: 20px;
        padding: 1rem;
        color: var(--color-text-black);
        transition: 600ms;
    }
    .card-body {
        width: 60%;
    }
    .card-body img {
        width: 100%;
        height: 100%;
    }
    .card:hover {
        transform: rotate(3deg);
        transition: 600ms ease;
    }
    .to-github {
        display: flex;
        padding: 0.8rem;
        border: none;
        background-color: #50ad28;
        border-radius: 15px;
        margin: 1rem auto;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 650;
        transition: 500ms ease;
    }
    .to-github:hover {
        background-color: transparent;
        border: 3px solid #50ad28;
        transition: 500ms ease;
    }
    @media screen and (max-width: 550px) {
        section {
            height: 100%;
        }
        .projects-container {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .card-row {
            flex-direction: column;
        }
        .card {
            width: 90%;
            margin-bottom: 1rem;
        }
    }

</style>
