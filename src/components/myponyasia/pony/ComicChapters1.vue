<template>
  <div class="max-w-[85rem] mx-auto">
    <div class="max-w-[90%] mx-auto">
      <!-- Old Version -->
      <div class="py-10">
        <BorderDivider :title="'Old Version'" />

        <h2 class="text-center text-3xl capitalize font-semibold mt-10">
          Friendship is Magic
        </h2>
        <Listbox v-model="selectedLang">
          <ListboxButton>{{ selectedLang }}</ListboxButton>
          <ListboxOptions>
            <ListboxOption
              v-for="lang in lang"
              :key="lang.id"
              :value="lang.name"
            >
              {{ lang.name }}
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
      <!-- End Old Version -->
    </div>
  </div>
</template>

<script>
import BorderDivider from "./parts/BorderDivider.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  components: {
    BorderDivider,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },

  data() {
    return {
      lang: [
        {
          id: 1,
          name: 'id',
        },
        {
          id: 2,
          name: 'En',
        },
        {
          id: 3,
          name: 'JP',
        },
      ],
    }
  },

  computed: {
    selectedLang(){
      return this.lang[0].name
    }
  }
};
</script>

<style>
</style>