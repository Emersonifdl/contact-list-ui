<template>
  <div class="relative z-10">
    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div
        class="mx-auto w-96 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <div class="p-8">
          <form class="space-y-8 divide-y divide-gray-200" @submit.prevent="onSave">
            <div class="space-y-8 divide-y divide-gray-200">
              <!-- Personal Information -->
              <div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6">
                  <div class="col-span-1">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                      <input
                        v-model="person.name"
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div class="col-span-1">
                    <label for="role" class="block text-sm font-medium text-gray-700">Job title</label>
                    <div class="mt-1">
                      <input
                        v-model="person.role"
                        type="text"
                        name="role"
                        id="role"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Phones -->
              <div class="pt-8">
                <div class="flex justify-between">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Phones</h3>
                  <div class="flex">
                    <button
                      @click="addPhone"
                      type="button"
                      class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center bg-green-100 hover:bg-green-200 focus:outline-none"
                    >
                      <PlusIcon class="h-4 w-4 text-green-500" aria-hidden="true" />
                    </button>
                    <button
                      @click="removePhone"
                      type="button"
                      class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center bg-red-100 hover:bg-red-200 focus:outline-none"
                    >
                      <TrashIcon class="h-4 w-4 text-red-500" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div class="mt-6 grid gap-y-6 gap-x-2 grid-cols-6" v-for="(phone, index) in person.phones">
                  <div class="col-span-4">
                    <div class="flex items-stretch">
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          v-model="phone.number"
                          type="text"
                          name="phone"
                          :id="'phone' + index"
                          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="(xx) xxxxx-xxxx"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="mt-1">
                      <select
                        v-model="phone.type"
                        :id="'phone-type' + index"
                        name="type"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Mobile</option>
                        <option>Work</option>
                        <option>Home</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Emails -->
              <div class="pt-8">
                <div class="flex justify-between">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Emails</h3>
                  <div class="flex">
                    <button
                      @click="addEmail"
                      type="button"
                      class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center bg-green-100 hover:bg-green-200 focus:outline-none"
                    >
                      <PlusIcon class="h-4 w-4 text-green-500" aria-hidden="true" />
                    </button>
                    <button
                      @click="removeEmail"
                      type="button"
                      class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center bg-red-100 hover:bg-red-200 focus:outline-none"
                    >
                      <TrashIcon class="h-4 w-4 text-red-500" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div class="mt-6 grid gap-y-6 gap-x-2 grid-cols-6" v-for="(email, index) in person.emails">
                  <div class="col-span-4">
                    <div class="flex items-stretch">
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          v-model="email.address"
                          type="email"
                          name="email"
                          :id="'email' + index"
                          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="mt-1">
                      <select
                        v-model="email.type"
                        :id="'email-type' + index"
                        name="type"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Home</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="pt-5">
              <div class="flex justify-end">
                <button
                  @click="onCancel"
                  type="button"
                  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import PeopleService from '@/services/peopleService';
import { PlusIcon, TrashIcon, MailIcon, PhoneIcon } from '@heroicons/vue/solid';
import { useRoute, useRouter } from 'vue-router';

const $route = useRoute();
const $router = useRouter();

const person = reactive({
  name: '',
  role: '',
  phones: [{ number: '', type: '' }],
  emails: [{ address: '', type: '' }],
});

onMounted(async () => getPerson());

const getPerson = () => {
  const { id } = $route.params;
  PeopleService.getPerson(id).then((response) => {
    const { data } = response.data;
    person.name = data.name;
    person.role = data.role;
    person.phones = data.phones;
    person.avatar = data.avatar;
    person.emails = data.emails;
  });
};

const addPhone = () => {
  person.phones.push({ number: '', type: '' });
};

const removePhone = () => {
  person.phones.pop();
};

const addEmail = () => {
  person.emails.push({ address: '', type: '' });
};

const removeEmail = () => {
  person.emails.pop();
};

const onSave = () => {
  const { id } = $route.params;
  PeopleService.updatePerson(id, person)
    .then(() => {
      $router.push({ name: 'people-detail', params: { id } });
    })
    .catch((e) => {
      console.log(e);
    });
};

const onCancel = () => {
  const { id } = $route.params;
  $router.push({ name: 'people-detail', params: { id } });
};
</script>
