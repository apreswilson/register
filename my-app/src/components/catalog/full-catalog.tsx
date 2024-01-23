interface GroceryItem {
  type: "produce" | "general" | "meat" | "pharmacy";
  cost: number;
  tax: number;
  picture: string;
  weighted: boolean;
  rate: number;
}

const catalog: GroceryItem[] = [
  {
    type: "produce",
    cost: 1.99,
    tax: 0.1,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 0.69,
  },
  {
    type: "produce",
    cost: 2.49,
    tax: 0.15,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 0.89,
  },
  {
    type: "general",
    cost: 3.99,
    tax: 0.2,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "general",
    cost: 1.29,
    tax: 0.1,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "meat",
    cost: 8.99,
    tax: 0.3,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 5.99,
  },
  {
    type: "meat",
    cost: 5.49,
    tax: 0.25,
    picture: "INSERT PATH HERE",
    weighted: true,
    rate: 3.99,
  },
  {
    type: "pharmacy",
    cost: 12.99,
    tax: 0.4,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
  {
    type: "pharmacy",
    cost: 6.79,
    tax: 0.35,
    picture: "INSERT PATH HERE",
    weighted: false,
    rate: 0,
  },
];

export default catalog;