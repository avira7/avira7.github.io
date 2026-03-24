export interface NewsUpdate {
  id: string
  title: string
  description: string
  url: string
  date: string
}

export const newsUpdates: NewsUpdate[] = [
  {
    titleParts: [
      { text: "KSCO manuscript in Nat. Comm.", url: "https://www.nature.com/articles/s41467-025-67394-0" },
      { text: " received the 2026 Sigma Xi Best Paper Award", url: null },
    ],
    url: "https://bpb-us-e1.wpmucdn.com/sites.gatech.edu/dist/0/283/files/2026/03/2026_SigmaXi_Research_Award_Winner.pdf",
    date: "[03/23/2026]",
  },
  {
    title: "Submitted manuscript to JCP on grain charging simulations",
    url: "https://arxiv.org/abs/2602.17332",
    date: "[02/19/2026]",
  },
  {
    title: "Manuscript accepted in Nat. Comm. on high-Ti lunar ilmenite",
    url: "https://www.researchsquare.com/article/rs-7190245/v1?redirect=/article/rs-7190245",
    date: "[02/09/2026]",
  },
  {
    title: "Successful defense of PhD thesis!",
    date: "[01/09/2026]",
  },
];
