import { ROUTER } from "@/utils/constant";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const Modified = new Date();
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL_LOCAL;

  return [
    {
      url: `${BaseUrl}`,
      lastModified: Modified,
    },
    {
      url: `${BaseUrl}${ROUTER.ABOUT_US}`,
      lastModified: Modified,
    },
    {
      url: `${BaseUrl}${ROUTER.CONTACT_US}`,
      lastModified: Modified,
    },
  ];
}
