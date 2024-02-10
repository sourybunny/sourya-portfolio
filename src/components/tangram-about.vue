<template>
  <div class="tangram-about align-center">
    <div class="triangle triangle--pink"></div>
    <div class="triangle triangle--purple"></div>
    <div class="square square--red"></div>
    <div class="triangle triangle--turquoise"></div>
    <div class="triangle triangle--yellow"></div>
    <div class="triangle triangle--orange"></div>
    <div class="parallelogram parallelogram--green"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tangram-about {
  // position: absolute;
  // transform: translate(15%,15%);
  width: 100%;
  height: 320px;
  // height: 450px;
  // top: 150px;
  // left: 150px;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  -ms-transition: all 1s;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.triangle {
  width: 0;
  height: 0;
  position: absolute;
  transition: all 2s;
  // opacity: 0.8;
}

.triangle--pink {
  border-left: 50px solid #f5f5f2;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
}
.triangle--purple {
  border-left: 50px solid #f5f5f2;

  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
}
.triangle--turquoise {
  border-left: 70px solid #0162ac;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
}
.triangle--yellow {
  border-left: 100px solid #0162ac;

  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
.triangle--orange {
  border-left: 100px solid #e74919;

  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
}

.square {
  position: absolute;
  transition: all 2s;
}
.square--red {
  background-color: #ffcc01;

  width: 70px;
  height: 70px;
}

.parallelogram {
  position: absolute;
  transition: all 2s;
}
.parallelogram--green {
  background-color: #ffcc01;

  width: 64px;
  height: 70px;
}
// butterfly
.tangram-about .triangle--pink {
  -moz-transform: translate(118px, 240px) rotate(240deg);
  -o-transform: translate(118px, 240px) rotate(240deg);
  -ms-transform: translate(118px, 240px) rotate(240deg);
  -webkit-transform: translate(118px, 240px) rotate(240deg);
  transform: translate(118px, 240px) rotate(240deg);
}
.tangram-about .triangle--purple {
  -moz-transform: translate(147px, 130px) rotate(150deg);
  -o-transform: translate(147px, 130px) rotate(150deg);
  -ms-transform: translate(147px, 130px) rotate(150deg);
  -webkit-transform: translate(147px, 130px) rotate(150deg);
  transform: translate(147px, 130px) rotate(150deg);
}
.tangram-about .square--red {
  -moz-transform: translate(139px, 204px) rotate(15deg);
  -o-transform: translate(139px, 204px) rotate(15deg);
  -ms-transform: translate(139px, 204px) rotate(15deg);
  -webkit-transform: translate(139px, 204px) rotate(15deg);
  transform: translate(139px, 204px) rotate(15deg);
}

.tangram-about .triangle--turquoise {
  -moz-transform: translate(244px, 196px) rotate(160deg);
  -o-transform: translate(244px, 196px) rotate(160deg);
  -ms-transform: translate(244px, 196px) rotate(160deg);
  -webkit-transform: translate(244px, 196px) rotate(160deg);
  transform: translate(244px, 196px) rotate(160deg);
}
.tangram-about .triangle--yellow {
  -moz-transform: translate(70px, 50px) rotate(-30deg);
  -o-transform: translate(70px, 50px) rotate(-30deg);
  -ms-transform: translate(70px, 50px) rotate(-30deg);
  -webkit-transform: translate(70px, 50px) rotate(-30deg);
  transform: translate(70px, 50px) rotate(-30deg);
}
.tangram-about .triangle--orange {
  -moz-transform: translate(263px, 42px) rotate(205deg);
  -o-transform: translate(263px, 42px) rotate(205deg);
  -ms-transform: translate(263px, 42px) rotate(205deg);
  -webkit-transform: translate(263px, 42px) rotate(205deg);
  transform: translate(263px, 42px) rotate(205deg);
}
.tangram-about .parallelogram--green {
  -moz-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -o-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -ms-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -webkit-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  transform: translate(222px, 163px) rotate(70deg) skew(45deg);
}

.about:hover .parallelogram--green {
  transform: translate(78px, 145px) rotate(45deg) skew(-45deg);
}
.about:hover .triangle--orange {
  transform: translate(120px, -50px) rotate(225deg);
}
.about:hover .triangle--yellow {
  transform: translate(140px, 55px) rotate(180deg);
}
.about:hover .triangle--turquoise {
  transform: translate(70px, -30px) rotate(315deg);
}
.about:hover .square--red {
  transform: translate(120px, -72px) rotate(340deg);
}
.about:hover .triangle--purple {
  transform: translate(85px, 205px) rotate(0deg);
}
.about:hover .triangle--pink {
  transform: translate(220px, 250px) rotate(135deg);
}
</style>
