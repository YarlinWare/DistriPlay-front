<template>
  <div>
    <section class="row justify-content-center" id="content">
      <div class="content-box2">
        <SlideHome></SlideHome>
      </div>
      <div class="col-12 col-sm-12 col-md-8 mb-5 pb-5 p7" style="margin-top: -2rem;">
        <LatestReleases/>
      </div>
    </section>
  </div>
</template>

<script>
import SlideHome from '../components/SlideHome.vue'
import LatestReleases from '../components/LatestReleases.vue'
export default {
  name: "Home",
	components:{
		SlideHome,
		LatestReleases,
	}
};
</script>

