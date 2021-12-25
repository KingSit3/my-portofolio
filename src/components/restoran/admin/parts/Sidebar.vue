<template>
  <div class="flex flex-col justify-between h-full space-y-2 px-5">
    
    <!-- Logo -->
    <router-link to="#" class="h-[10%] flex items-center space-x-2 justify-center my-2 py-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-10 text-[#F3950D]" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
      </svg>
      <span class="text-2xl font-semibold font-serif">Restoran</span>
    </router-link>
    <!-- End Logo -->
    
    <!-- Sidebar Menus -->
    <div class="h-[80%] overflow-y-auto flex flex-col space-y-4">
      <router-link to="#" class="bg-[#f3950d] p-2 rounded-md text-white font-semibold">Dashboard</router-link>
      <router-link to="#" class="hover:bg-[#f3950d] hover:text-white duration-200 p-2 rounded-md font-semibold" v-for="loop in 5" :key="loop">Menu {{ loop }} </router-link>
    </div>
    <!-- Sidebar Menus -->

    <!-- logout button -->
    <div class="h-[10%]">
      <router-link to="#" class="font-semibold text-black/50 hover:text-black duration-200">Logout</router-link></div>
    <!-- logout button -->

  </div>
</template>