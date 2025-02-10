<template>
  <div class="min-h-screen h-full px-5 md:px-10 lg:px-20">
    <div class="container mx-auto">
      <!-- About Me Section-->
      <div class="w-full flex flex-col justify-center items-center pt-40">
        <div>
          <!-- Name -->
          <div class="text-left">
            <p class="">Hello, my name is</p>
            <div class="font-bold text-5xl group cursor-default flex gap-1.5">
              <span>Indra</span>
              <span
                class="opacity-50 group-hover:text-purple-500 group-hover:opacity-100 duration-500"
              >
                Ardiansyah
              </span>
            </div>
          </div>
          <!-- End Name -->

          <!-- Links -->
          <ul class="list-none py-3 flex justify-end gap-5">
            <!-- Linkedin-->
            <li>
              <a
                href="https://www.linkedin.com/in/indra-ardiansyah-948757220/"
                target="_blank"
                class="hover:opacity-50 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </a>
            </li>
            <!-- End Linkedin-->

            <!-- Github-->
            <li>
              <a
                href="https://github.com/KingSit3"
                target="_blank"
                class="hover:opacity-50 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </li>
            <!-- End Github-->
          </ul>
          <!-- End Links -->
        </div>
      </div>
      <!-- End About Me Section-->

      <main class="space-y-5 md:space-y-10">
        <!-- Tech -->
        <section id="my_tech_stack" class="space-y-20 py-10 md:py-20">
          <!-- Tech Stack -->
          <div class="px-5 md:px-10 lg:px-20 flex flex-col items-center justify-center space-y-5">
            <!-- Top -->
            <div class="w-fit group cursor-default">
              <h2 class="font-bold text-lg md:text-xl">Current Techology Stack</h2>
              <div class="group-hover:w-full w-0 bg-purple-500 h-0.5 transition-all duration-500" />
            </div>
            <!-- End Top -->

            <!-- Current Tech Stack -->
            <div class="flex gap-5">
              <a
                v-for="(item, index) in currentStack"
                :key="index"
                :href="item.link"
                target="_blank"
                class="hover:odd:rotate-12 hover:even:-rotate-12 duration-300"
              >
                <img
                  :key="index"
                  :src="`/images/tech/${item.title}-icon.svg`"
                  :alt="`Tech ${item.title}`"
                  class="h-10"
                  :title="item.title"
                />
              </a>
            </div>
            <!-- End Current Tech Stack -->
          </div>
          <!-- End Tech Stack -->

          <!-- Other Tech / Frameworks -->
          <div class="px-5 md:px-10 lg:px-20 flex flex-col items-center justify-center space-y-5">
            <!-- Top -->
            <div class="w-fit group cursor-default">
              <h2 class="font-bold text-lg md:text-xl">Other Technology / Framework</h2>
              <div class="group-hover:w-full w-0 bg-purple-500 h-0.5 transition-all duration-500" />
            </div>
            <!-- End Top -->

            <!-- Contents -->
            <div class="flex justify-center flex-wrap gap-10">
              <a
                v-for="(item, index) in usedProgrammingLanguage"
                :key="index"
                :href="item.link"
                target="_blank"
                class="hover:odd:rotate-12 hover:even:-rotate-12 duration-300"
              >
                <img
                  :key="index"
                  :src="`/images/tech/${item.title}-icon.svg`"
                  :alt="`Tech ${item.title}`"
                  class="h-10"
                  :title="item.title"
                />
              </a>
            </div>
            <!-- End Contents -->
          </div>
          <!-- End Other Tech / Frameworks -->
        </section>
        <!-- End Tech -->

        <!-- Works -->
        <section id="my_works" class="px-5 md:px-10 lg:px-20 py-10 md:py-20 space-y-5">
          <!-- Top -->
          <div class="w-fit group cursor-default">
            <h2 class="font-bold text-xl">My Works</h2>
            <div class="group-hover:w-full w-0 bg-purple-500 h-0.5 transition-all duration-500" />
          </div>
          <!-- End Top -->

          <!-- Contents -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <!-- Card -->
            <ProjectCard v-for="(item, index) in worksData" :key="index" :item="item" />
            <!-- End Card -->
          </div>
          <!-- End Contents -->
        </section>
        <!-- End Works -->
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import type { DataInterface, TechStackInterface } from "@/interface/GeneralInterfaces";

const currentStack: TechStackInterface[] = [
  {
    link: "https://laravel.com/",
    title: "laravel",
  },
  {
    link: "https://www.mysql.com/",
    title: "mysql",
  },
  {
    link: "https://tailwindcss.com/",
    title: "tailwind",
  },
  {
    link: "https://nuxtjs.org/",
    title: "nuxt",
  },
  {
    link: "https://www.typescriptlang.org/",
    title: "typescript",
  },
];

const usedProgrammingLanguage: Array<TechStackInterface> = [
  {
    link: "https://getbootstrap.com/",
    title: "bootstrap",
  },
  {
    link: "https://go.dev/",
    title: "golang",
  },
  {
    link: "https://www.javascript.com/",
    title: "javascript",
  },
  {
    link: "https://www.php.net/",
    title: "php",
  },
  {
    link: "https://vuejs.org/",
    title: "vue",
  },
  {
    link: "https://www.fastify.io/",
    title: "fastify",
  },
  {
    link: "https://expressjs.com/",
    title: "express",
  },
];

const worksData: Array<DataInterface> = [
  {
    link: "https://foryou.io/",
    image: "/images/work/foryou.webp",
    title: "Foryou",
    description: "Social marketplace for personalised video greetings",
    usedTech: ["tailwind", "bootstrap", "nuxt", "laravel", "mysql"],
  },
  {
    link: "https://centralstore.co.id",
    image: "/images/work/centralstore.webp",
    title: "Central Store",
    description: "Company Profile Website for Central Store",
    usedTech: ["tailwind", "nuxt"],
  },
  {
    link: "https://kapzet.id/",
    image: "/images/work/kapzet.webp",
    title: "Kapzet",
    description: "Company Profile Website for Kepzet IT Consultant",
    usedTech: ["tailwind", "nuxt"],
  },
  {
    link: "https://sempoa.id/",
    image: "/images/work/sempoa-web.webp",
    title: "Sempoa Landing Page",
    description: "Landing Page for Sempoa Website",
    usedTech: ["tailwind", "nuxt"],
  },
  {
    link: "http://hatisuci.or.id/",
    image: "/images/work/hati-suci.webp",
    title: "Yayasan Hati Suci",
    description: "Website for Hati Suci Foundation",
    usedTech: ["tailwind", "laravel", "mysql"],
  },
  {
    link: "https://erp.sempoa.id/login",
    image: "/images/work/sempoa-erp.webp",
    title: "Sempoa - ERP",
    description: "Sempoa ERP",
    usedTech: ["tailwind", "typescript", "vue", "laravel", "mysql"],
  },
];
</script>
