(function () {
  'use strict';

  angular
    .module('f321CrmFe')
    .controller('personalNormal', personalNormal);
  /** @ngInject */
  function personalNormal($q, f321Api, toastr, $state) {
    var vm = this;
    vm.params = {
      index: 0,
      size: 10,
      content: {
        keyword: '',
        warehouse: -1
      }
    };
    vm.list = [];
    vm.count = 0;
    vm.getData = function (params) {
      var defer = $q.defer(),
        result = {};
      f321Api.enum$warehouse$type().then(function (res) {
        for (var key in res) {
          if (res[key] == $state.current.text) {
            params.content.warehouse = key;
          }
        }
        return f321Api.peronal$normal(params);
      }, function (err) {
        defer.reject(err);
      }).then(function (res) {
        result = res;
        defer.resolve(result);
      }, function (err) {
        defer.reject(err);
      });
      return defer.promise;
    };
    vm.search = function () {
      vm.getData(vm.params).then(function (res) {
        vm.list = res.pageContent;
        vm.count = res.total;
      }, function (err) {
        toastr.error(err, '出错')
      });
    }
    vm.search();
  }
})();
