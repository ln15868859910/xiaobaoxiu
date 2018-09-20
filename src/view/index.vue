<template>
  <div id="app">
    <div class="headerTop clear">
      <div class="topLeft">
        <img :src="header.imgurl" class="bigLogo">
        <span class="title">{{header.TBU_test}}</span>
      </div>
      <div class="topRight">
        <ul class="topNav">
          <li>
            <i class="admin"></i>
            <span>{{header.admin}}</span>
          </li>
          <li>{{header.org_center}}</li>
          <li>{{header.onlineCus}}</li>
          <li>{{header.help}}</li>
          <li>{{header.backOld}}</li>
          <li>{{header.exit}}</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="navLeft test-1">
        <ul class="leftTitle scrollbar" @mouseover="flag = false">
          <li :class="flag ? 'init' : ''">
            <span class="img_work"></span>
            <router-link to='/index/workspace'>{{leftTitle.workSpace}}</router-link>
          </li>
          <li @click="enroll">
            <span class="img_enroll"></span>
            <a>{{leftTitle.enroll}}</a>
            <!-- <i :class=" icon_enroll?iconClose:iconOpen"></i> -->
            <i :class="isClick.isClickEnroll?'':'close'"></i>
          </li>
          <enroll-center v-show="iconKind.icon_enroll" />
          <li>
            <span class="img_deal"></span>
            <a>{{leftTitle.deal}}</a>
          </li>
          <li @click="officeCenter">
            <span class="img_office"></span>
            <a>{{leftTitle.edu}}</a>
            <!-- <i :class=" icon_officeCenter?iconClose:iconOpen"></i> -->
            <i :class="isClick.isClickOffice?'':'close'"></i>
          </li>
          <office-center v-show="iconKind.icon_officeCenter" />
          <li>
            <span class="img_data"></span>
            <a>{{leftTitle.repdata}}</a>
          </li>
          <li>
            <span class="img_xbshow"></span>
            <a>{{leftTitle.xsshow}}</a>
          </li>
          <li @click="innerAdmin">
            <span class="img_ineradmin"></span>
            <a>{{leftTitle.manage}}</a>
            <!-- <i :class="icon_innerAdmin?iconClose:iconOpen"></i> -->
            <i :class="isClick.isClickInner?'':'close'"></i>
          </li>
          <inner-admin v-show="iconKind.icon_innerAdmin" />
          <li @click="addval">
            <span class="img_attend"></span>
            <a>{{leftTitle.add}}</a>
            <!-- <i :class=" icon_addval?iconClose:iconOpen"></i> -->
            <i :class="isClick.isClickAddval?'':'close'"></i>
          </li>
          <add-val v-show="iconKind.icon_addval" />
        </ul>
      </div>
      <div class="right_content test-1">
        <div class="scrollbar">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import enrollCenter from '../components/enrollCenter'
