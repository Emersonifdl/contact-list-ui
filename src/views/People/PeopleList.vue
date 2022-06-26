<template @after-leave="query = ''" appear>
  <div class="relative z-10 bg-red-200">
    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div
        class="mx-auto w-96 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <div>
          <div class="relative">
            <SearchIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              v-model="query"
            />
          </div>
          <div v-if="query === '' || peopleStore.people.length > 0" class="flex divide-x divide-gray-100" static hold>
            <div
              class="max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 sm:h-96"
              @scroll.passive="onScroll"
              ref="scroll"
            >
              <div class="flex justify-between border-b">
                <h1 class="mb-4 text-xs font-semibold text-gray-500">A list of contacts</h1>
                <router-link :to="{ name: 'people-create' }">
                  <UserAddIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                </router-link>
              </div>
              <div class="-mx-2 text-sm text-gray-700">
                <router-link
                  v-for="person in peopleStore.people"
                  :key="person.id"
                  :to="{ name: 'people-detail', params: { id: person.id } }"
                >
                  <div
                    class="group flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <img :src="person.avatar" alt="" class="h-6 w-6 flex-none rounded-full" />
                    <span class="ml-3 flex-auto truncate">{{ person.name }}</span>
                    <StarIcon
                      v-if="person.favorite"
                      class="w-5 h-5 ml-3 flex-none text-yellow-500"
                      aria-hidden="true"
                    />
                    <StarIcon v-else class="w-5 h-5 ml-3 flex-none text-gray-500" aria-hidden="true" />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="query !== '' && peopleStore.people.length === 0" class="py-14 px-6 text-center text-sm sm:px-14">
            <UsersIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
            <p class="mt-4 font-semibold text-gray-900">No people found</p>
            <p class="mt-2 text-gray-500">We couldn't find anything with that term. Please try again.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { SearchIcon, StarIcon, PlusIcon, UsersIcon, UserAddIcon } from '@heroicons/vue/solid';
import usePeopleStore from '@/store/peopleStore';

const peopleStore = usePeopleStore();

const query = ref('');
const scroll = ref();

onMounted(async () => await init());

const init = async () => {
  peopleStore.clearFilters();
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
