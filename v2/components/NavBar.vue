<template>
  <nav class="w-full inline-flex justify-center items-center">
    <div class="bg-slate-300 md:w-5/6 rounded-lg w-full my-2">
      <ul class="w-full inline-flex p-3 font-semibold text-xl justify-start">
        <li class="p-2">
          <NuxtLink to="/" class="_link">Home</NuxtLink>
        </li>
        <li class="p-2">
          <NuxtLink to="/about" class="_link">About</NuxtLink>
        </li>
        <li class="p-2">
          <NuxtLink
            to="https://github.com/musaubrian"
            target="_blank"
            class="_link"
            >Github</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
