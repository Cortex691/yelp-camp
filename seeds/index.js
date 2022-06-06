const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

const mongoDBUrl =
  "mongodb+srv://Cortex:cortex1@cluster0.gqsz2.mongodb.net/yelp-camp1?retryWrites=true&w=majority";

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "629c5244b91cd33afe083e1f",
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)}, ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      price,
      images: [
        {
          url: "https://res.cloudinary.com/dgu2rypok/image/upload/v1654425594/YelpCamp1/wd6jvl0gai1mdjzditgm.jpg",
          filename: "YelpCamp1/wd6jvl0gai1mdjzditgm",
        },
        {
          url: "https://res.cloudinary.com/dgu2rypok/image/upload/v1654425593/YelpCamp1/hsgqh3demqyrkjnhbcfg.jpg",
          filename: "YelpCamp1/hsgqh3demqyrkjnhbcfg",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
