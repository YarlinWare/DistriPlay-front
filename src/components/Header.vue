<template>
	<div>
    <header>
      <div class="head-box1">
    	<div class="main">
            <!-- <nav>
              <ul class="sf-menu">
                  <li><a href="index.html">Home</a>
                  	<ul>
                        <li><a href="more.html">About us</a></li>
                        <li><a href="more.html">Services</a></li>
                        <li><a href="more.html">Archive</a></li>
                        <li><a href="more.html">FAQs</a></li>
                    </ul>
                  </li>
                  <li><a href="index-1.html">Reviews</a></li>
                  <li><a href="index-2.html">News</a></li>
                  <li><a href="index-3.html">Videos</a></li>
                  <li><a href="index-4.html">Blog</a></li>
                  <li><a class="active" href="index-5.html">Contacts</a></li>
              </ul>
          </nav> -->
          <div class="d-flex">
          	<router-link :to="'/login'" class="btn btn-primary mx-1" >Ingresar</router-link>
            <router-link :to="'/register'" class="btn btn-primary p6 mx-1">Registrar</router-link>
          </div>
          <div class="clear"></div>
      </div>
    </div>
    	<div class="main d-flex">
        <router-link to="/">
          <figure class="page1-img1"><img :src="require('@/assets/images/logo-1.png')" style="width: 14rem;" alt=""></figure>
        </router-link>
        <div class="clear"></div>
      </div>
    </header>
	</div>
</template>
