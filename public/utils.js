(function(scope) {
  "use strict";

  function formatAmount(amount, currency) {
    return '<var class="amount">' +
      (currency && '<span class="currency">' + currency + '</span>' || '') +
      amount + '</var>';
  }

  function formatTimestamp(time) {
    var date = new Date(time);
    return '<time class="timestamp">' + date + '</time>';
  }

  function getCategoryId(category) {
    return category.toLowerCase().replace(/\s/g, '-');
  }

  function getLocationUrl(location) {
    return location.toLowerCase().replace(/\s/g, '+');
  }

  scope.util = {
    formatAmount: formatAmount,
    formatTimestamp: formatTimestamp,
    getCategoryId: getCategoryId,
    getLocationUrl: getLocationUrl
  };
})(window);
