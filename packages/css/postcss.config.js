module.exports = (ctx) => ({
  plugins: [
    require("postcss-import"),
    ctx.env === "production" ? require("cssnano")({ preset: "default" }) : false,
  ],
});
