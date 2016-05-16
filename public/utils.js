(function(scope) {
  "use strict";

  function formatAmount(amount, currency) {
    return '<span class="amount">' +
      (currency && '<span class="currency">' + currency + '</span>' || '') +
      amount + '</span>';
  }

  function formatTimestamp(time) {
    var date = new Date(time);
    return '<p class="timestamp">' + date + '</p>';
  }

  scope.util = {
    formatAmount: formatAmount,
    formatTimestamp: formatTimestamp
  };
})(window);
