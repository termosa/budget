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

    var node = document.createElement('article');
    node.classList.add('transaction');
    node.innerHTML = Object.keys(data)
      .reduce(function(html, prop) {
        var propMatch = new RegExp('{{' + prop + '}}', 'g');
        return html.replace(propMatch, data[prop]);
      }, this._template);
    return node;
  };

  TransactionView.prototype._template =
    "<ul role=\"group\" class=\"categories\">" +
      "<li><a href=\"#{{categoryId}}\">{{category}}</a></li>" +
    "</ul>" +
    "<h1 class=\"title\">{{title}}</h1>" +
    "{{amount}}" +
    "{{timestamp}}" +
    "<footer class=\"description\">{{description}}</footer>" +
    "<address><a href=\"{{locationUrl}}\" target=\"_blank\">{{locationName}}</a></address>";

  scope.TransactionView = TransactionView;
})(window);
