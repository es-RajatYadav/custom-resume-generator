<template>
  <div class='main-container'>
    <div class='page-head'>
      <p id='page-header'>Hey!</p>
      <p id='subtext'>You can create a new resume or preview your saved ones here.</p>
    </div>
    <div class='resume-create-preview'>
      <button id='create-new-resume-btn' @click='executeCreateNewResume'></button>
      <ResumeMiniList :Resumes='loadResumes'/>
    </div>
  </div>
</template>

<script>
import ResumeMiniList from '../../../components/ResumeUI/ResumeMiniList'
export default {
  name: 'index',
  layout: 'authenticatedLayout',
  components: {
    ResumeMiniList
  },
  methods: {
    executeCreateNewResume(){
      this.$router.push(`/user/nyxcarnyx/create`);
    }
  },
  created() {
    this.$store.dispatch('UserUsername/getUserUsername', this.$store.getters['Authentication/currentUserUID']);
    this.$store.dispatch("ResumeList/getResumes", this.$route.params.username);
  },
  computed: {
    loadResumes(){
      console.log(this.$store.getters["ResumeList/loadResumes"]);
      return this.$store.getters["ResumeList/loadResumes"];
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.main-container {
  width: 60%;
  margin: auto;
}

.page-head{
  font-size: 50px;
  font-weight: bold;
}

.resume-create-preview{
  display: flex;
}

#page-header{
  color: rgb(29, 83, 119);
  width: 120px;
}

#subtext{
  color: rgba(40, 43, 58, 0.56);
  margin-top: 2px;
  font-size: 17px;
}

#create-new-resume-btn{
  outline: none;
  border: none;
  border-radius: 50%;
  margin-top: 50px;
  padding: 5px;
  background: whitesmoke;
}

#create-new-resume-btn:after {
  font-family: FontAwesome, serif;
  content: '\f067';
  cursor: pointer;
  color: #6F7278;
  font-size: 80px;
}

#create-new-resume-btn:hover:after{
  background-image: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
