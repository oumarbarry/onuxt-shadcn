import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "latest",
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },

  experimental: { typedPages: true },

  modules: [
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "nuxt-lucide-icons",
    "@nuxt/fonts",
    "@dxup/nuxt",
  ],

  eslint: { config: { standalone: false } },
  shadcn: { prefix: "" },
  lucide: { namePrefix: "" },
  fonts: { defaults: { weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] } }, // ['100 900']
})
