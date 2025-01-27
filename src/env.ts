import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		// AUTH SECRET
	},
	client: {
		NEXT_PUBLIC_BACKEND_URL: z.string().min(1),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
	},
});
