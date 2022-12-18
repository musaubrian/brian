<script setup>
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const targetCard = ref()

useMotion(targetCard, {
    initial: {
        opacity: 0,
        y: 200
    },
    visible: {
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
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full px-2 capitalize">
            <div class="col-span-1 w-full h-auto bg-slate-400 p-4 flex flex-col items-center rounded-lg">
                <div class="w-full inline-flex items-center justify-center object-cover overflow-hidden mt-1">
                    <img src="../assets/avataaars.png" class="w-3/6" alt="">
                </div>
                <h1 class="text-2xl font-semibold text-center">quickbytes</h1>
                <p class="text-center text-md my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                    perspiciatis!
                </p>
                <div class="inline-flex items-center justify-evenly w-full">
                    <a href="https://github.com/musaubrian/quick-bytes" target="_blank"
                        class="bg-green-600 p-3 text-gray-100 font-semibold rounded-md">source</a>
                    <a href="https://quickbyts.netlify.app" target="_blank" class="bg-blue-500 p-3 rounded-md">live
                        site</a>

                </div>
            </div>
            <div class="col-span-1 w-full">
                <h1>project</h1>
            </div>
            <div class="col-span-1 w-full">
                <h1>project</h1>
            </div>
        </div>
    </div>
</template>