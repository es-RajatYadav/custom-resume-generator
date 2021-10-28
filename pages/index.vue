<template>
  <div class='main-container'>
    <div class='intro-heading'>
      <h1><span id='designed-text-1'>Create a perfect </span><br><span id="designed-text">resume</span></h1>
    </div>
    <div class="paragraph-container">
      <div class="intro-paragraph">
        <p>with our online resume generator in just few easy steps <br> and  Increase your chance of landing a job.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main-container{
  width: 90%;
  margin: auto;
  color: rgb(82, 95, 127);
}
.intro-heading h1{
  text-align: center;
  color: rgba(40, 43, 58, 0.73);
  font-size: 68px;
  margin-top: 110px;
  line-height: 0.95;
}
#designed-text-1{
  font-weight: lighter;
}
#designed-text{
  background-image: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 120px;
}
.paragraph-container{
  width: 90%;
  margin: auto;

}
.intro-paragraph{
  text-align: center;
  font-size: 30px;
  color: rgba(42, 44, 58, 0.58);
  font-weight: lighter;

  margin: 10px;

}
</style>
