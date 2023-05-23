<template>
	<div>
			<div class="page1-box1 row">
				<div class="col-12">
					<figure class="">
						<img :src="require(`@/assets/images/${data.imagen}`)" alt="" />
					</figure>
					<span>{{data.titulo}}</span>
				</div>
				<div class="col-12">
					<div class="inner3">
						{{data.publicacion.editor}}, <span>{{data.publicacion.fecha}}</span>
					</div>
					<div class="inner4" v-for="(item, idx) in data.publicacion.tags" :key="idx">
						<a class="link1" href="#">{{item}}</a>
					</div>
					<div class="clear"></div>
				</div>
				<div class="inner5 col-12">
					<p class="py-5 ">
						{{data.descripcion}}
						<a class="link3" :href="data.detalle"
							>Leer más <span></span
						></a>
					</p>
				</div>
			</div>
	</div>
</template>
<script>
export default{
	props:{
		data:{
			require:true,
			type:Object,
			default:{
				imagen:'page1-img1.jpg',
					titulo:'Excepteur sint occaecat cupidatat non proident',
					publicacion:{
						editor:'ADMINISTRADOR',
						fecha: 'MARZO 9, 2023',
						tags:['PS3','XBOX 360']
					},
					descripcion:`Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
					detalle:'/detalles',
			}
		}
	}
}
</script>
<style scoped>
p{
	color:#fff;
}
</style>