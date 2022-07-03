export const projects = [
  {
    name: "Boredly",
    desc: "is a random activity generator, that uses a random activity API to fetch random or filtered activities.",
    technologies: [
      "React Native",
      "Async Storage",
      "Swipe List",
      "Lotte Animations",
      "Context API",
    ],
    images: [
      require("../images/boredly_home.png"),
      require("../images/boredly_idea.png"),
      require("../images/boredly_saved.png"),
    ],
    source: "https://github.com/swipss/Boredly",
  },
  {
    name: "Expense Tracker App",
    desc: "lets you track your daily expenses and incomes, also letting you categorize them. The user is saved and authenticated via Firebase Auth.",
    technologies: [
      "React Native",
      "Firebase Firestore",
      "Firebase Authentication",
      "Redux",
    ],
    images: [
      require("../images/expense_home.png"),
      require("../images/expense_add.png"),
      require("../images/expense_cat.png"),
    ],
    source: "https://github.com/swipss/Expense-Tracker-Project-New",
  },
  {
    name: "Cryptocurrency Tracker",
    desc: "shows the user most recent cryptocurrency prices with real-time updates. Data is fetched using the CoinGecko API.",
    technologies: [
      "React Native",
      "Async Storage",
      "Swipe List",
      "Recoil",
      "Context API",
      "Wagmi Charts",
    ],
    images: [
      require("../images/crypto_home.png"),
      require("../images/crypto_chart.png"),
      require("../images/crypto_assets.png"),
    ],
    source: "https://github.com/swipss/CrpytoTracker",
  },
  {
    name: "Food Delivery App",
    desc: "Uber Eats inspired Food Delivery App shows the user a handful of restaurants from which they can choose foods and add them to the basket.",
    technologies: ["React Native", "AWS Amplify", "Context API", "GraphQL"],
    images: [
      require("../images/food_home.png"),
      require("../images/food_menu.png"),
      require("../images/food_basket.png"),
    ],
    source: "https://github.com/swipss/uber-eats-user",
  },
];
