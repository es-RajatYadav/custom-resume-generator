<template>
  <div class='main-container'>
    <div class="Page-Head">
      <p>Create :</p>
    </div>
    <div class='resume-form'>
      <form @submit.prevent='executeCreateResume'>

        <div class='personal-details'>
          <h2 class='section-header'>Personal</h2>
          <p class='subtext'>Provide your personal details here.</p>

          <div class='name-section'>
            <div>
              <label>FIRST NAME</label>
              <input type='text' id='FirstName' name='firstname' v-model='Resume.firstName' placeholder='e.g. Rajat' required>
            </div>

            <div>
              <label>LAST NAME</label>
              <input type='text' id='LastName' name='lastname'  v-model='Resume.lastName' placeholder='e.g. Yadav' required>
            </div>
          </div>

          <div class='email-phoneNumber'>
            <div class='email'>
              <label>EMAIL</label>
              <input type='email' id='Email' name='email' v-model='Resume.email' placeholder='e.g. youremail@email.com' required>
            </div>
            <div>
              <label>PHONE NUMBER</label>
              <input type='text' id='PhoneNo' name='lastname' v-model='Resume.phoneNumber' placeholder='e.g. 9898989898' maxlength='10' required>
            </div>

          </div>

          <div>
            <label>ADDRESS</label>
            <input type='text' id='Address' name='address' v-model='Resume.address' placeholder='e.g. Cecilia Chapman 711-2880 Nulla St.' required>
          </div>

          <div class='zip-and-town'>

            <div>
              <label>ZIP CODE</label>
              <input type='number' id='ZipCode' name='zipcode' v-model='Resume.zipcode' placeholder='e.g. 560014' required>
            </div>

            <div>
              <label>CITY/TOWN</label>
              <input type='text' id='CityTown' name='CityTown' v-model='Resume.cityTown' placeholder='e.g. Gurugram' required>
            </div>

          </div>

          <div class='dob-pob'>

            <div class='day'>
              <label>DAY</label>
              <input type='number' id='DOB-Day' name='dob-day' v-model='Resume.dateOfBirth.day' placeholder='e.g. 13' required>
            </div>

            <div>
              <label class='month-label'>MONTH</label>
              <select id='DOB-Month' name='dob-month' v-model='Resume.dateOfBirth.month'>
                <option value='January' selected>January</option>
                <option value='February' selected>February</option>
                <option value='March' selected>March</option>
                <option value='April' selected>April</option>
                <option value='May' selected>May</option>
                <option value='June' selected>June</option>
                <option value='July' selected>July</option>
                <option value='August' selected>August</option>
                <option value='September' selected>September</option>
                <option value='October' selected>October</option>
                <option value='November' selected>November</option>
                <option value='December' selected>December</option>
              </select>
            </div>

            <div class="year">
              <label>YEAR</label>
              <input type='number' id='DOB-Year' name='dob-year' v-model='Resume.dateOfBirth.year' placeholder='e.g. 2001' required>
            </div>

            <div>
              <label>NATIONALITY</label>
              <input type='text' id='Nationality' name='nationality' v-model='Resume.nationality' placeholder='e.g. India' required>
            </div>

          </div>

          <div class='Website'>

            <div>
              <label>WEBSITE</label>
              <input type='url' id='Website' name='website' v-model='Resume.website' placeholder='e.g. LinkedIn, Github' required>
            </div>

          </div>

        </div>

        <div class='projects'>
          <h2 class='section-header'>Project</h2>
          <p class='subtext'>Provide details about your projects here.</p>

          <div class='project-section' v-for="(UserPro, counter) in Resume.UserProjects"
               v-bind:key="counter">
            <div class='projecttitle-location'>
              <div>
                <label>PROJECT TITLE</label>
                <input type='text' id='ProjectTitle' v-model='UserPro.projectTitle' placeholder='e.g. Senior Developer' required>
              </div>
            </div>

            <div class='startdate-enddate'>
              <div>
                <label>CITY/TOWN</label>
                <input type='text' id='ProjectLocation' v-model='UserPro.projectLocation' placeholder='e.g. Bengaluru' required>
              </div>
              <div>
                <label class='month-label'>START DATE</label>
                <select id='Project-Month-1'  v-model='UserPro.projectStartMonth' >
                  <option value="" selected='selected' disabled hidden>Month</option>
                  <option value='January' selected>January</option>
                  <option value='February' selected>February</option>
                  <option value='March' selected>March</option>
                  <option value='April' selected>April</option>
                  <option value='May' selected>May</option>
                  <option value='June' selected>June</option>
                  <option value='July' selected>July</option>
                  <option value='August' selected>August</option>
                  <option value='September' selected>September</option>
                  <option value='October' selected>October</option>
                  <option value='November' selected>November</option>
                  <option value='December' selected>December</option>
                </select>

                <input type='number' id='Project-Year-1' v-model='UserPro.projectStartYear' placeholder='e.g. 2019' required>
              </div>

              <div>
                <label class='month-label'>END DATE</label>
                <select id='Project-Month-2'  v-model='UserPro.projectEndMonth'>
                  <option value="" selected='selected' disabled hidden>Month</option>
                  <option value='January' selected>January</option>
                  <option value='February' selected>February</option>
                  <option value='March' selected>March</option>
                  <option value='April' selected>April</option>
                  <option value='May' selected>May</option>
                  <option value='June' selected>June</option>
                  <option value='July' selected>July</option>
                  <option value='August' selected>August</option>
                  <option value='September' selected>September</option>
                  <option value='October' selected>October</option>
                  <option value='November' selected>November</option>
                  <option value='December' selected>December</option>
                </select>

                <input type='number' id='Project-Year-2' v-model='UserPro.projectEndYear' placeholder='e.g. 2021' required>
              </div>
            </div>

            <div class='job-description'>

              <label>DESCRIPTION</label>
              <textarea placeholder="Tell more about your project here..." v-model='UserPro.projectDescription' name="description" id="description" cols="115" rows="10" maxlength="300"></textarea>

            </div>
            <button class='Del-btn' @click='deleteProject(counter)'></button>
          </div>
          <button class='Add-btn' @click='addNewProject'></button>
        </div>

        <div class='experience'>

          <h2 class='section-header'>Experience</h2>
          <p class='subtext'>Provide details about your work experience here.</p>
          <div class='experience-section' v-for="(UserExp, counter) in Resume.UserExperience"
               v-bind:key="counter">
            <div class='jobtitle-citytown'>

              <div>
                <label>JOB TITLE</label>
                <input type='text' id='JobTitle' name='jobtitle' v-model='UserExp.jobTitle' placeholder='e.g. Senior Developer' required>
              </div>

              <div>
                <label>CITY/TOWN</label>
                <input type='text' id='JobCityTown' name='jobcitytown' v-model='UserExp.jobLocation' placeholder='e.g. Bengaluru' required>
              </div>

            </div>

            <div class='employer-detail'>

              <div>
                <label>EMPLOYER</label>
                <input type='text' id='Employer' name='employer' v-model='UserExp.jobEmployer' placeholder='e.g. Apple Inc.' required>
              </div>


              <div class='startdate-enddate'>
                <div>
                  <label class='month-label'>START DATE</label>
                  <select id='Job-Month-1' name='job-month' v-model='UserExp.jobStartMonth' >
                    <option value="" selected='selected' disabled hidden>Month</option>
                    <option value='January' selected>January</option>
                    <option value='February' selected>February</option>
                    <option value='March' selected>March</option>
                    <option value='April' selected>April</option>
                    <option value='May' selected>May</option>
                    <option value='June' selected>June</option>
                    <option value='July' selected>July</option>
                    <option value='August' selected>August</option>
                    <option value='September' selected>September</option>
                    <option value='October' selected>October</option>
                    <option value='November' selected>November</option>
                    <option value='December' selected>December</option>
                  </select>

                  <input type='number' id='Job-Year-1' name='job-year' v-model='UserExp.jobStartYear' placeholder='e.g. 2019' required>
                </div>

                <div>
                  <label class='month-label'>END DATE</label>
                  <select id='Job-Month-2' name='job-month' v-model='UserExp.jobEndMonth'>
                    <option value="" selected='selected' disabled hidden>Month</option>
                    <option value='January' selected>January</option>
                    <option value='February' selected>February</option>
                    <option value='March' selected>March</option>
                    <option value='April' selected>April</option>
                    <option value='May' selected>May</option>
                    <option value='June' selected>June</option>
                    <option value='July' selected>July</option>
                    <option value='August' selected>August</option>
                    <option value='September' selected>September</option>
                    <option value='October' selected>October</option>
                    <option value='November' selected>November</option>
                    <option value='December' selected>December</option>
                  </select>

                  <input type='number' id='Job-Year-2' name='job-year' v-model='UserExp.jobEndYear' placeholder='e.g. 2021' required>
                </div>
              </div>

            </div>

            <div class='job-description'>

              <label>DESCRIPTION</label>
              <textarea placeholder="Tell more about your experience here..." name="description" v-model='UserExp.jobDescription' id="description" cols="115" rows="10" maxlength="300"></textarea>

            </div>
              <button class='Del-btn' @click='deleteExperience(counter)'></button>
          </div>
          <button class='Add-btn' @click='addNewExperience'></button>
        </div>

        <div class='edu-qualification'>

          <h2 class='section-header'>Education & Qualifications</h2>
          <p class='subtext'>Provide details about your qualifications here.</p>
          <div class='education-section' v-for="(UserEdu, counter) in Resume.UserEduQualification" v-bind:key="counter">
            <button class='Del-btn' @click='deleteEduQualification(counter)'></button>
            <div class='edutitle-citytown'>
              <div>
                <label>DEGREE</label>
                <input type='text' id='Degree' name='degree' v-model='UserEdu.eduDegree' placeholder="e.g. Bachelor's Degree (Computer Science)" required>
              </div>

              <div>
                <label for='EduCityTown'>CITY/TOWN</label>
                <input type='text' id='EduCityTown' name='educitytown' v-model='UserEdu.eduLocation' placeholder='e.g. Bengaluru' required>
              </div>

            </div>

            <div class='institution-detail'>
              <div>
                <label for='institution'>INSTITUTION</label>
                <input type='text' id='Institution' name='institution' v-model='UserEdu.eduInstitution' placeholder='e.g. Sapthagiri College of Engineering ' required>
              </div>
            </div>

            <div class='startdate-enddate'>

              <div>
                <label class='month-label'>MONTH</label>
                <select id='Edu-Month' name='edu-month' v-model='UserEdu.eduMonth' >
                  <option value="" selected='selected' disabled hidden>Month</option>
                  <option value='January' selected>January</option>
                  <option value='February' selected>February</option>
                  <option value='March' selected>March</option>
                  <option value='April' selected>April</option>
                  <option value='May' selected>May</option>
                  <option value='June' selected>June</option>
                  <option value='July' selected>July</option>
                  <option value='August' selected>August</option>
                  <option value='September' selected>September</option>
                  <option value='October' selected>October</option>
                  <option value='November' selected>November</option>
                  <option value='December' selected>December</option>
                </select>

                <input type='number' id='Edu-Year' name='edu-year' v-model='UserEdu.eduYear' placeholder='e.g. 2023' required>

              </div>
            </div>

            <div>

              <label for="Aggregate">AGGREGATE (CGPA)</label>
              <input type='Number' id=Aggregate name='aggregate' v-model='UserEdu.eduAggregate' placeholder=' e.g. 9.8' required>

            </div>


          </div>
          <button class='Add-btn' @click='addNewEduQualification'></button>
        </div>

        <div class='skills'>

          <div class='skill-section'>
            <h2 class='section-header'>Skills</h2>
            <p class='subtext'>Provide details about your skills here.</p>
            <div class='skill-preview' v-for="(UserSkill, counter) in Resume.userSkills" v-bind:key="counter">
              <div>
                <label>SKILL</label>
                <input type='text' id='Skill' name='skill' v-model='UserSkill.skill' placeholder='e.g. Vanilla JavaScript' required>
              </div>

              <div>
                <label class='Skills-Label'>LEVEL</label>
                <select id='Skill-Level' name='skill-level' v-model='UserSkill.skillLevel' >
                  <option value="" selected='selected' disabled hidden >Select Level</option>
                  <option value='Novice' selected>Novice</option>
                  <option value='Advanced Beginner' selected>Advanced Beginner</option>
                  <option value='Competent' selected>Competent</option>
                  <option value='Proficient' selected>Proficient</option>
                  <option value='Expert' selected>Expert</option>
                </select>
              </div>
              <div>
                <button class='Del-btn' @click='deleteSkill(counter)'></button>
              </div>
            </div>
            </div>
          <button class='Add-btn-skill' @click='addNewSkill'></button>
        </div>

        <div class='interests'>

          <h2 class='section-header'>Interests</h2>
          <p class='subtext'>Mention your hobbies here.</p>
          <div class='Hobbies-Section' v-for="(UserHobby, counter) in Resume.userHobbies" v-bind:key="counter">
            <div>
              <label>HOBBY</label>
              <input type='text' id='Hobbies' name='hobbies' v-model='UserHobby.Hobby' placeholder='e.g. Badminton' required>
            </div>
            <button class='Del-btn' @click='deleteHobby(counter)'></button>
          </div>
          <button class='Add-btn-skill' @click='addNewHobby'></button>
        </div>

        <div class='certification'>

          <h2 class='section-header'>Certifications</h2>
          <p class='subtext'>Mention your certificate here.</p>

          <div class='certificate-section' v-for="(UserCertificate, counter) in Resume.userCertificates" v-bind:key="counter">
            <div class='title-institution'>
              <div>
                <label>TITLE</label>
                <input type='text' id='Certificate' name='certificate' v-model='UserCertificate.title' placeholder='e.g. Machine learning with Python' required>
              </div>

              <div>
                <label>INSTITUTION</label>
                <input type='text' id='Certi-institution' name='certi-institution' v-model='UserCertificate.institution' placeholder='e.g. Udemy' required>
              </div>
              <button class='Del-btn' @click='deleteCertificate(counter)'></button>
            </div>
          </div>
          <button class='Add-btn-skill' @click='addNewCertificate'></button>
        </div>
        <div class='Form-Btn'>
          <button class='confirm-btn' type='submit'></button>
          <button class='discard-btn'></button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import { collection, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Database } from "~/plugins/firebase";
