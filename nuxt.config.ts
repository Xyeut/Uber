// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["@/assets/scss/fonts.scss", "@/assets/scss/default.scss"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/functions.scss";',
				},
			},
		},
	},
});

// vite: {
// 		css: {
// 			preprocessorOptions: {
// 				scss: {
// 					additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/functions.scss";',
// 				},
// 			},
// 		},
// 	},
// 	css: ["@/assets/scss/fonts.scss", "@/assets/scss/default.scss"],
