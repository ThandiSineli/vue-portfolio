import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    EducationData: [],
    ExperienceData: [],
    SkillsData: [],
    projectsData: [],
    TestimonialsData: [],
  },
  getters: {},
  mutations: {
    testimonialsData(state, data) {
      state.TestimonialsData = data;
    },
    educationData(state, data) {
      state.EducationData = data;
    },
    experienceData(state, data) {
    state.ExperienceData = data;
  },
  skillsData(state, data) {
    state.SkillsData = data;
  },
  projectsData(state, data) {
    state.projectsData = data;
  },

  },
   
 
  actions: {
    fetchTestimonialsData({ commit }) {
      axios.get('https://thandisineli.github.io/data-json/')
        .then(response => {
          console.log(response);
          commit('testimonialsData', response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    fetchEducationData({ commit }) {
      axios.get('https://thandisineli.github.io/data-json/')
        .then(response => {
          console.log(response);
          commit('educationData', response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    fetchExperienceData({ commit }) {
      axios.get('https://thandisineli.github.io/data-json/')
        .then(response => {
          console.log(response);
          commit('experienceData', response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    fetchSkillsData({ commit }) {
      axios.get('https://thandisineli.github.io/data-json/')
        .then(response => {
          console.log(response);
          commit('skillsData', response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    fetchProjectsData(context) {
      axios.get('https://thandisineli.github.io/data-json/')
        .then((p)=>{
          context.commit("projectsData",p.data.projectsData);
        })
    },
  },
  modules: {},
});
