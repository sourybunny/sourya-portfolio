<template>
    <div class="tangram main--tangram align-center">
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
.tangram {
  // position: absolute;
  transform: translate(15%,15%);
  width: 100%;
  height: 380px;
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
  -moz-transform: translate(160px, -2px) rotate(180deg);
  -o-transform: translate(160px, -2px) rotate(180deg);
  -ms-transform: translate(160px, -2px) rotate(180deg);
  -webkit-transform: translate(160px, -2px) rotate(180deg);
  transform: translate(160px, -2px) rotate(180deg);
}
.triangle--purple {
  -moz-transform: translate(79px, 79px) rotate(270deg);
  -o-transform: translate(79px, 79px) rotate(270deg);
  -ms-transform: translate(79px, 79px) rotate(270deg);
  -webkit-transform: translate(79px, 79px) rotate(270deg);
  transform: translate(79px, 79px) rotate(270deg);
}
.square--red {
  -moz-transform: translate(122px, 66px) rotate(45deg);
  -o-transform: translate(122px, 66px) rotate(45deg);
  -ms-transform: translate(122px, 66px) rotate(45deg);
  -webkit-transform: translate(122px, 66px) rotate(45deg);
  transform: translate(122px, 66px) rotate(45deg);
}
.triangle--turquoise {
  -moz-transform: translate(150px, 109px) rotate(45deg);
  -o-transform: translate(150px, 109px) rotate(45deg);
  -ms-transform: translate(150px, 109px) rotate(45deg);
  -webkit-transform: translate(150px, 109px) rotate(45deg);
  transform: translate(150px, 109px) rotate(45deg);
}
.triangle--yellow {
  -moz-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.triangle--orange {
  -moz-transform: translate(54px, -52px) rotate(90deg);
  -o-transform: translate(54px, -52px) rotate(90deg);
  -ms-transform: translate(54px, -52px) rotate(90deg);
  -webkit-transform: translate(54px, -52px) rotate(90deg);
  transform: translate(54px, -52px) rotate(90deg);
}
.parallelogram--green {
  -moz-transform: translate(45px, 146px) rotate(-45deg) skew(45deg);
  -o-transform: translate(45px, 146px) rotate(-45deg) skew(45deg);
  -ms-transform: translate(45px, 146px) rotate(-45deg) skew(45deg);
  -webkit-transform: translate(45px, 146px) rotate(-45deg) skew(45deg);
  transform: translate(45px, 146px) rotate(-45deg) skew(45deg);
}
.triangle--pink {
  // border-left: 50px solid #ffbd49;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
}
.triangle--purple {
  // border-left: 50px solid #fb3066;

  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
}
.triangle--turquoise {
  // border-left: 70px solid #009af4;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
}
.triangle--yellow {
  // border-left: 100px solid #690ca8;

  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
.triangle--orange {
  // border-left: 100px solid #ca028b;

  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
}

.square {
  position: absolute;
  transition: all 2s;
}
.square--red {
  // background-color: #fe7d4c;

  width: 70px;
  height: 70px;
}

.parallelogram {
  position: absolute;
  transition: all 2s;
}
.parallelogram--green {
  // background-color: #7ac864;

  width: 64px;
  height: 70px;
}
// butterfly
.intro:hover  .tangram .triangle--pink {
  -moz-transform: translate(118px, 240px) rotate(240deg);
  -o-transform: translate(118px, 240px) rotate(240deg);
  -ms-transform: translate(118px, 240px) rotate(240deg);
  -webkit-transform: translate(118px, 240px) rotate(240deg);
  transform: translate(118px, 240px) rotate(240deg);
}
.intro:hover  .tangram  .triangle--purple {
  -moz-transform: translate(147px, 130px) rotate(150deg);
  -o-transform: translate(147px, 130px) rotate(150deg);
  -ms-transform: translate(147px, 130px) rotate(150deg);
  -webkit-transform: translate(147px, 130px) rotate(150deg);
  transform: translate(147px, 130px) rotate(150deg);
}
.intro:hover  .tangram .square--red {
  -moz-transform: translate(139px, 204px) rotate(15deg);
  -o-transform: translate(139px, 204px) rotate(15deg);
  -ms-transform: translate(139px, 204px) rotate(15deg);
  -webkit-transform: translate(139px, 204px) rotate(15deg);
  transform: translate(139px, 204px) rotate(15deg);
}

.intro:hover  .tangram  .triangle--turquoise {
  -moz-transform: translate(244px, 196px) rotate(160deg);
  -o-transform: translate(244px, 196px) rotate(160deg);
  -ms-transform: translate(244px, 196px) rotate(160deg);
  -webkit-transform: translate(244px, 196px) rotate(160deg);
  transform: translate(244px, 196px) rotate(160deg);
}
.intro:hover  .tangram  .triangle--yellow {
  -moz-transform: translate(70px, 50px) rotate(-30deg);
  -o-transform: translate(70px, 50px) rotate(-30deg);
  -ms-transform: translate(70px, 50px) rotate(-30deg);
  -webkit-transform: translate(70px, 50px) rotate(-30deg);
  transform: translate(70px, 50px) rotate(-30deg);
}
.intro:hover  .tangram  .triangle--orange {
  -moz-transform: translate(263px, 42px) rotate(205deg);
  -o-transform: translate(263px, 42px) rotate(205deg);
  -ms-transform: translate(263px, 42px) rotate(205deg);
  -webkit-transform: translate(263px, 42px) rotate(205deg);
  transform: translate(263px, 42px) rotate(205deg);
}
.intro:hover  .tangram  .parallelogram--green {
  -moz-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -o-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -ms-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  -webkit-transform: translate(222px, 163px) rotate(70deg) skew(45deg);
  transform: translate(222px, 163px) rotate(70deg) skew(45deg);
}
.intro:hover .tangram{
  transform: rotate(-30deg);
}
.intro:hover  .my-story{
    visibility:visible;
    opacity: 1;

}
.intro:hover  .my-work{
    visibility:visible;
    opacity: 1;

}
.intro:hover  .my-process{
    visibility:visible;
    opacity: 1;

}
</style>
