module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mq.sass";`,
        data: `@import "@/assets/styles/global.sass";`
      }
    }
  }
}
