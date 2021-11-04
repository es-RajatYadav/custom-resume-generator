<template>
  <div class='main-container'>
    <div class='resume-preview-container' id='Resume'>
      <div class='heading-name'>
        <h1 id='Name'>{{firstName}} {{lastName}}</h1>
      </div>
      <div class='heading-sub-description'>
        <p>Computer Science Engineer looking to work for an organization to use garnered Dev skills in a real world application</p>
      </div>
      <div class='contact-details'>
        <div class='phone-link'>
          <p><i class="fa fa-phone" aria-hidden="true"></i> {{phoneNumber}}</p>
          <p><i class="fa fa-link" aria-hidden="true"></i> {{website}}</p>
        </div>

        <div class='location-mail'>
          <p><i class="fa fa-at" aria-hidden="true"></i> {{email}}</p>
          <p><i class="fa fa-map-marker" aria-hidden="true"></i> {{address}}, {{nationality}}</p>
        </div>
      </div>

      <div class='proexpskill'>
        <div class='project-exp-qualification'>
          <div class='project'>
            <h2>PROJECTS</h2>
            <div class='project-preview' v-for='UserProject in UserProjects'>
              <h3>{{UserProject.projectTitle}}</h3>
              <div class='date-location'>
                <p class='date'><i class="fa fa-calendar-o" aria-hidden="true"></i> {{UserProject.projectStartYear}} - {{UserProject.projectEndYear}}</p>
                <p class='location'><i class="fa fa-map-marker" aria-hidden="true"></i> {{UserProject.projectLocation}}, India</p>
              </div>
              <p class='description'> {{UserProject.projectDescription}}</p>
            </div>
          </div>

          <div class='experience'>
            <h2>EXPERIENCE</h2>
            <div class='experience-preview' v-for='UserExp in UserExperience'>
              <h3>{{UserExp.jobTitle}}</h3>
              <p class='Employer'>{{UserExp.jobEmployer}}</p>
              <div class='date-location'>
                <p class='date'><i class="fa fa-calendar-o" aria-hidden="true"></i> {{UserExp.jobStartYear}} - {{UserExp.jobEndYear}}</p>
                <p class='location'><i class="fa fa-map-marker" aria-hidden="true"></i> {{UserExp.jobLocation}}, India</p>
              </div>
              <p class='description'>{{UserExp.jobDescription}}</p>
            </div>
          </div>

          <div class='qualifications'>
            <h2>EDUCATION</h2>
            <div class='qualification-preview' v-for='UserQual in UserEduQualification'>
              <div class='qualification-detail'>
                <h3>{{UserQual.eduDegree}}</h3>
                <p class='Institution'>{{UserQual.eduInstitution}}</p>
                <div class='date-location'>
                  <p class='date'><i class="fa fa-calendar-o" aria-hidden="true"></i> {{UserQual.eduYear}}</p>
                  <p class='location'><i class="fa fa-map-marker" aria-hidden="true"></i> {{UserQual.eduLocation}}</p>
                </div>
              </div>
              <div class='qualification-aggregate'>
                <p class='cgpa'>CGPA</p>
                <h4>{{UserQual.eduAggregate}} / 10</h4>
              </div>
            </div>
          </div>
        </div>

        <div class='skill-certification-interests'>
          <div class='Skills'>
            <h2>SKILLS</h2>
            <div class='skills-preview'>
              <div class='skill-box' v-for='UserSkill in userSkills'>
                <p class='skill-head'>{{UserSkill.skill}}</p>
                <p class='skill-level'>{{UserSkill.skillLevel}}</p>
              </div>
            </div>
          </div>

          <div class='certification'>
            <h2>CERTIFICATIONS</h2>
            <div class='certi-preview' v-for='UserCertificate in userCertificates'>
              <p class='title'>{{UserCertificate.title}}</p>
              <p class='Employer'>{{UserCertificate.institution}}</p>
            </div>
          </div>

          <div class='interests'>
            <h2>INTERESTS</h2>
            <div class='interest-preview' v-for='Interests in userHobbies'>
              <p>{{Interests.Hobby}}</p>
            </div>
          </div>

          <div class='languages'>
            <h2>LANGUAGES</h2>
            <div class='lang-preview'>
              <div class='lang-box'>
                <p class='lang-head'>Hindi</p>
                <p class='lang-level'>Native</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click='makePDF'>Click Here!</button>
  </div>
