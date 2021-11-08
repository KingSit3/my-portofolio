<template>
  <header class="px-36 fixed w-full bg-white z-10">
      <div class="max-w-[1200px] mx-auto flex justify-between py-4 items-center text-gray-500">
          <a href="#">
            <img src="@/assets/images/projects/digitascientia/logodigita.png" alt="Logo" class="h-12">
          </a>
          <ul class="flex space-x-7">
            <li class="hover:text-[#2f55d4] duration-150 font-semibold"><a href="#">Home</a></li>
            <li class="hover:text-[#2f55d4] duration-150 font-semibold"><a href="#">Works</a></li>
            <li>
                <NavDropdown :title="'Products'" :data="productsData" />
            </li>
            <li>
                <NavDropdown :title="'Solutions'" :data="SolutionsData" />
            </li>
            <li>
                <NavDropdown :title="'Company'" :data="CompanyData" />
            </li>
          </ul>
          <button class="bg-[#d6f6f2] text-[#34d1bf] p-2 px-4 rounded-md font-semibold hover:bg-[#34d1bf] hover:text-white duration-200 hover:-translate-y-1.5 hover:shadow-green">
              Contact Sales
          </button>
      </div>
  </header>
</template>

<script>
import NavDropdown from '../parts/NavDropdown.vue'

export default {
    components: {
        NavDropdown
    },

    data() {
        return {
            test: '',

            productsData: [
                {
                    name: 'Orbitalism',
                    link: '#',
                },
                {
                    name: 'Enterprise Resource Planning', 
                    link: '#',
                },
                {
                    name: 'Internet Of Things', 
                    link: '#',
                },
                {
                    name: 'School Information Management System',
                    link: '#',
                },
                {
                    name: 'Waste Water Treatment Plant',
                    link: '#',
                },
                {
                    name: 'Training', 
                    link: '#',
                },
                {
                    name: 'Consulting',
                    link: '#',
                },
                
            ],

            SolutionsData: [
                {
                    name: 'Environment',
                    link: '#',
                },
                {
                    name: 'Mineral & Metal', 
                    link: '#',
                },
                {
                    name: 'Food & Agriculture', 
                    link: '#',
                },
                {
                    name: 'Research & Education',
                    link: '#',
                },
                {
                    name: 'Energy',
                    link: '#',
                },
                {
                    name: 'Health Care', 
                    link: '#',
                },
            ],

            CompanyData: [
                {
                    name: 'About Us',
                    link: '#',
                },
                {
                    name: 'Our Team', 
                    link: '#',
                },
                {
                    name: 'Career', 
                    link: '#',
                },
                {
                    name: 'Blog',
                    link: '#',
                },
                {
                    name: 'Contact',
                    link: '#',
                },
            ],
            
        }
    },
}
</script>

<style>

</style>