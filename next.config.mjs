import {withPWA} from "next/pwa"
import runtimeCaching from 'next-pwa/cache'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactRestrictMode : true,
    experimental : {
        appDir : true,
    },
};

export default withPWA({
    ...nextConfig,
    pwa : {
        dest : 'public',
        disable : process.env.NODE_ENV === "development",
        runtimeCaching,
    }
});
