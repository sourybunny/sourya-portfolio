<template>
  <div class="cell">
		<div class="logo logo-butterfly"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cell {
	flex-basis: 50%;
	background:#024f9c;
	// padding: 1.5em;
}
.logo, .logo:before, .logo:after {
	animation-duration: 4s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
.logo {
	// margin: 0 auto 1.5em auto;
	position: relative;
	width: 2.2em;
	height: 2.2em;
  
}
.logo:before, .logo:after {
	background: currentColor;
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 50%;
	transform-origin: 50% 100%;	
	clip-path: polygon(0 0,100% 0,50% 100%);
	-webkit-clip-path: polygon(0 0,100% 0,50% 100%);
	background: #fff;
//   background: #77A1D3;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.logo-butterfly {
	animation-name: butterflyA;
}
.logo-butterfly:before {
	animation-name: butterflyB;
}
.logo-butterfly:after {
	animation-name: butterflyC;
}
@keyframes butterflyA {
	from, to { transform: translateY(0) }
	50% { transform: translateY(25%) }
}
@keyframes butterflyB {
	from, 50%, to { transform: rotate(60deg) }
	25%, 75% { transform: rotate(120deg) }
}
@keyframes butterflyC {
	from, 50%, to { transform: rotate(300deg) }
	25%, 75% { transform: rotate(240deg) }
}



</style>