import { BASE_URL_LOCAL } from "@/utils/constant";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${BASE_URL_LOCAL}/sitemap.xml`,
  };
}
