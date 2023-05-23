<template>
  <div>

		<div class="content-box1">
			<div class="main2">
				<ul class="sf-menu2">
					<li>
						<router-link :to="'/pc'">PC</router-link>
						<ul>
							<li><router-link to="/pc/rewiews">Reviews</router-link></li>
							<li><router-link to="/pc/previews">Previews</router-link></li>
							<li>
								<router-link to="/pc/new-releases">New Releases</router-link>
							</li>
							<li><router-link to="/pc/top-games">Top Games</router-link></li>
							<li><router-link to="/pc/all-games">All Games</router-link></li>
							<li class="last1">
								<router-link to="/pc/videos">Videos</router-link>
							</li>
						</ul>
					</li>
					<li><router-link to="/xbox">XBOX</router-link></li>
					<li><router-link to="/wii">Wii</router-link></li>
					<li><router-link to="/ps2">PS2</router-link></li>
					<li><router-link to="/ps3">PS3</router-link></li>
					<li><router-link to="/psp">PSP</router-link></li>
					<li><router-link to="/mobile">Mobile</router-link></li>
				</ul>
				<div class="">
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-primary" type="submit">Buscar</button>
					</form>
				</div>
			</div>
      </div>
	</div>
</template>