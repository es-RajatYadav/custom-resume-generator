import { Database } from '../../plugins/firebase';
import { doc, onSnapshot } from "firebase/firestore";

export const state = () => ({
  Resume : {}
});

export const mutations = {
  SET_RESUME: (state, resumeData) => {
    state.Resume = resumeData;
  }
}

export const actions = {
  async getResume({ commit }, resumeID){
    await onSnapshot(doc(Database, "Resumes", resumeID), (dataSnapshot) => {
      const resumeData = {

        UserEduQualification: dataSnapshot.data().UserEduQualification,
        UserExperience: dataSnapshot.data().UserExperience,
        UserProjects: dataSnapshot.data().UserProjects,
        dateOfBirth: dataSnapshot.data().dateOfBirth,
        email: dataSnapshot.data().email,
        firstName: dataSnapshot.data().firstName,
        lastName: dataSnapshot.data().lastName,
        nationality: dataSnapshot.data().nationality,
        phoneNumber: dataSnapshot.data().phoneNumber,
        address: dataSnapshot.data().address,
        userCertificates: dataSnapshot.data().userCertificates,
        userHobbies: dataSnapshot.data().userHobbies,
        userSkills: dataSnapshot.data().userSkills,
        website: dataSnapshot.data().website,
        zipcode: dataSnapshot.data().zipcode,

      }
      commit("SET_RESUME", resumeData);
    })
  }
}

export const getters = {
  loadResume(state){
    return state.Resume;
  }
}
