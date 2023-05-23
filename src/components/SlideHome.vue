<template>
  <div>
		<div class="slider">
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img :src="require('@/assets/images/slide-1.jpg')" alt="" />
						<div class="banner">
							<span></span><router-link to="/">Lorem ipsum dolor sit amet</router-link>
						</div>
					</div>
					<div class="carousel-item">
						<img :src="require('@/assets/images/slide-2.jpg')" alt="" />
						<div class="banner">
							<span></span><router-link to="/">Lorem ipsum dolor sit amet</router-link>
						</div>
					</div>
					<div class="carousel-item">
						<img :src="require('@/assets/images/slide-3.jpg')" alt="" />
						<div class="banner">
							<span></span><router-link to="/">Lorem ipsum dolor sit amet</router-link>
						</div>
					</div>
					<div class="carousel-item">
						<img :src="require('@/assets/images/slide-4.jpg')" alt="" />
						<div class="banner">
							<span></span><router-link to="/">Lorem ipsum dolor sit amet</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>