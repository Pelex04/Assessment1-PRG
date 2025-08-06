const products = [
  {
    id: "P001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    inStock: true,
    tags: ["audio", "wireless","electronic"],
    ratings: { average: 4.5, reviewsCount: 120 },
    releaseDate: "2024-05-15"
  },
  {
    id: "P002",
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 29.99,
    inStock: false,
    tags: ["kitchen", "electric", "boil"],
    ratings: { average: 4.0, reviewsCount: 85 },
    releaseDate: "2023-11-10"
  },
  {
    id: "P003",
    name: "Yoga Mat",
    category: "Sports",
    price: 19.99,
    inStock: true,
    tags: ["fitness", "yoga", "exercise"],
    ratings: { average: 4.7, reviewsCount: 200 },
    releaseDate: "2022-08-01"
  },
  {
    id: "P004",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    inStock: true,
    tags: ["wearable", "fitness", "smart","electronic"],
    ratings: { average: 4.3, reviewsCount: 150 },
    releaseDate: "2024-01-20"
  },
  {
    id: "P005",
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 89.99,
    inStock: true,
    tags: ["kitchen", "coffee", "brew"],
    ratings: { average: 4.2, reviewsCount: 95 },
    releaseDate: "2023-06-05"
  },
  {
    id: "P006",
    name: "Running Shoes",
    category: "Sports",
    price: 120.00,
    inStock: false,
    tags: ["fitness", "running", "shoes"],
    ratings: { average: 4.6, reviewsCount: 180 },
    releaseDate: "2023-03-18"
  },
  {
    id: "P007",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    inStock: true,
    tags: ["audio", "bluetooth", "portable"],
    ratings: { average: 4.4, reviewsCount: 130 },
    releaseDate: "2022-12-25"
  },
  {
    id: "P008",
    name: "Blender",
    category: "Home Appliances",
    price: 39.99,
    inStock: true,
    tags: ["kitchen", "blend", "smoothie"],
    ratings: { average: 4.1, reviewsCount: 75 },
    releaseDate: "2024-02-14"
  },
  {
    id: "P009",
    name: "Dumbbell Set",
    category: "Sports",
    price: 55.00,
    inStock: true,
    tags: ["fitness", "weights", "exercise"],
    ratings: { average: 4.8, reviewsCount: 220 },
    releaseDate: "2023-07-07"
  },
  {
    id: "P010",
    name: "E-book Reader",
    category: "Electronics",
    price: 129.99,
    inStock: false,
    tags: ["reading", "portable", "ebook"],
    ratings: { average: 4.5, reviewsCount: 160 },
    releaseDate: "2023-09-30"
  }
]

class Others{
    constructor(id,name,category,price,inStock,tags,ratings,releaseDate){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.inStock = inStock;
        this.tags = tags;
        this.ratings = ratings;
        this.releaseDate= releaseDate;
    }
}

let id = [{id: "P001",id: "P002",id: "P003",id: "P004",id: "P005",id: "P006",id: "P007",id: "P008",id: "P009",id: "P0010"}]
let name = [{name:"Wireless Headphones",name:"Electric Kettle",name:"Yoga Mat",name:"Smart Watch",name:"Coffee Maker",name:"Running Shoes",name:"Bluetooth Speaker",name:"Blender",name:"Dumbbell Set",name:"E-book Reader"}]
let category = [{category:"Electronics",category:"Home Appliances",category:"Sports",category:"Electronics",category:"Home Appliances",category:"Sports",category:"Electronics",category:"Home Appliances",category:"Sports",category:"Electronics"}]
let price = [{}]
let inStock = [{}]
let tags = [{}]
let ratings = [{}]
let releaseDate = [{}]

others = new constructor(id,name,category,price,inStock,tags,ratings,releaseDate);
//adding new item//
products[10] =  {id: "P011",
    name: "E-book Reader",
    category: "Electronics",
    price: 129.99,
    inStock: false,
    tags: ["reading", "portable", "ebook"],
    ratings: { average: 4.5, reviewsCount: 160 },
    releaseDate: "2023-09-30"
  };
  //updating id//
  products[10].id = "POchanged"
  
  //update total //
  products[10].price = 130;
  console.log(products)

  //conversion //
  let result = JSON.stringify(products);

  console.log(result)
  let result2 = JSON.parse(result);
  console.log(result2)