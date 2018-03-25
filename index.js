'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-fullpage-scroll-js',
  
  included: function(app) {
    this._super.included(app);
    app.import('vendor/jquery.fullpage.js');
    app.import('vendor/jquery.fullpage.min.css');
    app.import('vendor/jquery.fullpage.extensions.min.js');
        
  },
  treeForVendor(tree) {
    let fullpageJSPath = path.join(this.app.project.root, 'node_modules', 'fullpage.js', 'dist');
    let vendorTree = new Funnel(fullpageJSPath, {
      files: ['jquery.fullpage.js', 'jquery.fullpage.min.css','jquery.fullpage.extensions.min.js']
    });
    return vendorTree;
},
};