<template>
	<div class="about">
		<div class="about-image">
			<img src="../assets/person_.svg" alt="">
		</div>
		<div class="about-me">
			<p>
			I'm Ernest, a software engineering student
			interested in web development and
			</p>
			<RouterLink to="/contact" class="button">
				Reach me
			</RouterLink>
		</div>
  	</div>
</template>

<style>

    @import '@/assets/base.css';

.about {
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 1rem;
}

.about-me {
	width: 50%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.about-image {
	width: 50%;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.about-image img {
	width: 80%;
	padding: 2rem;
}

.about-me p {
	padding: 1rem;
	font-size: 1.3rem;
}
.button {
	width: 50%;
	padding: 0.9rem;
	border: none;
	font-size: 1.3rem;
	font-weight: 650;
	border-radius: 20px;
	border: 3px solid var(--color-text-black);
	background-color: transparent;
	text-decoration: none;
	color: var(--color-text-black);
	display: flex;
	justify-content: center; 
	transition: 400ms;
}

.button:hover {
	background-color: var(--color-background-black);
	color: var(--color-text-white-soft);
	transition: 400ms;
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
	.button {
			font-size: 1.2rem;
	}
}
</style>
