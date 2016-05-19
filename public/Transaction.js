(function(scope) {
  "use strict";

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

  scope.Transaction = Transaction;
})(window);
