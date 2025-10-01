import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "GPU-overheat",
        short_name: "GPU-heating",
        description: "Let us overheat GPUs",
        icons: [
          {
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});


//The registerType autoUpdate is not mainly necessary here, but it update to new deployed content without needing to refresh the page
//The injectRegister auto in PWA config basically adds this script to the html file
//<script>
// if ("serviceWorker" in navigator) {
// navigator.serviceWorker.register("/sw.js");
// }
// </script>
