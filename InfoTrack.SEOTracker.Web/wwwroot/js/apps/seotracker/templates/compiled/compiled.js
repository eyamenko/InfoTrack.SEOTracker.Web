this["InfoTrack"] = this["InfoTrack"] || {};
this["InfoTrack"]["SEOTracker"] = this["InfoTrack"]["SEOTracker"] || {};
this["InfoTrack"]["SEOTracker"]["Templates"] = this["InfoTrack"]["SEOTracker"]["Templates"] || {};
this["InfoTrack"]["SEOTracker"]["Templates"]["Menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn-group\" role=\"group\">\n    <a href=\"/seotracker/latest\" id=\"latest\" type=\"button\" class=\"btn btn-default\">Latest Result</a>\n    <a href=\"/seotracker/all-time\" id=\"all-time\" type=\"button\" class=\"btn btn-default\">All Time Results</a>\n</div>";
},"useData":true});
this["InfoTrack"]["SEOTracker"]["Templates"]["PositionListItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"index-container\">"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</span><span class=\"text-container\">"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});