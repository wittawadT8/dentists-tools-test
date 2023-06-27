import { ROUTER } from "@/utils/constant";
import { Metadata } from "next";
import React from "react";
import Metajson from "@/metadataKeywords/about-us.json";

export const metadata: Metadata = {
  title: {
    absolute: Metajson.title,
  },
  description: "This is the about",
  keywords: Metajson.keywords,
  alternates: {
    canonical: ROUTER.ABOUT_US,
    languages: {
      "th-TH": `/th${ROUTER.ABOUT_US}`,
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

type Props = {};

export default function AboutUs({}: Props) {
  return <div>About Us</div>;
}
