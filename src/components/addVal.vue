<template>
    <ul class="addValList">
        <li>
            <router-link to="/index/getVal">{{getVal}}</router-link>
        </li>
        <li>
            <router-link to="/index/xiaobaoschool">{{xiaobaoschool}}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'addVal',
  data () {
    return {
      getVal: '收银宝',
      xiaobaoschool: '校宝学院'
    }
  }
}
</script>

<style>

    .addValList{
        margin: 0;
        padding: 0;
        float: left;
        width: 125px;
        font-size: 14px;
        text-align: center;
        background-color: #2b5997;
        color: white;
    }
    .addValList li{
        height: 40px;
        line-height: 40px;
    }
    a{
        display: inline-block;
        color: #a0b5d1;
        width: 125px;
        font-size: 14px;
    }
 .addValList li:hover{
        background: #21467a;
        border-left: 5px solid white;
    }
</style>
