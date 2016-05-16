(function(scope) {
  "use strict";

  var util = scope.util;
  window.list = [];

  function Transaction(transaction) {
    Object.keys(transaction)
      .forEach(function(prop) {
        this[prop] = transaction[prop];
      }.bind(this));
  }
  Transaction.prototype = {
    constructor: Transaction,
    formatTime: function() {
      return util.formatTimestamp(this.time);
    },
    formatAmount: function() {
      return util.formatAmount(this.amount, this.currency);
    }
  };

  var server = scope.server;
  server.onAddedTransaction(function(transaction) {
    var trn = new Transaction(transaction.val());
    window.list.push(trn);
  });
})(window);
