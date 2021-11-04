<template>
  <div class='main-container'>
    <resume-mini-card v-for='resume in Resumes'
                      :key='resume.id'
                      :created-on='resume.createdOn'
                      :resume-i-d='resume.id'/>
  </div>
</template>

<script>
import ResumeMiniCard from './ResumeMiniCard'
export default {
  name: 'ResumeMiniList',
  components: {
    ResumeMiniCard
  },
  props: {
    Resumes: {
      type : Array,
      required : true,
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}

.main-container{
  display: inline-block;
  margin-top: 20px;
}
</style>
