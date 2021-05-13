export const mockDataMenuItems = [
  {
    category_id: "1",
    description:
      "Grilled chicken, avocado, tomato, iceberg lettuce and mayonnaise",
    discount_rate: 0.1,
    id: "1",
    name: "Chicken & Avocado",
    photo:
      "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/chicken-avocado.jpg",
    price: 3500,
    stock: { availability: 3 },
    url: "chicken-avocado",
  },
  {
    category_id: "1",
    description: "Very nice cheese burger.",
    discount_rate: 0.2,
    id: "2",
    name: "Cheese Burger",
    photo:
      "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg",
    price: 1500,
    stock: { availability: 1 },
    url: "cheese-burger",
  },
  {
    category_id: "2",
    description: "Grilled salmon, teriyaki sauce, rice",
    discount_rate: 0.5,
    id: "6",
    name: "Salmon Teriyaki",
    photo:
      "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/salmon-teriyaki.jpg",
    price: 4800,
    stock: { availability: 0 },
    url: "salmon-teriyaki",
  },
];

export const mockDataCategories = [
  { id: "1", name: "Burgers", url: "burgers" },
  { id: "2", name: "Main courses", url: "main-courses" },
];

export const mockDataCategoriesWithItems = [
  {
    id: "1",
    items: [
      {
        category_id: "1",
        description:
          "Grilled chicken, avocado, tomato, iceberg lettuce and mayonnaise",
        discount_rate: 0.1,
        id: "1",
        name: "Chicken & Avocado",
        photo:
          "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/chicken-avocado.jpg",
        price: 3500,
        stock: { availability: 3 },
        url: "chicken-avocado",
      },
      {
        category_id: "1",
        description: "Very nice cheese burger.",
        discount_rate: 0.2,
        id: "2",
        name: "Cheese Burger",
        photo:
          "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg",
        price: 1500,
        stock: { availability: 1 },
        url: "cheese-burger",
      },
    ],
    name: "Burgers",
    url: "burgers",
  },
  {
    id: "2",
    items: [
      {
        category_id: "2",
        description: "Grilled salmon, teriyaki sauce, rice",
        discount_rate: 0.5,
        id: "6",
        name: "Salmon Teriyaki",
        photo:
          "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/salmon-teriyaki.jpg",
        price: 4800,
        stock: { availability: 0 },
        url: "salmon-teriyaki",
      },
    ],
    name: "Main courses",
    url: "main-courses",
  },
];

export const mockSearchInput = "Cheese Burger";

export const mockSearchResult = [
  {
    id: "1",
    items: [
      {
        category_id: "1",
        description: "Very nice cheese burger.",
        discount_rate: 0.2,
        id: "2",
        name: "Cheese Burger",
        photo:
          "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg",
        price: 1500,
        stock: { availability: 1 },
        url: "cheese-burger",
      },
    ],
    name: "Burgers",
    url: "burgers",
  },
];
