
export interface InspirationItemTS {
  id: string;
  title: string;
  description?: string;
  image: string;
  timeToRead?: string;
  linkText: string;
  link: string;
}

export const inspirationItems: InspirationItemTS[] = [
  {
    id: "summer2023",
    title: "9 Trending Ideas for your Summer 2023 Corporate Events",
    image:
      "https://planned-cms-staging.imgix.net/_800xAUTO_crop_center-center_none_ns/Summer-events-2023-thumb-1c.jpg",
    timeToRead: "5 min",
    linkText: "Read the article",
    link: "#",
  },
  {
    id: "purslane",
    title: "Meet the caterer leading the way for sustainable events",
    description:
      "The best of both worlds for stellar events and sustainability: Purslane is the caterer and mixologist turning heads in New York.",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Purslane-thumbnail-2.jpg",
    timeToRead: "5 min",
    linkText: "Read the article",
    link: "#",
  },
  {
    id: "event-summit",
    title: "Missed the Future of the Event Industry Summit? Here are our takeaways.",
    description:
      "Seven experts gave their take on where the industry is at, and where it's headed during the fourth edition of the summit.",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Future-of-the-event-industry.webp",
    timeToRead: "5 min",
    linkText: "Read the article",
    link: "#",
  },
];
