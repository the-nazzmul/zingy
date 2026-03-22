import { SodaCanProps } from "@/components/soda-can";

export const PRODUCT_DATA = [
  {
    id: 1,
    falor: "blackCherry",
    name: "Black Cherry",
    description: "A bold, black cherry flavor with a hint of sweetness.",
    price: 35.99,
    amount: 12,
    color: "#710523",
  },
  {
    id: 2,
    falor: "grape",
    name: "Grape",
    description: "A bold, grape flavor with a hint of sweetness.",
    price: 35.99,
    amount: 12,
    color: "#572981",
  },
  {
    id: 3,
    falor: "lemonLime",
    name: "Lemon Lime",
    description: "A refreshing, lemon lime flavor with a hint of sweetness.",
    price: 35.99,
    amount: 12,
    color: "#164405",
  },

  {
    id: 4,
    falor: "strawberryLemonade",
    name: "Strawberry Lemonade",
    description:
      "A refreshing, strawberry lemonade flavor with a hint of sweetness.",
    price: 35.99,
    amount: 12,
    color: "#690B3D",
  },
  {
    id: 5,
    falor: "watermelon",
    name: "Watermelon",
    description: "A bold, watermelon flavor with a hint of sweetness.",
    price: 35.99,
    amount: 12,
    color: "#4B7002",
  },
] as const;

export const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

export const ALTERNATING_TEXT = [
  {
    heading: "Gut-Friendly Goodness",
    text: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    heading: "Light Calories, Big Flavor",
    text: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    heading: "Naturally Refreshing",
    text: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It's a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];
