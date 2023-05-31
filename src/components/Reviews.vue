<template>
	<div>
		<div class="page1-box2" v-if="data">
			<figure class="page1-img3">
				<img :src="require(`@/assets/images/${data.imagen}`)" alt="" />
			</figure>
			<div class="extra-wrap">
				<span class="date">{{data.fecha}} </span>
				<h5>{{data.titulo}}</h5>
				<small>{{ data.valor }}</small>
			</div>
			<button class="btn btn-primary">Adquirir</button>
			<div class="clear"></div>
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
				fecha:'',
				titulo:'',
				valor:'',
			}
		}
	}
}
</script>
<style scoped>
p, h5, small{
	color:#fff;
}
</style>