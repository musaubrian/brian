<template>
    <div class="form-box">
        <h1>I would like to hear from you : )</h1>
        <div class="form-container">
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="true">
                <input type="hidden" name="form-name" value="contact" />
                <div class="top">

                    <label for="name">Name: <input type="text" name="name" required /></label>

                    <label for="email">Email: <input type="email" name="email" required /></label>

                </div>
                <div class="textarea">
                    <label for="message">
                        <textarea name="message" placeholder="Message" rows="7" required></textarea>
                    </label>
                </div>
                <button type="submit">
                    Send
                    <font-awesome-icon icon="fa-solid fa-paper-plane" />
                </button>

            </form>
        </div>
    </div>
</template>

<style scoped>



    h1 {
        visibility: hidden;
    }
    .form-container {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 90%;
        margin: auto;
        padding: 1rem;
    }
    .form-container form {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
    }
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        padding: 1rem;
    }
    .top label {
        width: 48%;
    }
    .top input{
        font-size: 1.2rem;
        border: 2px solid var(
            --color-text-black
        );
        background-color: transparent;
        padding: 0.5rem;
        border-radius: 15px;
        text-align: center;
        width: 100%;
    }
    .textarea {
        padding: 1rem;
    }
    .textarea textarea {
        padding: 0.5rem;
        border: 2px solid var(--color-text-black);
        border-radius: 15px;
        width: 100%;
        margin: auto;
        background: transparent;
        font-size: 1.2rem;
    }
    button {
        width: 40%;
        padding: 1rem;
        border: 3px solid var(--color-text-black);
        border-radius: 15px;
        margin: 1rem auto;
        text-decoration: none;
        background-color: var(--color-text-black);
        color: var(--color-text-white-soft);
        font-size: 1.2rem;
        font-weight: 650;
        transition: 300ms;
    }
    button:hover {
        background-color: transparent;
        padding: 1rem;
        color: var(--color-text-black);
    }

    @media screen and (max-width: 790px){
        .form-box {
            height: auto;
        }
        h1 {
            visibility: visible;
            text-align: center;
            margin-top: 1rem;
            padding: 1rem;
        }
        .form-container,
        .form-container form {
            width: 100%;
        }
        .top{
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
        .top label {
            width: 100%;
            margin-top: 1rem;
        }
        .top input,
        .textarea textarea {
            font-size: 1.1rem;
            padding: 0.7rem;
        }
    }
</style>