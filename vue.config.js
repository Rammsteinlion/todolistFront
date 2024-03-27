// vue.config.js
module.exports = {
    // Other Vue CLI options...
    chainWebpack: (config) => {
      config.plugin('define').tap((args) => {
        const vueProdFlag = args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'];
        if (!vueProdFlag) {
          args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true;
        }
        return args;
      });
    }
  }
  