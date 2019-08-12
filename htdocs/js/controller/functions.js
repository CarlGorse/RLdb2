Controller.prototype.functions = function() {}

Functions.prototype.getCountDescription = function(count, description) {
    var result = count;
    result += description;
    if (count != 1) result += "s";
}