import addVal from '../components/addVal'
import innerAdmin from '../components/innerAdmin'
import officeCenter from '../components/officeCenter'
export default {
  name: '',
  components: {
    enrollCenter, addVal, innerAdmin, officeCenter
  },
  data () {
    return {
      flag: true,
      iconKind: {
        icon_enroll: false,
        icon_addval: false,
        icon_innerAdmin: false,
        icon_officeCenter: false
      },

      header: {
        imgurl: '../../static/img/logo-big.png',
        TBU_test: 'TBU测试-免升专 （专业版）',
        admin: '管理员（管理员）',
        org_center: '机构中心',
        onlineCus: '在线客服',
        help: '帮助中心',
        backOld: '返回旧版',
        exit: '退出'
      },
      leftTitle: {
        workSpace: '工作台',
        enroll: '招生中心',
        deal: '办理中心',
        edu: '教务中心',
        repdata: '报表中心',
        xsshow: '校宝秀',
        manage: '内部管理',
        add: '增值服务'
      },
      isClick: {
        isClickEnroll: false,
        isClickAddval: false,
        isClickInner: false,
        isClickOffice: false
      }
    }
  },
  watch: {

  },
  created () {
    this.iconKind.icon_enroll = false
    this.iconKind.icon_addval = false
    this.iconKind.icon_innerAdmin = false
    this.iconKind.icon_officeCenter = false
  },
  methods: {
    enroll () {
      this.iconKind.icon_enroll = !this.iconKind.icon_enroll
      this.isClick.isClickEnroll = !this.isClick.isClickEnroll
      console.log(this.isClick.isClickEnroll)
    },
    addval () {
      this.iconKind.icon_addval = !this.iconKind.icon_addval
      this.isClick.isClickAddval = !this.isClick.isClickAddval
    },
    innerAdmin () {
      this.iconKind.icon_innerAdmin = !this.iconKind.icon_innerAdmin
      this.isClick.isClickInner = !this.isClick.isClickInner
    },
    officeCenter () {
      this.iconKind.icon_officeCenter = !this.iconKind.icon_officeCenter
      this.isClick.isClickOffice = !this.isClick.isClickOffice
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  display: inline-block;
  float: right;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin-left: -20px;
  color: white;
}
.clear{
  content: '';
  clear: both;
  display: table;
}
.headerTop{
  width: 100%;
  height: 5%;
  line-height: 40px;
  background-color:#3766a6;
  color: white;
}
.topLeft{
  float: left;
  height: 40px;
  width: 20%;
  line-height: 40px;
  font-size: 14px;
}
.topRight{
  float: right;
  width: 70%;
}
.topNav{
  float: right;
}
.topNav li{
  width: 100px;
  text-align: center;
  float: left;
}
.topNav li:nth-child(1){
  width: 120px;
}
.bigLogo{
  margin: 5px 20px;
  width: 40px;
  height: 40px;
  float: left;
}
.admin{
  display:block;
  margin-right: 5px;
  margin-top: 8px;
  float: left;
  width:18px;
  height: 21px;
  background-image: url('../../static/img/page-icon85.png');
}
.navLeft{
  box-sizing: border-box;
  padding-top: 20px;
  float: left;
  height: 100%;
  width: 125px;
  font-size: 14px;
  text-align: center;
  background-color: #3766a6;
  color: white;
  overflow:auto;
}
.leftTitle{
  height: 40px;
  line-height: 40px;
}
.leftTitle span{
  display: inline-block;
  width: 20px;
  height: 19px;
}
.img_work{
  background-image: url('../../static/img/new-left/leftNav_icon1.png');
}
.img_enroll{
   background-image: url('../../static/img/new-left/leftNav_icon99.png');
}
.img_deal{
   background-image: url('../../static/img/new-left/leftNav_icon12.png');
}
.img_office{
   background-image: url('../../static/img/new-left/leftNav_icon100.png');
}
.img_xbshow{
   background-image: url('../../static/img/new-left/leftNav_icon19.png');
}
.img_data{
   background-image: url('../../static/img/new-left/leftNav_icon23.png');
}
.img_attend{
   background-image: url('../../static/img/new-left/leftNav_icon24.png')
}
.img_ineradmin{
   background-image: url('../../static/img/new-left/leftNav_icon101.png');
}
.icon{
  margin-top: 15px;
  display: block;
  float: right;
  width: 7px;
  height: 5px;
  background-image: url("../../static/img/ico.gif");
  background-repeat: no-repeat;
  background-position:  100px 100px;
}
.init{
  background: #2b5997;
  border-left: 5px solid white;
}
.leftTitle li:hover{
  background: #2b5997;
  border-left: 5px solid white;
}
li:hover{
 background: #21467a;
  cursor: pointer;
}
i{
  margin-top: 15px;
  margin-right: -70px;
  float: right;
  width: 7px;
  height: 5px;
  display: inline-block;
  background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEN0VFNzY5RjlDODExRTdBRjM0RTU1NEVGMTNBRTdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEN0VFNzZBRjlDODExRTdBRjM0RTU1NEVGMTNBRTdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ3RUU3NjdGOUM4MTFFN0FGMzRFNTU0RUYxM0FFN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ3RUU3NjhGOUM4MTFFN0FGMzRFNTU0RUYxM0FFN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ooPX4AAAAWUlEQVR42mL4//8/AxSzA/FiKA0WY0CS7P0PAb3oks5A/A8q+Q/KB0sKAfGT/6gAxBcCSa7+jx2sZgRrxwGYgHg1EP/HglcTtBOvawn6ExZCS4GYAyYGEGAAtjriUcgGYqsAAAAASUVORK5CYII=")
}
.close{
  transform:rotate(180deg)
 }
.iconClose{
  background-position:  0 0 ;
}
.iconOpen{
  background-position:  0 0 ;
}
.content{
  width: 100%;
  height: 94%;
}
.right_content{
  overflow: auto;
  height: 100%;
}
.test-1::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px #2b5997;
        background: #2b5997;
    }
.test-1::-webkit-scrollbar-thumb:hover{
  background:#1b3352;
}
.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
</style>
