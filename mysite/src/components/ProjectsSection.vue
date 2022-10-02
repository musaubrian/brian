<template>
    <div class="projects-container">
        <div class="card-row">
            <div class="card">
            <h1>TinyDb</h1>
            <div class="card-body">
                <img src="../assets/person_.svg" alt="">
            </div>
            <p>
                Created this *database for personal use
            </p>
            <button class="to-github">
                See code
            </button>
        </div>
        <div class="card">
            <h1>TinyDb</h1>
            <div class="card-body">
                <img src="../assets/person_.svg" alt="">
            </div>
            <p>
                Created this *database for personal use
            </p>
            <button>
                See code
            </button>
        </div>
        </div>
        <div class="card-row">
            <div class="card">
            <h1>TinyDb</h1>
            <div class="card-body">
                <img src="../assets/avataaars.png" alt="">
            </div>
            <p>
                Created this *database for personal use
            </p>
            <button>
                See code
            </button>
        </div>
        <div class="card">
            <h1>TinyDb</h1>
            <div class="card-body">
                <img src="../assets/person_.svg" alt="">
            </div>
            <p>
                Created this *database for personal use
            </p>
            <button>
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
        transform: translate(3deg);
        transition: 600ms ease;
        background-color: var(--color-background-black);
        border: none;
        color: var(--color-text-white);
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
