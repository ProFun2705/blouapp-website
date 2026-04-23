export type CountryCalculator = {
  slug: string;
  name: string;
  currencyCode: string;
  currencySymbol: string;
  locale: string;
  defaultPackPrice: number;
  priceAsOf: string;
  priceSource: { name: string; url: string };
  smokingPrevalence: string;
  legalAgePurchase: string;
  hotlines: Array<{ name: string; detail: string; url?: string }>;
  localContext: string[];
  popularBrands?: string[];
  hreflang: string;
};

export const countries: CountryCalculator[] = [
  {
    slug: "united-states",
    name: "United States",
    currencyCode: "USD",
    currencySymbol: "$",
    locale: "en-US",
    defaultPackPrice: 8.5,
    priceAsOf: "2025",
    priceSource: {
      name: "CDC State Tobacco Activities Tracking (STATE) System",
      url: "https://www.cdc.gov/statesystem/",
    },
    smokingPrevalence:
      "About 1 in 9 U.S. adults (~11%) smoke cigarettes, per CDC surveillance.",
    legalAgePurchase: "21 (Tobacco 21 law, federal)",
    hotlines: [
      {
        name: "1-800-QUIT-NOW (1-800-784-8669)",
        detail: "Free state quitline with coaching and, in many states, free NRT.",
        url: "https://www.cdc.gov/tobacco/quit_smoking/cessation/quitlines/",
      },
      {
        name: "smokefree.gov",
        detail: "Federal quitting resources, SmokefreeTXT, and QuitSTART app.",
        url: "https://smokefree.gov",
      },
    ],
    localContext: [
      "Pack prices vary widely by state. New York City and Chicago are typically among the highest, while Missouri and Georgia are among the lowest.",
      "Federal excise on cigarettes is $1.0066 per pack; state excise adds anywhere from $0.17 (Missouri) to over $5 (New York).",
      "Most U.S. health insurance plans must cover cessation counseling and FDA-approved medication without cost-sharing under ACA.",
    ],
    popularBrands: ["Marlboro", "Newport", "Camel"],
    hreflang: "en-US",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    currencyCode: "GBP",
    currencySymbol: "£",
    locale: "en-GB",
    defaultPackPrice: 16.0,
    priceAsOf: "2025",
    priceSource: {
      name: "UK Office for National Statistics (Tobacco prices)",
      url: "https://www.ons.gov.uk/economy/inflationandpriceindices",
    },
    smokingPrevalence:
      "About 12% of UK adults smoke cigarettes, the lowest level since records began (ONS).",
    legalAgePurchase: "18 (rising to a phased smoke-free generation under the Tobacco and Vapes Bill)",
    hotlines: [
      {
        name: "NHS Quit Smoking",
        detail: "Free Personal Quit Plan, local stop-smoking services, and the NHS Quit Smoking app.",
        url: "https://www.nhs.uk/better-health/quit-smoking/",
      },
      {
        name: "0300 123 1044 (England)",
        detail: "NHS Smokefree National Helpline (Mon–Fri 9am–8pm, Sat–Sun 11am–4pm).",
      },
    ],
    localContext: [
      "Tobacco duty and VAT make up the majority of UK pack prices; duty rises annually at Budget (RPI + 2%).",
      "Most UK packs are now 20s following the 2017 ban on packs of 10.",
      "NHS stop-smoking services remain free to access in England, Scotland, Wales, and Northern Ireland.",
    ],
    popularBrands: ["Benson & Hedges", "Mayfair", "Lambert & Butler"],
    hreflang: "en-GB",
  },
  {
    slug: "australia",
    name: "Australia",
    currencyCode: "AUD",
    currencySymbol: "A$",
    locale: "en-AU",
    defaultPackPrice: 50.0,
    priceAsOf: "2025",
    priceSource: {
      name: "Australian Taxation Office (tobacco excise)",
      url: "https://www.ato.gov.au/businesses-and-organisations/industry-specific-guidance/tobacco-industry",
    },
    smokingPrevalence:
      "About 8% of Australians 14+ smoke daily (AIHW National Drug Strategy Household Survey).",
    legalAgePurchase: "18",
    hotlines: [
      {
        name: "Quitline 13 7848",
        detail: "Free phone, chat, and callback coaching across all states and territories.",
        url: "https://www.quit.org.au/",
      },
      {
        name: "My QuitBuddy (Australian Government)",
        detail: "Free app with quit-date planning, cravings tools, and savings tracking.",
      },
    ],
    localContext: [
      "Australia has some of the highest cigarette prices in the world due to indexed tobacco excise (twice-yearly CPI increases).",
      "Plain packaging has been mandatory since 2012; branded packaging is illegal.",
      "Nicotine vaping products now require a pharmacy prescription under the Therapeutic Goods Administration framework.",
    ],
    popularBrands: ["Winfield", "Marlboro", "Peter Jackson"],
    hreflang: "en-AU",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    currencyCode: "VND",
    currencySymbol: "₫",
    locale: "vi-VN",
    defaultPackPrice: 30000,
    priceAsOf: "2025",
    priceSource: {
      name: "WHO Report on the Global Tobacco Epidemic (Vietnam profile)",
      url: "https://www.who.int/publications/i/item/9789240077164",
    },
    smokingPrevalence:
      "About 38% of Vietnamese men and 1% of women smoke (WHO/MoH Global Adult Tobacco Survey).",
    legalAgePurchase: "18",
    hotlines: [
      {
        name: "1800 6606",
        detail: "Vietnam Ministry of Health tobacco-cessation hotline (Vinacosh), toll-free.",
      },
      {
        name: "Vinacosh (vinacosh.gov.vn)",
        detail: "Government portal for tobacco harm and cessation programs.",
        url: "https://vinacosh.gov.vn/",
      },
    ],
    localContext: [
      "Vietnamese pack prices are among the lowest in Southeast Asia; tobacco excise is scheduled to rise in coming years.",
      "Smoke-free laws cover indoor public places, workplaces, public transport, and within 50 m of hospitals.",
      "Vietnam has joined the WHO Framework Convention on Tobacco Control and is tightening advertising, promotion, and sponsorship rules.",
    ],
    popularBrands: ["Vinataba", "Craven A", "Marlboro"],
    hreflang: "en",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    currencyCode: "IDR",
    currencySymbol: "Rp",
    locale: "id-ID",
    defaultPackPrice: 35000,
    priceAsOf: "2025",
    priceSource: {
      name: "WHO Report on the Global Tobacco Epidemic (Indonesia profile)",
      url: "https://www.who.int/publications/i/item/9789240077164",
    },
    smokingPrevalence:
      "About 34% of Indonesian adults smoke; among men, prevalence is above 65% (WHO/Riskesdas).",
    legalAgePurchase: "18",
    hotlines: [
      {
        name: "Quitline Indonesia 0800 177 6565",
        detail: "Ministry of Health smoking-cessation helpline, toll-free.",
      },
      {
        name: "SehatPedia / Kemenkes RI",
        detail: "Ministry of Health wellness information portal (Bahasa Indonesia).",
        url: "https://sehatnegeriku.kemkes.go.id/",
      },
    ],
    localContext: [
      "Indonesia is the largest cigarette market in Southeast Asia and one of the last major economies that has not ratified the WHO FCTC.",
      "Tobacco excise rises annually; kretek (clove) cigarettes dominate the market, and most packs sold are 12s, 16s, or 20s.",
      "Smoke-free rules exist in some provinces and cities (e.g. Jakarta, Bogor) but enforcement varies.",
    ],
    popularBrands: ["Gudang Garam", "Djarum", "Sampoerna"],
    hreflang: "en",
  },
];

export const countryBySlug: Record<string, CountryCalculator> =
  Object.fromEntries(countries.map((c) => [c.slug, c]));
