<template>
  <div class="relative z-10">
    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div
        class="mx-auto w-96 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <div>
          <div class="relative">
            <router-link :to="{ name: 'people-list' }">
              <ArrowLeftIcon class="cursor-pointer absolute top-3.5 left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
            </router-link>
          </div>
          <div class="p-8 space-y-14">
            <div>
              <div class="flex-none p-4 text-center">
                <img :src="person?.avatar" alt="" class="mx-auto h-24 w-24 rounded-full" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div>
                  <h2 class="text-lg font-medium text-gray-900">
                    <span class="sr-only">Details for</span>
                    {{ person?.name }}
                  </h2>
                  <p class="text-sm font-medium text-gray-500">{{ person?.role }}</p>
                </div>
                <button
                  @click="onFavorite()"
                  type="button"
                  class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                >
                  <StarIcon v-if="person?.favorite" class="h-6 w-6 text-yellow-400" aria-hidden="true" />
                  <StarIcon v-else class="h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span class="sr-only">Favorite</span>
                </button>
              </div>
            </div>
            <div v-if="person?.phones">
              <div class="flex justify-between">
                <h3 class="font-medium text-gray-900">Phones</h3>
              </div>
              <ul role="list" class="mt-2 border-t border-gray-200 divide-y divide-gray-200">
                <li class="py-3 flex justify-between items-center" v-for="phone in person?.phones" :key="phone.id">
                  <div>
                    <h2 class="text-gray-900">
                      {{ phone.number }}
                    </h2>
                    <p class="text-sm text-gray-500 italic">{{ phone.type }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex justify-between">
                <h3 class="font-medium text-gray-900">Emails</h3>
              </div>
              <ul role="list" class="mt-2 border-t border-gray-200 divide-y divide-gray-200">
                <li class="py-3 flex justify-between items-center" v-for="email in person?.emails" :key="email.id">
                  <div>
                    <h2 class="text-gray-900">
                      {{ email.address }}
                    </h2>
                    <p class="text-sm text-gray-500 italic">{{ email.type }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex gap-4">
              <button
                @click="onDelete"
                type="button"
                class="inline-flex flex-1 items-center justify-center py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <TrashIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                <span>Delete</span>
              </button>
              <button
                @click="onEdit"
                type="button"
                class="inline-flex flex-1 items-center justify-center py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-500 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <PencilIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PeopleService from '@/services/peopleService';
import { ArrowLeftIcon, StarIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/vue/solid';
import { useRoute, useRouter } from 'vue-router';

const $route = useRoute();
const $router = useRouter();

const person = ref();

onMounted(async () => getPerson());

const getPerson = () => {
  const { id } = $route.params;
  PeopleService.getPerson(id).then((response) => {
    person.value = response.data.data;
  });
};

const onFavorite = async () => {
  const { id } = $route.params;
  await PeopleService.updatePerson(id, { favorite: !person.value.favorite }).then((response) => {
    person.value = response.data.data;
  });
};
const onEdit = () => {
  $router.push({ name: 'people-edit', params: { id: person.value.id } });
};
const onDelete = async () => {
  const { id } = $route.params;
  await PeopleService.deletePerson(id).then(() => {
    $router.push({ name: 'people-list' });
  });
};
</script>
