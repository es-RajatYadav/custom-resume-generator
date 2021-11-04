<template>
  <div class='main-container'>
    <div class='ResumeCard'>
      <div class='ResumeID'>
        <p class='resumeID'> {{ ResumeID }}</p>
        <p class='subtext'>CREATED : {{Time}} {{hourMinSec}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeMiniCard',
  data(){
    return{
      hourMinSec : '',
      Time : ''
    }
  },
  props: {
    ResumeID: {
      type: String,
      required: true,
    },
    CreatedOn: {
      type: Number,
      required: true,
    }
  },
  methods : {
    nameTimeCal() {
      const timeNow = new Date();
      if ((timeNow.getTime() - this.CreatedOn) / 3600000 < 0.0166667) {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 1000)}`
        this.hourMinSec = ' sec ago';
      } else if ((timeNow.getTime() - this.CreatedOn) / 3600000 >= 0.0166667 && (timeNow.getTime() - this.CreatedOn) / 3600000 < 1) {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 60000) }`
        this.hourMinSec = ' min ago';
      } else if ((timeNow.getTime() - this.CreatedOn) / 3600000 >= 1 && (timeNow.getTime() - this.CreatedOn) / 3600000 < 24) {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 3600000) }`
        this.hourMinSec = ' h ago';
      } else if ((timeNow.getTime() - this.CreatedOn) / 3600000 >= 24 && (timeNow.getTime() - this.CreatedOn) / 3600000 < 730.001) {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 86400000) }`
        this.hourMinSec = ' d ago';
      } else if ((timeNow.getTime() - this.CreatedOn) / 3600000 >= 730.001 && (timeNow.getTime() - this.CreatedOn) / 3600000 < 8760.01) {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 2628000000) }`
        this.hourMinSec = ' m ago';
      } else {
        this.Time = `${Math.floor((timeNow.getTime() - this.CreatedOn)/ 31540000000) }`
        this.hourMinSec = ' y ago';
      }
    }
  },
  updated() {
    this.nameTimeCal();
  },
  created() {
    this.nameTimeCal();
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.ResumeCard{
  border: 2px #4CC3FF solid;
  background: whitesmoke;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
  padding: 20px;
  margin: 5px;
  border-radius: 5px;
}

.subtext{
  font-size: 12px;
  font-weight: bold;
  color: rgba(43, 49, 52, 0.6);
}
</style>
