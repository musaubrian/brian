<script setup>

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="my-4 h-auto">
    <h1 class="text-gray-800 text-center font-semibold text-4xl mt-6 mb-3 lg:hidden">
      <span class="text-slate-500 opacity-50">#</span>
      Projects
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full px-4 md:px-7 capitalize">
      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            pynet
          </h1>
          <p class="text-center text-md my-2 text-nomarl">
            Python program that allows users to easily share files across the
            same network. It is currently a <b>WIP</b>
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/pynet" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
              <s>live site</s>
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            quickbytes
          </h1>
          <p class="text-center text-md my-2">
            Website to help discover recipes and share your own. Developed using
            <b>VueJs</b> and <b>SupaBase</b> for the back end. Additional
            recipes gotten from the <b>mealDB</b> api
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/quick-bytes" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
              <s>live site</s>
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">tinyDb</h1>
          <p class="text-center text-md my-2">
            CLI app that generates passwords and stores passwords in an
            encrypted file locally using the Tinydb module.
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/myTinyDb" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source
            </NuxtLink>
            <button disabled class="bg-blue-500 opacity-89 ml-2 p-3 rounded-md">
              <s>Live site</s>
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            TinieUrl
          </h1>
          <p class="text-center text-md my-2">
            Url shortener with the backend written in Golang and front end
            written using NUXT3
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/tinyurl" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <NuxtLink to="https://trl.netlify.app" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
              livesite</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            NewsPulse
          </h1>
          <p class="text-center text-md my-2">
            Site to view top trending news in different categories.
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/newspulse" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <NuxtLink to="https://newspulse.netlify.app" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
              live site
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">TinyGo</h1>
          <p class="text-center text-md my-2">
            CLI password manager written in Go (implementation of
            <NuxtLink to="https://github.com/musaubrian/myTinyDb" class="text-blue-600 font-semibold" target="_blank">
              TinyDb</NuxtLink>)
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/tinygo" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <NuxtLink to="https://musaubrian.github.io/tinygo" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
              live site
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            Auto-Github
          </h1>
          <p class="text-center text-md my-2 text-nomarl">
            CLI tool to create new repos and check issues from github.
            <br />
            motivation from
            <NuxtLink to="https://cli.github.com" class="text-blue-700 font-semibold" target="_blank">GithubCLI</NuxtLink>
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/auto-github" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
              <s>live site</s>
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden">
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            OpenJournal
          </h1>
          <p class="text-center text-md my-2 text-nomarl">Journal of some sort
            <br />
            the main aim was to learn how to work with <NuxtLink to="https://trpc.io" target="_blank"><b><u>tRPC</u></b>
            </NuxtLink> and <NuxtLink to="https://clerk.dev" target="_blank"><b><u>Clerk</u></b></NuxtLink>
            <br />
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink to="https://github.com/musaubrian/journal/tree/main/journal-t" target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md">source</NuxtLink>
            <NuxtLink to="https://openjournal.vercel.app" target="_blank" class="bg-blue-500 ml-2 p-3 rounded-md">
              live site
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
