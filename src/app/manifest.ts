import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cognitive Psychology — A Complete Reference",
    short_name: "Cog Psych",
    description:
      "A comprehensive reference to cognitive psychology: perception, attention, memory, learning, language, thinking, development, neuroscience, and modern applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#c43b2d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
