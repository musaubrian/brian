<template>
  <div class="my-4 h-auto md:w-5/6 w-full">
    <h1
      class="text-gray-800 text-center font-semibold text-4xl mt-6 mb-3 lg:hidden"
    >
      <span class="text-slate-500 opacity-50">#</span>
      Projects
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 w-full capitalize">
      <div
        class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden"
      >
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">Netmon</h1>
          <p class="text-center text-md my-2">
            network monitoring with alerts if latencies exceed set values
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink
              to="https://github.com/musaubrian/tinygo"
              target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md"
              >source
            </NuxtLink>
            <button disabled class="bg-blue-500 opacity-89 ml-2 p-3 rounded-md">
              <s>Live site</s>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 w-full capitalize"> -->
      <div
        class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden"
      >
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">tinygo</h1>
          <p class="text-center text-md my-2">
            CLI app that generates passwords and stores passwords. This is an
            upgrade to
            <NuxtLink
              to="https://github/com/musaubrian/myTinyDb"
              target="_blank"
              class="font-semibold text-blue-700"
            >
              myTinyDb</NuxtLink
            >
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink
              to="https://github.com/musaubrian/tinygo"
              target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md"
              >source
            </NuxtLink>
            <button disabled class="bg-blue-500 opacity-89 ml-2 p-3 rounded-md">
              <s>Live site</s>
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden"
      >
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">rgn</h1>
          <p class="text-center text-md my-2">
            This tool lets you create repositories from the comfort of your
            terminal It also allwos you to see what issues are assigned to you
            while still in your terminal
            <br />
            <b
              >This is an upgrade to
              <NuxtLink
                to="https://github.com/musaubrian/auto-github"
                target="_blank"
                class="underline"
                >auto-github
              </NuxtLink>
            </b>
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink
              to="https://github.com/musaubrian/rgn"
              target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md"
              >source</NuxtLink
            >
            <button
              disabled
              target="_blank"
              class="bg-blue-500 ml-2 p-3 rounded-md"
            >
              <s>livesite</s>
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden"
      >
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">
            Auto-Github
          </h1>
          <p class="text-center text-md my-2 text-nomarl">
            CLI tool to create new repos and check issues from github.
            <br />
            motivation from
            <NuxtLink
              to="https://cli.github.com"
              class="text-blue-700 font-semibold"
              target="_blank"
              >GithubCLI
            </NuxtLink>
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink
              to="https://github.com/musaubrian/auto-github"
              target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md"
              >source</NuxtLink
            >
            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
              <s>live site</s>
            </button>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 w-full h-auto bg-slate-300 flex flex-col items-center rounded-lg my-2 overflow-hidden"
      >
        <div class="mt-3 px-4">
          <h1 class="text-2xl md:text-3xl font-semibold text-center">pynet</h1>
          <p class="text-center text-md my-2 text-nomarl">
            Python program that allows users to easily share files across the
            same network. It is currently a <b>WIP</b>
          </p>
          <div class="inline-flex items-center justify-center w-full py-3">
            <NuxtLink
              to="https://github.com/musaubrian/pynet"
              target="_blank"
              class="bg-green-600 p-3 mr-2 text-gray-100 font-semibold rounded-md"
              >source</NuxtLink
            >
            <button disabled class="bg-blue-500 ml-2 p-3 rounded-md">
              <s>live site</s>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
