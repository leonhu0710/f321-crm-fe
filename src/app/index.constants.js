/* global malarkey:false, moment:false */
(function () {
  'use strict';
  angular
    .module('f321CrmFe')
    .constant('base_uri', 'http://120.27.199.44:9999/f321-crm/')
    .constant('moment', moment)
    .constant('common_url', [
      {
        groupIco: 'icon-default',
        key: 'login',
        url: '/login',
        cache: false,
        templateUrl: 'app/views/common-login.html',
        controller: 'login',
        controllerAs: 'login'
      },
      {
        groupIco: 'icon-default',
        key: 'home',
        url: '/',
        cache: false,
        templateUrl: 'app/views/common-home.html',
        controller: 'home',
        controllerAs: 'home'
      },
      {
        group: '系统设置',
        groupIco: 'icon-cog',
        text: '编辑用户',
        key: 'a-modify',
        url: '/admin/modify/',
        params: {
          user: null
        },
        cache: false,
        templateUrl: 'app/views/admin-new.html',
        controller: 'adminNew',
        controllerAs: 'an'
      },
      {
        group: '客户资源管理',
        groupIco: 'icon-user',
        text: '客户详情',
        key: 'customer',
        url: '/customer/:id',
        cache: false,
        templateUrl: 'app/views/global-customer.html',
        controller: 'globalCustomer',
        controllerAs: 'gc'
      }
    ])
    .constant('short_url', [
      /*个人设置中心*/{
        group: '个人设置中心',
        groupIco: 'icon-cog',
        text: '修改密码',
        key: 's-password',
        url: '/setting/password',
        cache: false,
        templateUrl: 'app/views/setting-password.html',
        controller: 'settingPassword',
        controllerAs: 'password'
      }, {
        group: '个人设置中心',
        groupIco: 'icon-cog',
        text: '个人资料',
        key: 's-profile',
        url: '/setting/profile',
        cache: false,
        templateUrl: 'app/views/setting-profile.html',
        controller: 'settingProfile',
        controllerAs: 'profile'
      }, {
        group: '系统设置',
        groupIco: 'icon-cog',
        text: '用户列表',
        key: 'a-list',
        url: '/admin/list',
        cache: false,
        templateUrl: 'app/views/admin-list.html',
        controller: 'adminList',
        controllerAs: 'al'
      }, {
        group: '系统设置',
        groupIco: 'icon-cog',
        text: '新用户录入',
        key: 'a-new',
        url: '/admin/new',
        cache: false,
        templateUrl: 'app/views/admin-new.html',
        controller: 'adminNew',
        controllerAs: 'an'
      }, /*个人资源管理*/{
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '普通库',
        key: 'p-normal',
        url: '/personal/normal',
        cache: false,
        templateUrl: 'app/views/personal-normal.html',
        controller: 'personalNormal',
        controllerAs: 'pn'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '服务库',
        key: 'p-service',
        url: '/personal/service',
        cache: false,
        templateUrl: 'app/views/personal-normal.html',
        controller: 'personalNormal',
        controllerAs: 'pn'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '待续库',
        key: 'p-continues',
        url: '/personal/continues',
        cache: false,
        templateUrl: 'app/views/personal-normal.html',
        controller: 'personalNormal',
        controllerAs: 'pn'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '重点客户',
        key: 'p-important',
        url: '/personal/important',
        cache: false,
        templateUrl: 'app/views/personal-important.html',
        controller: 'personalImportant',
        controllerAs: 'pi'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '普通库TS设置',
        key: 'p-normal-ts',
        url: '/personal/normal-ts',
        cache: false,
        templateUrl: 'app/views/personal-normal-ts.html',
        controller: 'personalNormalTs',
        controllerAs: 'pnts'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '待续库TS设置',
        key: 'p-continues-ts',
        url: '/personal/continues-ts',
        cache: false,
        templateUrl: 'app/views/personal-normal-ts.html',
        controller: 'personalNormalTs',
        controllerAs: 'pnts'
      }, {
        group: '个人资源管理',
        groupIco: 'icon-puzzle-piece',
        text: '资料修改申请',
        key: 'p-modify',
        url: '/personal/modify',
        cache: false,
        templateUrl: 'app/views/personal-modify.html',
        controller: 'personalModify',
        controllerAs: 'pm'
      }, /*公共资源管理*/{
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '冲突库',
        key: 'g-conflict',
        url: '/global/conflict',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '公海库',
        key: 'g-commons',
        url: '/global/commons',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '接管库',
        key: 'g-receive',
        url: '/global/receive',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '成交过公海客户',
        key: 'g-commons-pay',
        url: '/global/commons-pay',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '自动放弃客户',
        key: 'g-renounce',
        url: '/global/renounce',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '公共资源管理',
        groupIco: 'icon-globe',
        text: '过陈列期客户',
        key: 'g-out',
        url: '/global/out',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, /*客户资源管理*/{
        group: '客户资源管理',
        groupIco: 'icon-user',
        text: '客户管理',
        key: 'c-list',
        url: '/client/list',
        cache: false,
        templateUrl: 'app/views/personal-customer.html',
        controller: 'personalCustomer',
        controllerAs: 'pcc'
      }, {
        group: '客户资源管理',
        groupIco: 'icon-user',
        text: '客户检索',
        key: 'c-search',
        url: '/client/search',
        cache: false,
        templateUrl: 'app/views/client-search.html',
        controller: 'clientSearch',
        controllerAs: 'cs'
      }, {
        group: '客户资源管理',
        groupIco: 'icon-user',
        text: '新录入客户',
        key: 'c-new',
        url: '/client/new',
        cache: false,
        templateUrl: 'app/views/client-new.html',
        controller: 'clientNew',
        controllerAs: 'cn'
      },{
        group: '客户资源管理',
        groupIco: 'icon-user',
        text: '地勤申请列表',
        key: 'c-partner',
        url: '/partner/list',
        cache: false,
        templateUrl: 'app/views/partner-list.html',
        controller: 'partnerList',
        controllerAs: 'pl'
      }, /*CTI中心*/{
        group: 'CTI中心',
        groupIco: 'icon-comments',
        text: '电话录音',
        key: 'cti-record',
        url: '/cti/record',
        cache: false,
        templateUrl: 'app/views/cti-record.html',
        controller: 'ctiRecord',
        controllerAs: 'cr'
      }, /*培训中心*/ {
        group: '培训中心',
        groupIco: 'icon-tags',
        text: '文本教材',
        key: 't-text',
        url: '/training/text',
        cache: false,
        templateUrl: 'app/views/training-text.html',
        controller: 'trainingText',
        controllerAs: 'tt'
      }, {
        group: '培训中心',
        groupIco: 'icon-tags',
        text: '优质录音案例',
        key: 't-audio',
        url: '/training/audio',
        cache: false,
        templateUrl: 'app/views/training-audio.html',
        controller: 'trainingAudio',
        controllerAs: 'ta'
      }, {
        group: '培训中心',
        groupIco: 'icon-tags',
        text: '销售狂人专辑',
        key: 't-video',
        url: '/training/video',
        cache: false,
        templateUrl: 'app/views/training-video.html',
        controller: 'trainingVideo',
        controllerAs: 'tv'
      }, {
        group: '培训中心',
        groupIco: 'icon-tags',
        text: '沟通故障报告',
        key: 't-report',
        url: '/training/report',
        cache: false,
        templateUrl: 'app/views/training-report.html',
        controller: 'trainingReport',
        controllerAs: 'tr'
      }, {
        group: '培训中心',
        groupIco: 'icon-tags',
        text: '录音分析报告',
        key: 't-audio-report',
        url: '/training/audio-report',
        cache: false,
        templateUrl: 'app/views/training-audio-report.html',
        controller: 'trainingAudioReport',
        controllerAs: 'tar'
      }
    ]);
})();
