import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase/index";
import { collection, getDocs } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { userMetaData: {}, skills: {}, techStacks: [], projectsData: [], certificationsData: [], educationData: [], experienceData: [], publicationsData: [], contactDetails: {} },
  mutations: {
    setUserMetaData(state, meta) {
      state.userMetaData = meta;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setTechStacks(state, tech) {
      state.techStacks = tech;
    },
    setProjectsData(state, projects) {
      state.projectsData = projects;
    },
    setEducationData(state, education) {
      state.educationData = education;
    },
    setCertificationsData(state, certifications) {
      state.certificationsData = certifications;
    },
    setExperienceData(state, experiences) {
      state.experienceData = experiences;
    },
    setPublicationsData(state, publications) {
      state.publicationsData = publications;
    },
    setContactDetails(state, details) {
      state.contactDetails = details;
    }

  },
  actions: {
    async setUserMetaData(state) {
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "meta"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase meta collection.");
      state.commit("setUserMetaData", data[0]);
    },
    async setSkills(state) {
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "skills"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase skills collection.");

      state.commit("setSkills", data[0]);
    },
    async setTechStacks(state) {
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "tech"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase tech collection.");
      state.commit("setTechStacks", data);
    },
    async setProjectsData(state) {
      console.info('Fetching projects data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "projects"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase projects collection.");
      state.commit("setProjectsData", data);
    },
    async setEducationData(state) {
      console.info('Fetching Education data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "education"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase education collection.");
      state.commit("setEducationData", data);
    },
    async setCertificationsData(state) {
      console.info('Fetching certifications data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "certifications"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase certifications collection.");
      state.commit("setCertificationsData", data);
    },
    async setExperienceData(state) {
      console.info('Fetching experience data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "experience"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase experience collection.");
      data.sort((x, y) => {
        return y.from.seconds - x.from.seconds
      })
      state.commit("setExperienceData", data);
    },
    async setPublicationsData(state) {
      console.info('Fetching publications data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "publications"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase p collection.");
      state.commit("setPublicationsData", data);
    },
    async setContactDetails(state) {
      console.info('Fetching publications data.')
      const data = [];
      const querySnapshot = await getDocs(collection(firebase.db, "contact"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      if (data.length === 0)
        throw new Error("Please setup firebase contact collection.");
      state.commit("setContactDetails", data[0]);
    }
  },
  modules: {},
  getters: {
    getUserMetaData(state) {
      return state.userMetaData;
    },
    getSkills(state) {
      return state.skills;
    },
    getTechStacks(state) {
      return state.techStacks;
    },
    getProjectsData(state) {
      return state.projectsData;
    },
    getEducationData(state) {
      return state.educationData;
    },
    getCertificationsData(state) {
      return state.certificationsData;
    },
    getPublicationsData(state) {
      return state.publicationsData;
    },
    getExperienceData(state) {
      return state.experienceData;
    },
    getContactDetails(state) {
      return state.contactDetails;
    }
  },
});
