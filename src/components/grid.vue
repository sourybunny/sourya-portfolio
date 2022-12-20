<template>
 <div class="mainbg">
    <div class="layout-container" style="border-top: 2px solid rgba(255, 255, 255, 0.1);">
      <div
        class="  white--text py-16 px-10 center-align layout-container__inner"
        width="100%"
      >
  <div class="grid">
  <img src="https://picsum.photos/id/1/200/300">
  <img src="https://picsum.photos/id/17/200/400">
  <img src="https://picsum.photos/id/18/200/100">
  <img src="https://picsum.photos/id/109/200/200">
  <img src="https://picsum.photos/id/1069/200/600">
  <img src="https://picsum.photos/id/120/200/150">
  <img src="https://picsum.photos/id/130/200/100">
  <img src="https://picsum.photos/id/203/200/100">
  <img src="https://picsum.photos/id/109/200/200">
  <img src="https://picsum.photos/id/11/200/100">
  <img src="https://picsum.photos/id/119/200/100">
</div>
      </div>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.grid {

   -webkit-column-count: 4;
  -moz-column-count:4;
  column-count: 4;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
   margin: 1.5em;
    padding: 0;
    -moz-column-gap: 1.5em;
    -webkit-column-gap: 1.5em;
    column-gap: 1.5em;
    font-size: .85em;
    // grid-auto-rows: 20px;
}
img {
  width:100%;
}
</style>