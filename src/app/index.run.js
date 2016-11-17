(function () {
  'use strict';
  angular
    .module('f321CrmFe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($timeout, $rootScope, $cookies, $state, toastr) {
    $rootScope.$on('$stateChangeStart',
      function (event, toState) {
        if (toState.key != 'login' && !$cookies.get('profile')) {
          event.preventDefault();
          toastr.warning('你的会话已经断开,请重新登录', '警告');
          $state.go('login');
        } else if (toState.key == 'login') {
          if ($cookies.get('profile') && $cookies.get('autoLogin')) {
            event.preventDefault();
            toastr.info('系统已自动登录完成', '提示');
            $state.go('home');
          }
        }
      });
    $timeout(function () {
      // Tooltip 提示信息
      $('[data-rel=tooltip]').tooltip();
    });
  }

})();