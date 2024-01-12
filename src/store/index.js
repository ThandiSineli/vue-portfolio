import { createStore } from 'vuex';

const dataUrl = "https://thandisineli.github.io/VueData/Data/";

export default createStore({
  state: {
    Testimonials: null,
    skills: null,
    experience: null,
    education: null,
    projects: null,
  },
  getters: {},
  mutations: {
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setExperience(state, experience) {
      state.experience = experience;
    },
    setEducation(state, education) {
      state.education = education;
    },
    setprojects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let testimonialResponse = await fetch(dataUrl);
        let { Testimonials } = await testimonialResponse.json();
        context.commit('setTestimonials', Testimonials);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchprojects(context) {
      try {
        let projectsResponse = await fetch(dataUrl);
        let { projects } = await projectsResponse.json();
        context.commit('setprojects', projects);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchEducation(context) {
      try {
        let educationResponse = await fetch(dataUrl);
        let { Education } = await educationResponse.json();
        context.commit('setEducation', Education);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchExperience(context) {
      try {
        let experienceResponse = await fetch(dataUrl);
        let { Experience } = await experienceResponse.json();
        context.commit('setExperience', Experience);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSkills(context) {
      try {
        let skillsResponse = await fetch(dataUrl);
        let { Skills } = await skillsResponse.json();
        context.commit('setSkills', Skills);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});




