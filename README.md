{
  "name": "h5",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "dev": "vue-cli-service serve",
    "lint": "vue-cli-service lint",
    "pkg": "vue-cli-service pkg"
  },
  "dependencies": {
    "@antv/g6": "^4.6.16",
    "core-js": "^3.8.3",
    "d3": "^7.6.1",
    "default-passive-events": "^2.0.0",
    "element-ui": "^2.15.9",
    "lodash": "^4.17.21",
    "moment": "^2.29.4",
    "vue": "^2.6.14",
    "vue-router": "^3.5.1",
    "vuex": "^3.6.2"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-unit-jest": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-standard": "^6.1.0",
    "@vue/test-utils": "^1.1.3",
    "@vue/vue2-jest": "^27.0.0-alpha.2",
    "babel-jest": "^27.0.6",
    "babel-plugin-component": "^1.1.1",
    "eslint": "^7.32.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-vue": "^8.0.3",
    "jest": "^27.0.5",
    "less": "^4.0.0",
    "less-loader": "^8.0.0",
    "lint-staged": "^11.1.2",
    "vue-template-compiler": "^2.6.14"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
}
