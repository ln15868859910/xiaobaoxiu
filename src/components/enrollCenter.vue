<template>
    <ul class="enrollList">
        <li>
            <router-link to="/index/xiaobaoShow">{{xiaobaoShow}}</router-link>
        </li>
        <li>
            <router-link to="/index/consult">{{consult}}</router-link>
        </li>
        <li>
            <router-link to="/index/sell">{{sell}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'enlcen',
  data () {
    return {
      xiaobaoShow: '校宝秀',
      consult: '咨询本',
      sell: '营销中心'
    }
  }
}

</script>

<style>
    .enrollList{
        float: left;
        width: 125px;
        font-size: 14px;
        text-align: center;
        background-color: #2b5997;
        color: white;
    }
    .enrollList li{
        height: 40px;
        line-height: 40px;
    }
     a{
        display: inline-block;
        width: 125px;
        color: #a0b5d1;
        font-size: 14px;
    }
   .enrollList  li:hover{
        background: #21467a;
        border-left: 5px solid white;
    }
</style>