export default {
  name: 'index',
  layout: 'authenticatedLayout',
  data() {
    return {
      Resume: {
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
        address : '',
        zipcode : '',
        nationality: '',
        cityTown : '',
        dateOfBirth : {
          day : '',
          month : '',
          year : ''
        },
        website : '',
        UserProjects : [
          {
            projectTitle : '',
            projectDescription : '',
            projectStartYear : 0,
            projectStartMonth : '',
            projectEndYear : 0,
            projectEndMonth : '',
            projectLocation : '',
          }
        ],
        UserExperience: [
          {
            jobTitle : '',
            jobLocation : '',
            jobEmployer : '',
            jobStartYear : 0,
            jobStartMonth : '',
            jobEndYear : 0,
            jobEndMonth : '',
            jobDescription : ''
          }
        ],
        UserEduQualification: [
          {
            eduDegree : '',
            eduLocation : '',
            eduInstitution : '',
            eduAggregate : '',
            eduMonth : '',
            eduYear : 0
          }
        ],
        userSkills : [
          {
            skill : '',
            skillLevel : ''
          }
        ],
        userHobbies : [
          {
            Hobby : ''
          }
        ],
        userCertificates : [
          {
            title : '',
            institution : ''
          }
        ]
      }
    }
  },
  methods: {
    addNewExperience(){
      this.Resume.UserExperience.push({
        jobTitle : '',
        jobLocation : '',
        jobEmployer : '',
        jobStartYear : 0,
        jobStartMonth : '',
        jobEndYear : 0,
        jobEndMonth : '',
        jobDescription : ''
      })
    },
    deleteExperience(counter){
      this.Resume.UserExperience.splice(counter, 1);
    },
    addNewEduQualification(){
      this.Resume.UserEduQualification.push({
        eduDegree : '',
        eduLocation : '',
        eduInstitution : '',
        eduAggregate : '',
        eduMonth : '',
        eduYear : 0
      })
    },
    deleteEduQualification(counter){
      this.Resume.UserEduQualification.splice(counter, 1);
    },
    addNewSkill(){
      this.Resume.userSkills.push({
        skill : '',
        skillLevel : '',
      })
    },
    deleteSkill(counter){
      this.Resume.userSkills.splice(counter, 1);
    },
    addNewHobby(){
      this.Resume.userHobbies.push({
        Hobby: ''
      })
    },
    deleteHobby(counter){
      this.Resume.userHobbies.splice(counter, 1);
    },
    addNewCertificate(){
      this.Resume.userCertificates.push({
        title: '',
        institution: ''
      })
    },
    deleteCertificate(counter){
      this.Resume.userCertificates.splice(counter, 1);
    },
    addNewProject(){
      this.Resume.UserProjects.push({
        projectTitle: '',
        projectStartYear: 0,
        projectStartMonth: '',
        projectEndYear: 0,
        projectEndMonth: '',
        projectDescription: '',
        projectLocation: ''
      })
    },
    deleteProject(counter){
      this.Resume.UserProjects.splice(counter, 1);
    },
    async executeCreateResume(){
      try{
        const resumeRef = await addDoc(collection(Database, "Resumes"), this.Resume);
        console.log(resumeRef.id);
        await this.addResumeToUser(resumeRef.id);
      }catch (e) {
        console.log(e);
      }
    },
    async addResumeToUser(resumeID){
      await updateDoc(doc(Database, "CSTUsers", this.$store.getters['UserUsername/loadUserUsername']), {
        Resume : arrayUnion({
          id : resumeID,
          createdOn : new Date().getTime()
        })
      }).then(() => {
        console.log("Successfully added", resumeID);
        this.$router.push(`/user/${this.$store.getters["UserUsername/loadUserUsername"]}/resumes/${resumeID}`)
      });
    }
  },
  created() {
    this.$store.dispatch('UserUsername/getUserUsername', this.$store.getters['Authentication/currentUserUID']);
  }
}
</script>

