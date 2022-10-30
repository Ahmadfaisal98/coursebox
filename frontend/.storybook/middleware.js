const { createProxyMiddleware } = require("http-proxy-middleware");

const expressMiddleWare = (router) => {
  router.use(
    "/_next/image",
    createProxyMiddleware({
      target: "https://coursebox-ahmad.vercel.app",
      changeOrigin: true,
    })
  );
};

module.exports = expressMiddleWare;
