interface GroceryItem {
  type: "produce" | "general" | "meat" | "pharmacy";
  item: string;
  cost: number;
  tax: number;
  picture: string;
  weighted: boolean;
  rate: number;
}

const catalog: GroceryItem[] = [
  {
    type: "produce",
    item: "Bananas",
    cost: 1.99,
    tax: 0.1,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 0.69,
  },
  {
    type: "produce",
    item: "Apples",
    cost: 2.49,
    tax: 0.15,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 0.89,
  },
  {
    type: "general",
    item: "Cereal",
    cost: 3.99,
    tax: 0.2,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "general",
    item: "Bread",
    cost: 1.29,
    tax: 0.1,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "meat",
    item: "Steak",
    cost: 8.99,
    tax: 0.3,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 5.99,
  },
  {
    type: "meat",
    item: "Chicken",
    cost: 5.49,
    tax: 0.25,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 3.99,
  },
  {
    type: "pharmacy",
    item: "Cold Medicine",
    cost: 12.99,
    tax: 0.4,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "pharmacy",
    item: "Pain Reliever",
    cost: 6.79,
    tax: 0.35,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
];

export default catalog;