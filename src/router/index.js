import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index.vue'
import xiaobaoShow from '../pages/enrollCenter/xiaobaoShow.vue'
import consult from '../pages/enrollCenter/consult.vue'
import sell from '../pages/enrollCenter/sell.vue'
import index from '../view/index.vue'
import arrLesson from '../pages/officeCenter/arrLesson.vue'
import class1 from '../pages/officeCenter/class1.vue'
import lesson from '../pages/officeCenter/lesson.vue'
import lessonTable from '../pages/officeCenter/lessonTable.vue'
import memClass from '../pages/officeCenter/memClass.vue'
import oneToOne from '../pages/officeCenter/oneToOne.vue'
import student from '../pages/officeCenter/student.vue'
import timeCard from '../pages/officeCenter/timeCard.vue'
import frame from '../pages/innerManage/frame.vue'
import property from '../pages/innerManage/property.vue'
import salary from '../pages/innerManage/salary.vue'
import staff from '../pages/innerManage/staff.vue'
import staffNotice from '../pages/innerManage/staffNotice.vue'
import textBook from '../pages/innerManage/textBook.vue'
import getVal from '../pages/addVal/getVal.vue'
import xiaobaoschool from '../pages/addVal/xiaobaoschool.vue'
import workspace from '../pages/workspace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/workspace'
    },
    {
      path: '/index',
      redirect: '/workspace',
      component: index,
      children: [
        { path: 'workspace', component: workspace },

        { path: 'getVal', component: getVal },
        { path: 'xiaobaoschool', component: xiaobaoschool },

        { path: 'frame', component: frame },
        { path: 'property', component: property },
        { path: 'salary', component: salary },
        { path: 'staff', component: staff },
        { path: 'staffNotice', component: staffNotice },
        { path: 'textBook', component: textBook },

        { path: 'xiaobaoShow', component: xiaobaoShow },
        { path: 'consult', component: consult },
        { path: 'sell', component: sell },
        { path: 'class1', component: class1 },
        { path: 'arrLesson', component: arrLesson },
        { path: 'lesson', component: lesson },
        { path: 'lessonTable', component: lessonTable },
        { path: 'memClass', component: memClass },
        { path: 'oneToOne', component: oneToOne },
        { path: 'student', component: student },
        { path: 'timeCard', component: timeCard }
      ]
    }
  ]
})
