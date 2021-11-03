<template>

  <!-- Hero Section -->
  <section class="text-center pb-10">
    <h3 class="font-bold text-2xl text-gray-400">DIGITA SCIENTIA INDONESIA</h3>
    <h2 class="font-bold text-4xl mt-3">We Provide Creative <span class="text-[#2f55d4]">Solutions</span></h2>
    <p class="my-5">Is an Innovative national Company that lead digital transformation by providing digital products and services <br> (Information Management System, Internet of Things and Artificial Intelligence).</p>
    <button class="bg-[#2f55d4] p-2 px-5 mt-5 rounded-md text-white font-semibold duration-200 hover:-translate-y-1.5 hover:shadow-blue">Lihat Video</button>
    <div class="flex justify-center px-20">
      <img src="@/assets/images/projects/digitascientia/svgs/biologist-bro.svg" alt="Hero Image" class="max-w-[800px]">
    </div>
  </section>  
  <!-- End Hero Section -->

  <!-- Products Section -->
  <section class="text-center">
    <h3 class="font-bold text-3xl mt-3 pb-10">The answer to all your business needs</h3>

    <!-- Grid Container-->
    <div class="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto">

      <!-- Grid item -->
      <div v-for="(item, index) in productsGridData" :key="index" class="border-2 border-gray-100 text-center py-10">
        <img src="@/assets/images/projects/digitascientia/orbital.png" alt="Orbital Logo" class="w-1/4 mx-auto max-w-[200px]">
        <img :src="item.image" :alt="item.title + ' Image'" class="h-[250px] mx-auto">
        <h2 class="px-10 font-bold text-xl">{{ item.title }}</h2>
        <h3 class="px-5 mt-3 text-black/50">{{ item.caption }}</h3>
      </div>
      <!-- End Grid item -->

    </div>
    <!-- End Grid Container-->

  </section>
  <!-- End Products Section -->

  <!-- Sukses Section -->
  <section class="text-center">
      <div class="max-w-[1200px] mx-auto text-center py-20">
        <h3 class="text-[#2f55d4] font-semibold uppercase">Sukses</h3>
        <h2 class="text-3xl font-bold">Kami sukses bersama Anda</h2>
        <p class="text-black/50 mt-3">Berikan peluang kenapa kami untuk mewujudkan prestasi Anda.</p>
        <div class="flex justify-between items-center mt-10">

          <!-- Left Section -->
          <div class="w-1/2 text-left">
            <h2 class="font-semibold text-2xl">Terus berkembang <br> bersama bisnis-bisnis di Indonesia</h2>
            <p class="text-black/50 mt-3">Kami hadir untuk memudahkan semua bisnis dan perusahaan di Indonesia untuk dapat terus berkembang.</p>

            <div class="flex items-center space-x-5 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-bold text-xl">300+</p>
                <p class="text-black/50">Bisnis berkembang bersama Kami</p>
              </div>
            </div>
            <div class="flex items-center space-x-5 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-bold text-xl">5000+</p>
                <p class="text-black/50">Pengguna terdaftar aktif</p>
              </div>
            </div>
            <div class="flex items-center space-x-5 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#34d1bf]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-bold text-xl">3500+</p>
                <p class="text-black/50">sangat puas dengan produk kami</p>
              </div>
            </div>

          </div>
          <!-- End Left Section -->

          <!-- Right Section -->
          <div class="w-1/2">
            <img src="@/assets/images/projects/digitascientia/svgs/career.svg" alt="Sukses Poster">
          </div>
          <!-- End Right Section -->

        </div>
      </div>
  </section>
  <!-- Sukses Section -->

</template>

<script>
export default {
  data() {
    return {
      productsGridData:[
        {
          title: 'Laboratorium Integration Management System',
          image: require('@/assets/images/projects/digitascientia/svgs/laboratory.svg'),
          caption: 'Sampling, Lembar Kerja, hingga manajemen Inventory, tidak pernah terasa lebih mudah dengan bantuan dari Orbitalims.',
        },
        {
          title: 'School Integration Management System',
          image: require('@/assets/images/projects/digitascientia/svgs/career.svg'),
          caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et distinctio rem totam, sapiente atque magnam, sit voluptas quaerat consectetur facere ipsum placeat vero veniam molestiae deserunt accusamus, incidunt quae. Aut veritatis adipisci voluptatibus? Minus libero explicabo eum ex reiciendis sapiente ea magni vitae. Optio reprehenderit earum quaerat facilis rerum tempora.',
        },
        {
          title: 'Enterprise Resource Planning',
          image: require('@/assets/images/projects/digitascientia/svgs/deadline.svg'),
          caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id dolorem sed pariatur distinctio?',
        },
        {
          title: 'Training Integration Management System',
          image: require('@/assets/images/projects/digitascientia/svgs/certifications.svg'),
          caption: 'eCertification, Courses, pembayaran terintrgrasi dengan diskon, tidak pernah terasa lebih mudah dengan bantuan dari TIMS.',
        },
        {
          title: 'IoT',
          image: require('@/assets/images/projects/digitascientia/svgs/drone.svg'),
          caption: 'Innovative IoT Solution for; Environment, Agriculture, Mining, Energy to accelerate to be world class institution with high efficiency and productivity.',
        },
        {
          title: 'Consulting',
          image: require('@/assets/images/projects/digitascientia/svgs/consulting.svg'),
          caption: 'The new international standard for Occupational Health and Safety Management Systems was published on March 12, 2018 by the International Organization for Standardization (ISO)',
        },
      ]
    }
  },
}
</script>

<style>

</style>