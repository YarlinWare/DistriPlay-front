<template>
	<div>
		<div class="container_12">
			<div class="wrapper">
				<article class="grid_9">
					<h4 class="title1" style="color:#fff;">Últimos <span>Lanzamientos</span></h4>
					<div id="pager" v-if="gameList.length >0">
						<Releases v-for="(item,idx) in gameList" :key="idx" :data:="item"/>
					</div>
					<div class="nav"></div>
				</article>
			</div>
		</div>
	</div>
</template>
<script>
import Releases from '../components/Releases.vue'

export default {
	components:{
		Releases,
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
				{
					imagen:'page1-img3.jpg',
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
					imagen:'page1-img4.jpg',
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
					imagen:'page1-img5.jpg',
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
					imagen:'page1-img6.jpg',
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
					imagen:'page1-img7.jpg',
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
					imagen:'page1-img8.jpg',
					titulo:'Excepteur sint occaecat cupidatat non proident',
					publicacion:{
						editor:'ADMINISTRADOR',
						fecha: 'MARZO 9, 2023',
						tags:['PS3','XBOX 360']
					},
					descripcion:`Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
					detalle:'/detalles',
				},
			]
		}
	}
}
</script>