<style lang="scss" scoped>

*{
  margin: 0;
  padding: 0;
}

.main-container{
  width: 850px;
  margin: auto;
}

.resume-form{
  padding: 30px;
}

.personal-details, .experience, .edu-qualification, .skills, .certification, .interests, .projects{
  margin: 10px;
  width: 90%;
  padding: 30px;
  border-radius: 10px;
  outline: none;
  border: 2px #4CC3FF solid;
  background: whitesmoke;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
}

.section-header{
  width: 100%;
  color: rgb(23, 64, 91);
  font-size: 40px;
}

.subtext{
  color: #2a2c3a;
}


input, select{

  width: auto;
  display: inline-block;
  border-radius: 5px;
  border: none;
  background-color: whitesmoke;
  box-sizing: border-box;
  outline: none;
  color: rgba(0, 0, 0, 0.82);
  font-weight: normal;
  font-size: 15px;

}

label{
  color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  margin-top: 10px;
  font-weight: bold;
}

form div { float: left; }
form div label { display: block; }

.name-section, .name-section input, .email-phoneNumber, .email-phoneNumber input, .dob-pob, .dob-pob input, .jobtitle-citytown, .jobtitle-citytown input, .edutitle-citytown, .edutitle-citytown input{
  width: 90%
}

#Address, #Website{
  width: 700px;
}

