import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Education: [],
    Experience: [],
    Skills: [],
    Projects: [],
    Testimonials: [],
  },
  getters: {},
  mutations: {
    setEducation(state, data) {
      state.Education = data;
    },
    setExperience(state, data) {
      state.Experience = data;
    },
    setSkills(state, data) {
      state.Skills = data;
    },
    setProjects(state, data) {
      state.Projects = data;
    },
    setTestimonials(state, data) {
      state.Testimonials = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('http://localhost:3000/data')
        .then(response => {
          const data = response.data;
          console.log(response);
          commit('setEducation', data.Education);
          commit('setExperience', data.Experience);
          commit('setSkills', data.Skills);
          commit('setProjects', data.projects);
          commit('setTestimonials', data.Testimonials);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
  modules: {},
});

