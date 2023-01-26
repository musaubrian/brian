<script setup>
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const targetCard = ref()

useMotion(targetCard, {
    initial: {
        opacity: 0,
        y: 200
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 200,
            duration: 700
        }
    }
});

</script>

<template>
    <div class="my-4 h-auto" ref="targetCard">
        <h1 class="text-gray-800 text-center font-black text-4xl mt-6 mb-3">
            <span class="text-slate-500 opacity-50">#</span>
            Projects
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full px-4 md:px-7 capitalize">
            <div
            class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                <img src="../assets/quickbytes.png" class="w-full h-[30vh] object-cover" alt="">
                <div class="mt-3 px-4">
                    <h1 class="text-2xl md:text-3xl font-semibold text-center">quickbytes</h1>
                    <p class="text-center text-md my-2">
                        Website to help discover recipes and share your own.
                        Developed using <b>VueJs</b> and <b>SupaBase</b> for the back end.
                        Additional recipes gotten from the <b>mealDB</b> api
                    </p>
                    <div class="inline-flex items-center justify-center w-full py-3">
                        <a href="https://github.com/musaubrian/quick-bytes" target="_blank"
                        class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                        <a href="https://quickbyts.netlify.app" target="_blank"
                        class="bg-blue-500 ml-2 p-3 rounded-md">live site</a>
                    </div>
                </div>
            </div>

            <div
             class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                <img src="../assets/tinydb.png" class="w-full h-[30vh] object-cover" alt="">
                <div class="mt-3 px-4">
                    <h1 class="text-2xl md:text-3xl font-semibold text-center">tinyDb</h1>
                    <p class="text-center text-md my-2">
                        CLI app that generates passwords and stores passwords in an encrypted file locally using the
                        Tinydb module.
                    </p>
                    <div class="inline-flex items-center justify-center w-full py-3">
                        <a href="https://github.com/musaubrian/myTinyDb" target="_blank"
                        class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                        <button disabled="disabled" class="bg-blue-500 opacity-89 ml-2 p-3 rounded-md">
                            <s>Live site</s>
                        </button>
                    </div>
                </div>
            </div>

            <div
            class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                <img src="../assets/url.jpeg" class="w-full h-[30vh] object-cover" alt="">
                <div class="mt-3 px-4">
                    <h1 class="text-2xl md:text-3xl font-semibold text-center">TinieUrl</h1>
                    <p class="text-center text-md my-2">
                        Url shortener with the backend written in Golang and front end written using NUXT3
                    </p>
                    <div class="inline-flex items-center justify-center w-full py-3">
                        <a href="https://github.com/musaubrian/tinyurl" target="_blank"
                        class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                        <a href="https://trl.netlify.app" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
                            livesite</a>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                    <img src="../assets/newspulse.png" class="w-full h-[30vh] object-cover" alt="">
                    <div class="mt-3 px-4">
                        <h1 class="text-2xl md:text-3xl font-semibold text-center">NewsPulse</h1>
                        <p class="text-center text-md my-2">
                            Site to view top trending news in different categories.
                        </p>
                        <div class="inline-flex items-center justify-center w-full py-3">
                            <a href="https://github.com/musaubrian/newspulse" target="_blank"
                            class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                            <a href="https://newspulse.netlify.app" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
                                live site
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                    <img src="../assets/tg.png" class="w-full h-[30vh] object-cover" alt="">
                    <div class="mt-3 px-4">
                        <h1 class="text-2xl md:text-3xl font-semibold text-center">TinyGo</h1>
                        <p class="text-center text-md my-2">
                            CLI password manager written in Go

                            (implementation of <a href="https://github.com/musaubrian/myTinyDb"
                            class="text-blue-600 font-semibold"
                            target="_blank">TinyDb</a>)
                        </p>
                        <div class="inline-flex items-center justify-center w-full py-3">
                            <a href="https://github.com/musaubrian/tinygo" target="_blank"
                            class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                            <a href="https://musaubrian.github.io/tinygo" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
                                live site
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
                    <img src="../assets/notfound.png" class="w-full h-[30vh] object-cover" alt="">
                    <div class="mt-3 px-4">
                        <h1 class="text-2xl md:text-3xl font-semibold text-center">Auto-Github</h1>
                        <p class="text-center text-md my-2 text-nomarl">
                            CLI tool to create new repos and check issues from github.
                            <br>
                            motivation from <a href="https://cli.github.com"
                            class="text-blue-700 font-semibold"
                            target="_blank">GithubCLI</a>
                        </p>
                        <div class="inline-flex items-center justify-center w-full py-3">
                            <a href="https://github.com/musaubrian/auto-github" target="_blank"
                            class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</a>
                            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
                                <s>live site</s>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