.year{
  margin-left: 20px;
}

.day{
  width: 10%;
}

.month-label, .Skills-Label{
  margin-left: 5px;
}

#Email, #Degree, #Institution{
  width: 300px;
  margin-right: 10px;
}

#Employer{
  margin-right: 20px;
  width: 200px;
}

#Skill{
  margin-right: 20px;
  width: 170px;
}

#Certificate, #Hobbies{
  width: 300px;
  margin-right: 10px;
}

#Certi-institution{
  width: 400px;
  margin-right: 10px;
}

textarea{
  background: whitesmoke;
  border: none;
  outline: none;
}

.Add-btn{
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 5px;
  background: whitesmoke;
}

.Add-btn:after{
  font-family: FontAwesome, serif;
  content: '\f067';
  cursor: pointer;
  color: #6F7278;
  font-size: 40px;
}

.Add-btn:hover:after, .Add-btn-skill:hover:after{
  background-image: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.Add-btn-skill{
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 5px;
  background: whitesmoke;
}

.Add-btn-skill:after{
  font-family: FontAwesome, serif;
  content: '\f067';
  cursor: pointer;
  color: #6F7278;
  font-size: 20px;
}

.Del-btn{
  margin-top: 5px;
  outline: none;
  border-radius: 50%;
  border: none;
  background: whitesmoke;
  margin-left: 10px;
}

.Del-btn:after{
  font-family: FontAwesome, serif;
  content: '\f00d';
  cursor: pointer;
  color: #a4746e;
  font-size: 15px;
}

.Del-btn:hover:after{
  color: rgba(255, 0, 0, 0.74);
}

.education-section{
  margin-bottom: 30px;
}

.skill-section{
  width: 100%;
}

.skill-preview{
  margin-right: 10px;
  margin-bottom: 10px;
}
.Hobbies-Section{
  width: 100%;
  margin-bottom: 10px;
}

.confirm-btn{
  height: 4.2rem;
  width: 4.2rem;
  -webkit-appearance: none;
  border-radius: 50%;
  border: whitesmoke;
  outline: none;
  display: flex;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
}

.confirm-btn:after{
  font-family: FontAwesome;
  content: '\f00c ';
  font-size: 50px;
  color: #2f5a49;
}

.confirm-btn:hover:after{
  color: #15e38a;
}

.discard-btn{
  height: 4.2rem;
  width: 4.2rem;
  -webkit-appearance: none;
  border-radius: 50%;
  border: whitesmoke;
  outline: none;
  display: flex;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
}

.discard-btn:after{
  font-family: FontAwesome;
  content: '\f00d ';
  font-size: 50px;
  color: #5a2f2f;
}

.discard-btn:hover:after{
  color: #e3151c;
}

.Form-Btn{
  display: flex;
  margin-left: 20px;
  margin-bottom: 30px;
}
#ProjectTitle{
  width: 500px;
}
.Page-Head{
  font-size: 60px;
  font-weight: bold;
  background: #2b3134 linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 40px;
}
</style>