</template>

<script>
export default {
  props: {
    firstName : {
      type : String,
      required : true,
    },
    lastName: {
      type : String,
      required : true,
    },
    email : {
      type : String,
      required : true,
    },
    dateOfBirth : {
      type : Object,
      required : true,
    },
    website: {
      type : String,
      required : true,
    },
    zipcode : {
      type : String,
      required : true,
    },
    userSkills : {
      type: Array,
      required : true,
    },
    userHobbies : {
      type: Array,
      required : true,
    },
    userCertificates : {
      type: Array,
      required : true,
    },
    phoneNumber : {
      type : Number,
      required : true,
    },
    nationality : {
      type : String,
      required : true,
    },
    address: {
      type: String,
      required : true,
    },
    cityTown: {
      type: String,
      required : true,
    },
    UserEduQualification : {
      type: Array,
      required : true,
    },
    UserExperience: {
      type: Array,
      required : true,
    },
    UserProjects: {
      type : Array,
      required : true,
    }
  },
  methods: {
    makePDF(){
      window.print();
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
#Resume{
}
.main-container{
  width: 1000px;
  margin: auto;
}
.resume-preview-container{
  border: 2px solid black;
  border-radius: 5px;
  width: 70%;
  margin: auto;
  padding: 50px;
}

.heading-name{
  width: 60%;
  font-size: 30px;
}

.heading-sub-description{
  font-weight: bold;
  color: rgba(43, 49, 52, 0.73);
  width: 70%;
  font-size: 18px;
}

.contact-details{
  width: 60%;
  color: rgba(43, 49, 52, 0.6);
  font-weight: normal;
  display: flex;
  margin-bottom: 20px;
}

.fa{
  font-weight: bolder;
}

.phone-link, .location-mail{
  width: 50%;
  padding: 5px;
}

.proexpskill{
  display: flex;
}

.project-exp-qualification{
  width: 60%;
}

.project, .experience, .qualifications, .Skills, .certification, .interests {
  margin-bottom: 20px;
}

h2{
  width: 90%;
  border-bottom: 3px;
  border-bottom-style: solid;
  margin-bottom: 10px;
}

.project-preview{
  width: 90%;
  margin-bottom: 10px;
}

h3{
  font-weight: normal;
  font-size: 18px;
  width: 80%;
  margin-top: 1px;
  margin-bottom: 5px;
}

.date-location{
  margin-top: 5px;
  display: flex;
  margin-bottom: 5px;
}
.location, .date{

  margin-right: 10px;
  font-size: 12px;
  color: rgba(43, 49, 52, 0.8);
}

.description{
  font-size: 16px;
  color: rgba(43, 49, 52, 0.8);
  white-space: pre-line;
  width: 90%;
}

.Employer, .Institution{
  font-weight: bold;
  color: rgba(43, 49, 52, 0.8);
  font-size: 17px;
}

.qualifications{

}
.qualification-preview{
  display: flex;
}

.qualification-detail{
  width: 80%;
}

.qualification-aggregate{
  width: 20%;
  text-align: center;
  margin-right: 40px;
  color: rgba(43, 49, 52, 0.8);
  margin-top: 10px;
}
.cgpa{
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.skill-certification-interests{
  width: 40%;
}

.skills-preview{
  display: flex;
}

.skill-box{
  margin-left: 5px;
  margin-right: 10px;
  width: 50px;
}

.skill-head, .lang-head{
  font-size: 18px;
}

.skill-level, .lang-level{
  font-weight: bold;
  font-size: 12px;
  color: rgba(43, 49, 52, 0.8);
  border-bottom: 1px;
  border-bottom-style: solid;
}

.certi-preview{
  margin-left: 5px;
}
.title{
  font-style: italic;
}

.lang-box{
  width: 50%;
  margin-left: 5px;
}
</style>
