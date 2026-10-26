import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Delphi Cinema",
    description: "Built the operating model for a neighbourhood cinema, then led the build of its ticketing site.",
    image: "/images/make-delphi.jpg",
    imageAlt: "The Delphi Cinema website next to a printed ticket",
    gallery: [
      {
        src: "/images/detail-delphi.jpg",
        alt: "The Delphi Cinema website next to a printed ticket",
        width: 2000,
        height: 1500,
      },
    ],
    meta: "Jimmy client · Toronto · 2026",
    body: "A neighbourhood cafe and cinema in Toronto. I built the model for how it scales (cafe, tickets, memberships, break-even by the day), then the website: pick a movie, pick a time, buy. Three clicks, no seat maps. Build done, launch next.",
    role: "Built the financial model; ran the website project and built alongside Quin, my technical business partner, who led development",
  },

  {
    title: "Album.Cards",
    description: "Physical artist merch with digital content built in.",
    image: "/images/make-albumcards.jpg",
    imageAlt: "A fan on the grass holds up an album card with a black-and-white crosswalk photo",
    gallery: [
      {
        src: "/images/albumcards-fan.jpg",
        alt: "A fan on the grass holds up an album card with a black-and-white crosswalk photo",
        width: 1919,
        height: 1079,
      },
      {
        src: "/images/albumcards-pitch.jpg",
        alt: "The Album.Cards pitch page: the card is a key.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/albumcards-cards.jpg",
        alt: "Seven artists' cards: Poolboy, Edwin Raphael, tessita, Nicholas Cangiano, computer may cry, Sara-Danielle",
        width: 1440,
        height: 899,
      },
      {
        src: "/images/albumcards-studio.jpg",
        alt: "The Album.Cards studio on a phone, adding photos and notes behind a card",
        width: 760,
        height: 1520,
      },
      {
        src: "/images/albumcards-beach.jpg",
        alt: "An Album.Card held up on a beach",
        width: 1200,
        height: 1600,
      },
    ],
    meta: "Cartes Album Inc. · Montreal · 2026",
    body: "The card is a key. A fan taps it on a phone and it opens the artist's world: the record first, then whatever gets built behind it. We print the cards ourselves and the app is live in the stores.",
    role: "Equity partner: product strategy, go-to-market and the finances; Quin leads development. I built the pitch page and the outreach system.",
    link: {
      label: "See the pitch",
      href: "https://albumcards-server-staging-m8gbh.ondigitalocean.app/pitch/",
    },
  },

  {
    title: "Narrative raves",
    description: "I write short sci-fi stories and DJ parties built around their worlds.",
    image: "/images/make-raves.jpg",
    imageAlt: "DJing in front of a projected illustrated world",
    gallery: [
      {
        src: "/images/detail-raves.jpg",
        alt: "DJing in front of a projected illustrated world",
        width: 1600,
        height: 900,
      },
    ],
    meta: "Personal · ongoing",
    body: "Short sci-fi stories written to a soundtrack. Music, community, technology, mostly. The one in progress is Sauna Dog: a dog who loves to sauna gets wrapped in a world beyond his understanding. Printed novelette, visual loops, a three-hour set, then a rave.",
    role: "Writer and DJ",
  }

];
