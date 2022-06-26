<template>
  <div class="relative z-10">
    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div
        class="mx-auto w-96 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <div class="p-8 space-y-6">
          <div>
            <div class="flex-none p-4 text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="mx-auto h-24 w-24 rounded-full"
              />
            </div>
            <div class="mt-4 flex items-start justify-between">
              <div>
                <h2 class="text-lg font-medium text-gray-900">
                  <span class="sr-only">Details for</span>
                  Tom Cook
                </h2>
                <p class="text-sm font-medium text-gray-500">Director, Product Development</p>
              </div>
              <button
                type="button"
                class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <!-- Heroicon name: outline/heart -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="sr-only">Favorite</span>
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Contacts</h3>
            <div class="mt-2 flex items-center justify-between">
              <p class="text-sm text-gray-500 italic">Add a description to this image.</p>
              <button
                type="button"
                class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <!-- Heroicon name: solid/pencil -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
                <span class="sr-only">Add description</span>
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Shared with</h3>
            <ul role="list" class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              <li class="py-3 flex justify-between items-center">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <p class="ml-4 text-sm font-medium text-gray-900">Aimee Douglas</p>
                </div>
                <button
                  type="button"
                  class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove
                  <span class="sr-only">Aimee Douglas</span>
                </button>
              </li>

              <li class="py-3 flex justify-between items-center">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <p class="ml-4 text-sm font-medium text-gray-900">Andrea McMillan</p>
                </div>
                <button
                  type="button"
                  class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove
                  <span class="sr-only">Andrea McMillan</span>
                </button>
              </li>

              <li class="py-2 flex justify-between items-center">
                <button
                  type="button"
                  class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span
                    class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"
                  >
                    <!-- Heroicon name: solid/plus-sm -->
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">Share</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="flex">
            <button
              type="button"
              class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download
            </button>
            <button
              type="button"
              class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, watch, reactive } from 'vue';
import usePeopleStore from '@/store/peopleStore';
import { SearchIcon, StarIcon } from '@heroicons/vue/solid';
import { UsersIcon } from '@heroicons/vue/outline';
const peopleStore = usePeopleStore();
const query = ref('');

const filters = reactive({
  search: '',
});

const scroll = ref(null);

onMounted(async () => {
  await init();
});

const init = async () => {
  await peopleStore.getPeople();
};

watch(query, async (search) => {
  if (search.length > 0) {
    await peopleStore.getPeople(search);
  }
});

const onScroll = async () => {
  const { scrollTop, scrollHeight, clientHeight } = scroll.value;
  if (scrollTop + clientHeight >= scrollHeight) {
    await peopleStore.getMorePeople();
  }
};
</script>
