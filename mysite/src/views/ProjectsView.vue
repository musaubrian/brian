<template>
    <div>
        <NavBar />
        <DropDownNav />
        <div class="projects-container">
            <h2> Still in progress...</h2>	
        </div>
    </div>
</template>

<script setup>
    import NavBar from '../components/NavBar.vue'
    import DropDownNav from '../components/DropDownNav.vue'
</script>

<style>
.projects-container{
	margin: 2rem;
}
</style>
