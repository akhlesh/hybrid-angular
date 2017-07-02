/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  //Default version should be latest one;
  var ngVersion = '',
    ngRouterVersion = '';
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      // Copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core' + ngVersion + '/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common' + ngVersion + '/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler' + ngVersion + '/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser' + ngVersion + '/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + ngVersion + '/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http' + ngVersion + '/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router' + ngRouterVersion + '/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms' + ngVersion + '/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade' + ngVersion + '/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade' + ngVersion + '/bundles/upgrade-static.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript': 'npm:typescript@2.0.3/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/