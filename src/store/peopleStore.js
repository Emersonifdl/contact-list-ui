import PeopleService from '@/services/peopleService';
import { defineStore } from 'pinia';
export default defineStore('people', {
  state: () => {
    return {
      people: [],
      person: {},
      loading: false,
      meta: {},
      filters: {
        search: '',
        page: 1,
      },
    };
  },
  actions: {
    async getPeople(search) {
      if (search) {
        this.filters.search = search;
        this.filters.page = 1;
      }
      const { data } = await PeopleService.getPeople(this.filters);
      this.meta = data.meta;
      this.people = data.data;
    },
    async getMorePeople() {
      this.loading = true;

      if (this.meta.current_page < this.meta.last_page) {
        this.filters.page++;
        const { data } = await PeopleService.getPeople(this.filters);
        this.meta = data.meta;
        this.people = [...this.people, ...data.data];
      }

      this.loading = false;
    },
    clearFilters() {
      this.filters = {
        search: '',
        page: 1,
      };
    },
  },
});
