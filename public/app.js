(function(scope) {
  "use strict";

  var util = scope.util;
  var TransactionView = scope.TransactionView;
  var Transaction = scope.Transaction;

  var List = {
    element: document.querySelector('.transactions-list'),
    _list: [],
    push: function(transaction) {
      var view = new TransactionView(transaction);
      this._list.push(view);
      this.element.appendChild(view.render());
    }
  };

  var server = scope.server;
  server.onAddedTransaction(function(snapshot) {
    var trn = new Transaction(snapshot.val());
    List.push(trn);
  });
})(window);
