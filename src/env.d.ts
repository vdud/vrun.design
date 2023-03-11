interface ImportMetaEnv {
	readonly VITE_MONGO_URL: string
	readonly VITE_APP_ID: string
	readonly VITE_APP_KEY: string
	readonly VITE_APP_SECRET: string
	readonly VITE_APP_CLUSTER: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
