"use strict";

module.exports = function(nce){
  if(!nce) throw new Error("You have to specify the nce object");
  
//# Mandantory Setup:
  var ext = nce.createExtension({package: require("./package.json")});
  
  ext.on("install", function(event){ // set options, but don't run or make available in nce
    //# Seting extension-config:
    ext.config.route = ext.config.route || "/"+ext.name;
    /* nce-mongoose-store
    ext.config.modelName = ext.config.modelName || ext.name;
    */
    /* nce-winston
    ext.config.logger = ext.config.logger || {};
    */
    /* nce-i18n
    ext.config.i18n = ext.config.i18n || {};
    ext.config.i18n.dictionary = ext.config.i18n.dictionary || require("./i18n");
    ext.config.i18n.defaultLanguage = ext.config.i18n.defaultLanguage || "en";
    */
    /* nce-user
    ext.config.user = ext.config.user || {};
    ext.config.user.onlyAllow = ext.config.user.onlyAllow || {usergroup:"admin", user:"admin"};
    */

    //# Declarations and settings:
    /* nce-winston
    ext.logger = nce.getExtension("winston").createLogger(ext.name, ext.config.logger);
    */
    
    /* nce-mongoose-store
    var store = nce.getExtension("mongoose-store");
    var schema = store.createSchema({});
    schema.methods.xy = function(){};
    schema.statics.xy = function(cb){cb();};
    ext.model = store.createModel(ext.config.modelName, schema);
    */
    /* nce-i18n
    nce.getExtension("i18n").createDictionary(ext.name, ext.config.i18n.dictionary, ext.config.i18n.defaultLanguage );
    */
    /* nce-amd
    var amd = nce.getExtension("amd");
    amd.define({{js-name}}, {{code}}, function(err){
      if(err) ext.logger.error("Error defining amd", err);
    });
    */
  });
  
  ext.on("uninstall", function(event){ // undo installation
    //# Undeclare:
    /* nce-winston
    nce.getExtension("winston").removeLogger(ext.name);
    delete ext.logger;
    */
    /* nce-mongoose-store
    store.removeModel(ext.config.modelName);
    delete ext.model;
    */
    /* nce-i18n
    nce.getExtension("i18n").removeDictionary(ext.name);
    */
    /* nce-amd
    // Be carefull with this statement!
    var amd = nce.getExtension("amd");
    amd.undefine({{js-name}}, function(err){
      if(err) ext.logger.error("Error undefining amd", err);
    });
    */
  });
  
  ext.on("activate", function(event){ // don't set options, just run, make available in nce or register.
	  if(nce.requestMiddlewares.indexOf(router) === -1) {
		  nce.requestMiddlewares.push(router);
	  }
  });
  
  ext.on("deactivate", function(event){ // undo activation
	  if(nce.requestMiddlewares.indexOf(router) !== -1) {
		  nce.requestMiddlewares.splice(nce.requestMiddlewares.indexOf(router), 1);
	  }
  });
  
//# Private declarations:
  var router = function(req, res, next){
    if(req.url.substr(0, backend.config.route.length+ext.config.subRoute.length) === backend.config.route+ext.config.subRoute) {
      try{throw new Error("Dummy extension");} catch(e){console.error(e)};

      /* nce-user
      var authCb = function(err, user){
        if(err) return next(err);
        // Your logic here...
      };
      var unauthCb = function(err, user){
        // Not authorized
        if(err) return next(err);
        // Your logic here...
      };
      return nce.getExtension("user").checkAuthentication(req, res, authCb, unauthCb, ext.config.user.onlyAllow);
      */
    }

    return next();
  };

//# Public declarations and exports:
  ext.dummy = function(opts, cb){
    // a dummy method here...
  }
  
  return ext;
}