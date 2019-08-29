<template>
  <div class="ui-border-t tab">
    <router-link to="/home" active-class="active">首页</router-link>
    <router-link to="/collect" active-class="active">收藏</router-link>
    <router-link to="/add" active-class="active">添加</router-link>
    <router-link to="/list" active-class="active">列表</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab{
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: rem(200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .active{
    color: red;
  }
  a{
    font-size: 20px;
    width:  33.3333%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
