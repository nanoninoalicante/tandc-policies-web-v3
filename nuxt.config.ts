// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          "https://graphql.contentful.com/content/v1/spaces/app2ux3l8qni/environments/master?access_token=O9rDrPc3MXh15k88xsxLhpcjN_Z_faLf14oF2FKzQV8",
      },
    },
  },
});
