import { Database } from "~/plugins/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const state = () => ({
  Resumes : []
});

export const mutations = {
  SET_RESUMES : (state, resumesData) => {
    state.Resumes = resumesData;
  }
};

export const actions = {
  async getResumes({ commit }, userUsername){
    await onSnapshot(doc(Database, "CSTUsers", userUsername), (dataSnapshot) => {
      console.log("Printed Here!");
      console.log(dataSnapshot.data().Resume, dataSnapshot.data().UserFirstName)
      commit('SET_RESUMES', dataSnapshot.data().Resume)
    });
  }
}

export const getters = {
  loadResumes(state){
    return state.Resumes;
  }
}

