<template>
  <NavBar />
  <DropDownNav />
  <div class="about">
    <div class="about-image">
		<img src="../assets/pikachugif.gif" alt="">
	</div>
	<div class="about-me">
		<h1>HELLO</h1>
	</div>
  </div>
</template>
<script setup>
  import NavBar from '../components/NavBar.vue';
  import DropDownNav from '../components/DropDownNav.vue';
</script>

<style>
.about {
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 1rem;
}
.about-image,
.about-me {
width: 50%;
padding: 1rem;
}
.about-image img {
width: 100%;
border-radius: 50%;
}

@media screen and (max-width: 790px) {
	.about {
	flex-direction: column;
	}
	.about-image {
	width: 100%;
	padding: 1rem;
	}
	.about-me {
	width: 100%;
	}
}
</style>
