<template>
    <ul class="innerAdminList">
        <li>
            <router-link to="/index/frame">组织架构</router-link>
        </li>
        <li>
            <router-link to="/index/staff">{{staff}}</router-link>
        </li>
        <li>
            <router-link to="/index/staffNotice">{{staffNotice}}</router-link>
        </li>
        <li>
            <router-link to="/index/salary">{{salary}}</router-link>
        </li>
        <li>
            <router-link to="/index/property">{{property}}</router-link>
        </li>
        <li>
            <router-link to="/index/textBook">{{textBook}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'innerAdmin',
  data () {
    return {
      staff: '员工',
      staffNotice: '员工通知',
      salary: '工资',
      property: '财务',
      textBook: '教材'
    }
  }
}
</script>

<style>
    .innerAdminList{
        float: left;
        width: 125px;
        font-size: 14px;
        text-align: center;
        background-color: #2b5997;
        color: white;
    }
    .innerAdminList li{
        height: 40px;
        line-height: 40px;
    }
     a{
        display: inline-block;
        width: 125px;
        color: #a0b5d1;
        font-size: 14px;
    }
   .innerAdminList  li:hover{
        background: #21467a;
        border-left: 5px solid white;
    }
</style>
