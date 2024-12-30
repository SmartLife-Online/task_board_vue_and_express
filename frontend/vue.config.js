module.exports = {
    configureWebpack: {
      devServer: {
        //headers: { "Access-Control-Allow-Origin": "*" }
        proxy: 'localhost:3001'
      }
    }
  };
