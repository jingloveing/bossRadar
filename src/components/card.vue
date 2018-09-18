<template>
    <div class="card">
      <div class="main">
          <img src="../assets/photo.jpg" alt="" class="photo">
        <div class="des flex">
          <div class="des-left flex">
            <h3>Boss王先生</h3>
            <span>前端</span>
            <span>易呼智能科技有限公司</span>
            <span>1232432543</span>
            <span>23432534@qq.com</span>
          </div>
            <img src="../assets/eq.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "card"
    }
</script>

<style scoped>
  .card{
    text-align: center;
    min-height: calc(100vh - 3.67rem);
    background: #f9f9f9;
  }
  .card:before{
    display: table;
    content: "";
  }
  .main{
    width:29.58rem;
    margin: 1rem auto 0;
    box-shadow:0rem 0rem .5rem rgba(0,122,168,0.15);
  }
.photo{
  width: 100%;
  height:32.5rem;
  border-radius:6px;
}
.des{
  padding: 0 1rem 1rem;
}
.des-left{
  flex-direction: column;
  align-items: flex-start;
}
  .des span{
    font-size:1.08rem;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:1.67rem;
  }
  .des h3{
    font-size:1.33rem;
    font-weight:500;
    color:rgba(34,34,34,1);
    line-height:3.5rem;
  }
  .des img{
    width:9.17rem;
    height:9.17rem;
  }
</style>
