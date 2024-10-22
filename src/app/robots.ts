import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = `https://dalail-khairat-demo.vercel.app`;

    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
