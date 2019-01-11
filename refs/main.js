import Vue from 'vue';
import VueRouter from 'vue-router';
//require('dm-file-uploader');
window.loggedInUser;
import App from './App.vue';
import dashboard from './components/dashboard.vue';
import viewer from './components/viewer.vue';
import clients from './components/clients.vue';
import campaignList from './components/campaignList.vue';
import projectList from './components/projectList.vue';

Vue.use(VueRouter);

// routing

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'root',
    component: App,
    children: [{
        path: '/clients',
        name: 'clients',
        component: clients
      },
      {
        path: '/:client',
        name: 'campaign-list',
        component: campaignList
      },
      {
        path: '/:client/:campaign',
        name: 'project-list',
        component: projectList
      },
      {
        path: '/:client/:campaign/:project',
        name: 'project',
        component: dashboard
      },
      {
        path: '/:client/:campaign/:project/:unit',
        name: 'unit',
        component: viewer
      }
    ]
  }, ]
});

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus;
    }
  }
});

// Vue.component('comment',comment);

const app = new Vue({
  router
}).$mount('#app');