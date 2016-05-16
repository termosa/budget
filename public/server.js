(function(scope) {
  "use strict";

  var settings = scope.settings;
  var reference = new Firebase(settings.firebaseHost);
  var transactions = reference.child('transactions');

  function addTransaction(transaction) {
    var time = transaction.time || Date.now();
    var priority = 0 - time;
    return transactions.push()
      .setWithPriority({
        title: transaction.title || null,
        time: time,
        category: transaction.category || null,
        amount: transaction.amount || null,
        currency: transaction.currency || null,
        description: transaction.description || null,
        location: transaction.location || null
      }, priority);
  }

  function onAddedTransaction(callback) {
    transactions
      .startAt()
      .on('child_added', callback);
  }

  scope.server = {
    reference: reference,
    addTransaction: addTransaction,
    onAddedTransaction: onAddedTransaction
  };
})(window);
