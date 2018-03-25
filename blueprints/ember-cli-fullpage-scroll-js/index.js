/* eslint-env node */
module.exports = {
  description: 'Exports fullpage.js library',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackageToProject('fullpage.js');
  }
};

