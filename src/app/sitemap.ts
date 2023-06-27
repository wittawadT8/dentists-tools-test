import { BASE_URL_LOCAL, ROUTER } from "@/utils/constant";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL_LOCAL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL_LOCAL}${ROUTER.ABOUT_US}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL_LOCAL}${ROUTER.CONTACT_US}`,
      lastModified: new Date(),
    },
  ];
}
