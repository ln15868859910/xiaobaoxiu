<template>
    <ul class="officeCenterlList">
        <li>
            <router-link to="/index/student">{{student}}</router-link>
        </li>
        <li>
            <router-link to="/index/class1">{{class1}}</router-link>
        </li>
        <li>
            <router-link to="/index/oneToOne">{{oneToOne}}</router-link>
        </li>
        <li>
            <router-link to="/index/arrLesson">{{arrLesson}}</router-link>
        </li>
        <li>
            <router-link to="/index/lessonTable">{{lessonTable}}</router-link>
        </li>
        <li>
            <router-link to="/index/memClass">{{memClass}}</router-link>
        </li>
        <li>
            <router-link to="/index/timeCard">{{timeCard}}</router-link>
        </li>
        <li>
            <router-link to="/index/lesson">{{lesson}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'officeCenter',
  data () {
    return {
      student: '学员',
      class1: '班级',
      oneToOne: '一对一',
      arrLesson: '排课',
      lessonTable: '课程表',
      memClass: '记上课',
      timeCard: '磁卡考勤',
      lesson: '课程'
    }
  }
}
</script>

<style>
    .officeCenterlList{
        float: left;
        width: 125px;
        font-size: 14px;
        text-align: center;
        background-color: #2b5997;
        color: white;
    }
    .officeCenterlList li{
        height: 40px;
        line-height: 40px;
    }
     a{
         display: inline-block;
         width: 125px;
        color: #a0b5d1;
        font-size: 14px;
    }
   .officeCenterlList   li:hover{
        background: #21467a;
        border-left: 5px solid white;
    }
</style>
