import { append } from "./showdata.js";

let flight_container = document.querySelector(".filter-container");

const data = {
  heading: "Popular Filters",
  options: [
    {
      label: "c2",
      name: "popularFilter",
      value: "nonStop",
      labelValue: "Non Stop (2)",
    },

    {
      label: "c3",
      name: "popularFilter",
      value: "morningDeparture",
      labelValue: "Morning Departure (10)",
    },
    {
      label: "c4",
      name: "popularFilter",
      value: "indigo",
      labelValue: "IndiGo (13)",
    },
    {
        label: "c5",
        name: "popularFilter",
        value: "vistara",
        labelValue: "Vistara (1)",
    },
    {
        label: "c6",
        name: "popularFilter",
        value: "airindia",
        labelValue: "AirIndia (1)",
    },
    {
        label: "c7",
        name: "popularFilter",
        value: "spicejet",
        labelValue: "SpiceJet (1)",
    },
    {
        label: "c8",
        name: "popularFilter",
        value: "gofirst",
        labelValue: "Go First (5)",
        
    },
    {
        label: "c9",
        name: "popularFilter",
        value: "akasaair",
        labelValue: "Akasa Air (3)",
    },
    {
        label: "c10",
        name: "popularFilter",
        value: "airasia",
        labelValue: "Air Asia (2)",
    },
    {
        label: "c11",
        name: "popularFilter",
        value: "latedeparture",
        labelValue: "Late Departure (3)",
    },
    {
        label: "c12",
        name: "popularFilter",
        value: "1stop",
        labelValue: "1 Stop (15)",
    },
    {
        label: "c13",
        name: "popularFilter",
        value: "refundablefares",
        labelValue: "Refundable Fares  (17)",
    },
  ],
};

append(data.options, data.heading, flight_container);


const items = {
    heading: "Airlines",
    options: [
      {
        label: "c2",
        name: "airlines",
        value: "airindia",
        labelValue: "Air India (1)",
      },
      {
        label: "c3",
        name: "airlines",
        value: "akasaair",
        labelValue: "Akasa Air (3)",
    },
    {
        label: "c4",
        name: "airlines",
        value: "allianair",
        labelValue: "Allian Air  (2)",
    },
    {
        label: "c5",
        name: "airlines",
        value: "gofirst",
        labelValue: "Go First  (5)",
    },
    {
        label: "c6",
        name: "airlines",
        value: "indigo",
        labelValue: "Indigo  (13)",
    },
    {
        label: "c7",
        name: "airlines",
        value: "airasia",
        labelValue: "Air Asia  (2)",
    },
    {
        label: "c8",
        name: "airlines",
        value: "spicejet",
        labelValue: "SpiceJet  (1)",
    },
    {
        label: "c9",
        name: "airlines",
        value: "vistara",
        labelValue: "Vistara  (1)",
    },
  ],
};

append(items.options, items.heading, flight_container);