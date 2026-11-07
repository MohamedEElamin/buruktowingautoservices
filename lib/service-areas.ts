export type ServiceArea = {
  slug: string;
  name: string;
  postalCodes: string[];
  summary: string;
  localReferences: string[];
  featured?: boolean;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "cedar-rapids-52404",
    name: "Southwest Cedar Rapids",
    postalCodes: ["52404"],
    summary:
      "Towing and auto repair requests for Southwest Cedar Rapids, including the Czech Village and Kirkwood areas. Call dispatch with your nearest cross street to confirm current coverage and an arrival estimate.",
    localReferences: [
      "Czech Village and New Bohemia",
      "Kirkwood Community College",
      "Wilson Avenue and 33rd Avenue SW",
      "Hawkeye Downs Speedway & Expo Center",
      "Eastern Iowa Airport (CID) corridor",
      "I-380, US Highway 30, and US Highway 151",
    ],
    featured: true,
  },
  {
    slug: "fairfax-ia",
    name: "Fairfax, Iowa",
    postalCodes: ["52228"],
    summary:
      "Request towing, roadside assistance, or auto repair serving Fairfax and the Highway 151 corridor. Share your location when you call so dispatch can confirm availability.",
    localReferences: [
      "Highway 151 corridor",
      "Western Cedar Rapids-area routes",
    ],
  },
  {
    slug: "ely-ia",
    name: "Ely, Iowa",
    postalCodes: ["52227"],
    summary:
      "Contact dispatch for towing and roadside coverage around Ely, or call the shop to discuss repair and maintenance availability.",
    localReferences: [
      "Downtown Ely",
      "Hoosier Creek area",
      "Regional routes near Ely",
    ],
  },
  {
    slug: "shueyville-swisher-ia",
    name: "Shueyville & Swisher",
    postalCodes: ["52338", "52317"],
    summary:
      "For drivers near Shueyville and Swisher, call with your exact location and vehicle details. Dispatch will confirm service availability and an estimate before sending help.",
    localReferences: ["I-380 corridor", "Shueyville", "Swisher"],
  },
  {
    slug: "cedar-rapids-52401",
    name: "Downtown Cedar Rapids",
    postalCodes: ["52401"],
    summary:
      "Towing and roadside requests for downtown Cedar Rapids and nearby Mays Island. Call to confirm coverage for your pickup location.",
    localReferences: ["Downtown Cedar Rapids", "Mays Island"],
  },
  {
    slug: "cedar-rapids-52405",
    name: "Northwest Cedar Rapids",
    postalCodes: ["52405"],
    summary:
      "Request roadside assistance and towing around Northwest Cedar Rapids. Provide the nearest cross street or landmark so dispatch can check current availability.",
    localReferences: ["Northwest Cedar Rapids", "Edgewood Road corridor"],
  },
  {
    slug: "cedar-rapids-52403",
    name: "Southeast Cedar Rapids",
    postalCodes: ["52403"],
    summary:
      "Contact dispatch for towing and roadside assistance in Southeast Cedar Rapids, or call the shop about auto repair and maintenance.",
    localReferences: ["Southeast Cedar Rapids", "Vernon Heights"],
  },
  {
    slug: "marion-ia",
    name: "Marion, Iowa",
    postalCodes: ["52302"],
    summary:
      "Drivers in Marion can call to check towing and roadside availability or discuss auto service with the shop.",
    localReferences: ["Marion and nearby Cedar Rapids-area routes"],
  },
  {
    slug: "hiawatha-ia",
    name: "Hiawatha, Iowa",
    postalCodes: ["52233"],
    summary:
      "Call to discuss towing or roadside help around Hiawatha and ask the shop about repair availability.",
    localReferences: ["Hiawatha and nearby I-380 routes"],
  },
  {
    slug: "palo-ia",
    name: "Palo, Iowa",
    postalCodes: ["52324"],
    summary:
      "Call to confirm roadside and towing coverage around Palo, or discuss vehicle maintenance with the shop.",
    localReferences: ["Palo and surrounding Linn County routes"],
  },
  {
    slug: "walford-ia",
    name: "Walford, Iowa",
    postalCodes: ["52351"],
    summary:
      "Drivers near Walford can contact dispatch to confirm current service availability and an arrival estimate for their location.",
    localReferences: ["Walford and nearby Highway 151 routes"],
  },
  {
    slug: "mount-vernon-ia",
    name: "Mount Vernon, Iowa",
    postalCodes: ["52314"],
    summary:
      "Contact dispatch to check towing and roadside availability around Mount Vernon, and call the shop to discuss repair and maintenance.",
    localReferences: ["Mount Vernon and nearby Highway 30 routes"],
  },
];

export const featuredServiceArea = serviceAreas[0];
