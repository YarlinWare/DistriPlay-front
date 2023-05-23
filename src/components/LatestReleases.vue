<template>
	<div class="container">
		<div class="row" style="background-color: #121212;">
			<article class="col-11 col-md-8">
				<h4 class="title1" style="color:#fff;">Últimos <span>Lanzamientos</span></h4>
				<div id="" v-if="gameList.length >0">
					<Releases v-for="(item,idx) of gameList" :key="idx" :data="item"/>
				</div>
				<div class="nav"></div>
			</article>

			<article class="col-12 col-md-4 ">
				<div class="row">
					<div class="col-12">
						<h4 class="title1" style="color:#fff;">Últimas <span>revisiones</span></h4>
						<Reviews v-for="(item,idx) of reviews" :key="idx" :data="item" ></Reviews>
						<a style="color:#fff;" class="link3 p9" href="">Ver más<span></span></a>
					</div>
					<div class="col-12">
						<h4 class="title1" style="color:#fff;">Con descuento <span>50%</span></h4>
						<Reviews v-for="(item,idx) of reviews" :key="idx" :data="item"></Reviews>
						<a style="color:#fff;" class="link3 p9" href="">Ver más<span></span></a>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>
<script>
import Releases from '../components/Releases.vue'
import Reviews from '../components/Reviews.vue'

export default {
	components:{
		Releases,
		Reviews,
	},
	data(){
		return{
			gameList:[
				{
					imagen:'page1-img1.jpg',
					titulo:'Excepteur sint occaecat cupidatat non proident',
					publicacion:{
						editor:'ADMINISTRADOR',
						fecha: 'MARZO 9, 2023',
						tags:['PS3','XBOX 360']
					},
					descripcion:`Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
					detalle:'/detalles',
				},
				{
					imagen:'page1-img2.jpg',
					titulo:'Excepteur sint occaecat cupidatat non proident',
					publicacion:{
						editor:'ADMINISTRADOR',
						fecha: 'MARZO 9, 2023',
						tags:['PS3','XBOX 360']
					},
					descripcion:`Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
					detalle:'/detalles',
				},
			],
			reviews:[
				{
					imagen:'page1-img3.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$340.000,00',
					path:''
				},
				{
					imagen:'page1-img4.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$340.000,00',
					path:''
				},
				{
					imagen:'page1-img5.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$340.000,00',
					path:''
				},
			],
			reviews:[
				{
					imagen:'page1-img6.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$170.000,00',
					path:''
				},
				{
					imagen:'page1-img7.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$170.000,00',
					path:''
				},
				{
					imagen:'page1-img8.jpg',
					titulo:'Titulo',
					fecha: 'MARZO 9, 2023',
					valor: '$170.000,00',
					path:''
				},
			]
		}
	}
}
</script>
