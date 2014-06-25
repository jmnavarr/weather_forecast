define(['handlebars'], function(Handlebars) {

this["Weather"] = this["Weather"] || {};
this["Weather"]["Forecast"] = this["Weather"]["Forecast"] || {};

this["Weather"]["Forecast"]["listView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <tr>\r\n    <th>Day</th>\r\n    <th colspan=\"2\">Forecast</th>\r\n  </tr>\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.rows), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<tr>\r\n      <td>\r\n        ";
  if (helper = helpers.datetime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datetime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n      </td>\r\n      <td class=\"weathericon\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weather), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </td>\r\n      <td>\r\n        <span class=\"boldtext\">High:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.temp)),stack1 == null || stack1 === false ? stack1 : stack1.max)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " &deg;F\r\n        <span class=\"boldtext\">Low:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.temp)),stack1 == null || stack1 === false ? stack1 : stack1.min)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " &deg;F\r\n      </td>\r\n  </tr>\r\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <img src=\"http://openweathermap.org/img/w/";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".png\"></img>\r\n        ";
  return buffer;
  }

  buffer += "<table class=\"table\" width=\"100%\">\r\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rows), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</table>\r\n";
  return buffer;
  });

return this["Weather"]["Forecast"];

});