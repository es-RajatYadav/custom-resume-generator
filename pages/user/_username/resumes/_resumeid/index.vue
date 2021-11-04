<template>
  <div>
    <resume-u-i
      :user-projects='Resume.UserProjects'
      :user-experience='Resume.UserExperience'
      :user-edu-qualification='Resume.UserEduQualification'
      :city-town='Resume.cityTown'
      :address='Resume.address'
      :nationality='Resume.nationality'
      :phone-number='Resume.phoneNumber'
      :user-certificates='Resume.userCertificates'
      :user-hobbies='Resume.userHobbies'
      :user-skills='Resume.userSkills'
      :zipcode='Resume.zipcode'
      :website='Resume.website'
      :date-of-birth='Resume.dateOfBirth'
      :email='Resume.email'
      :last-name='Resume.lastName'
      :first-name='Resume.firstName'></resume-u-i>
  </div>
</template>

<script>
import ResumeUI from '../../../../../components/ResumeUI/ResumeUI'
export default {
  name: 'index',
  layout: 'authenticatedLayout',
  components: {
    ResumeUI
  },
  methods: {

  },
  created(){
    this.$store.dispatch("Resume/getResume", this.$route.params.resumeid);
  },
  computed: {
    Resume(){
      return this.$store.getters['Resume/loadResume'];
    }
  }
}
</script>

<style scoped>

</style>
