import { recentWebsiteProjects, websiteProjects } from "./website-projects";

// Existing approved records, separate from the fictional North/Form/Still demos.
export const campaignWebsiteProjects = [
  ...recentWebsiteProjects,
  ...websiteProjects.filter((project) =>
    ["Herb & Soul", "Almond Vet Care"].includes(project.name),
  ),
  {
    name: "Bear Media",
    category: "Our own website",
    description:
      "The Bear Media website brings together website design, photography, video and content services, with project galleries and a clear enquiry route.",
    src: "/assets/website-campaign/bear-media-website.webp",
    alt: "Bear Media homepage with creative services, project previews and an introduction to Garry",
    url: "https://bear-media.com/",
  },
] as const;
