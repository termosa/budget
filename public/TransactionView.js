(function(scope) {
  "use strict";

  function TransactionView(transaction) {
    this.transaction = transaction;
  }

  TransactionView.prototype.render = function() {
    var t = this.transaction;
    var data = {
      categoryId: util.getCategoryId(t.category),
      category: t.category,
      title: t.title,
      amount: t.formatAmount(),
      timestamp: t.formatTime(),
      description: t.description || '',
      locationUrl: util.getLocationUrl(t.location),
      locationName: t.location
    };

    var node = document.createElement('div');
    node.classList.add('transaction');
    node.innerHTML = Object.keys(data)
      .reduce(function(html, prop) {
        var propMatch = new RegExp('{{' + prop + '}}', 'g');
        return html.replace(propMatch, data[prop]);
      }, this._template);
    return node;
  };

  TransactionView.prototype._template =
    "<h2 class=\"title\">" +
      "<span class=\"categories\">[<a href=\"#{{categoryId}}\">{{category}}</a>]</span>" +
      "{{title}}" +
      "{{amount}}" +
    "</h2>" +
    "{{timestamp}}" +
    "<p class=\"description\">{{description}}</p>" +
    "<a href=\"{{locationUrl}}\" target=\"_blank\">{{locationName}}</a>";

  scope.TransactionView = TransactionView;
})(window);
