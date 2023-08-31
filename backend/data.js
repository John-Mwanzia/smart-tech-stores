import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "johnmwanzia277@gmail.com",
      password: bcrypt.hashSync("987654321"),
      isAdmin: true,
    },
    {
      name: "User1",
      email: "user@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  products: [
    {
      Brand: "Hp",
      Comp_Name: "hp elitebook 840 g4 ",
      slug: "hp-elitebook-840-g4",
      category: "laptops",
      Img_Url:
        "https://cdn.shopify.com/s/files/1/1918/7539/products/Hp-840-g4-touch.png?v=1647739774",
      price: 35000,
      countInStock: 4,
      Specs:
        " Intel Core i7-6300U 2.60GHz 8GB DDR4 RAM 256GB SSD 14 LED Display",
    },

    {
      Brand: "Hp",
      Comp_Name: "Hp Elitebook 840 G3",
      slug: "Hp-Elitebook-840-G3",
      category: "laptops",
      Img_Url:
        "https://w7.pngwing.com/pngs/548/236/png-transparent-hp-elitebook-840-g3-laptop-hp-elitebook-820-g3-hp-elitebook-745-g3-laptop-electronics-netbook-computer.png",
      price: 35000,
      countInStock: 7,
      Specs:
        " Intel Core i7-6300U 2.60GHz 8GB DDR4 RAM 256GB SSD 14 LED Display",
    },

    {
      Brand: "lenovo",
      Comp_Name: "Lenovo ThinkPad T470s ",
      slug: "Lenovo-ThinkPad-T470s",
      category: "laptops",
      Img_Url:
        "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t470s-hero.png?context=bWFzdGVyfGltYWdlc3wyMjU4NjF8aW1hZ2UvcG5nfGltYWdlcy9oN2YvaDAzLzE0MzMyNjg1MDkwODQ2LnBuZ3w2ZWY5N2ZjZjQ3OGY1MTFkNTlkMmI2YjY3NjZmNDEyOGQxZTFiYWVmNzgwNjY2NTJjZDRlYzk1MTRmZjU0MjVl",
      price: 35000,
      countInStock: 6,
      Specs:
        " Intel Core i7-6300U 2.60GHz 8GB DDR4 RAM 256GB SSD 14 LED Display",
    },

    {
      Brand: "Apple",
      Comp_Name: "Macbook Pro 16  MVVK2",
      slug: "Macbook-Pro-16-MVVK2",
      category: "laptops",
      Img_Url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2dwWjlnZOSiKq03vu6k0iSCYzO0kp9CNgg&usqp=CAU",
      price: 35000,
      countInStock: 3,
      Specs:
        " Intel Core i7-6300U 2.60GHz 8GB DDR4 RAM 256GB SSD 14 LED Display",
    },
  ],
  featuredProducts: [
    {
      Gadget_Name: " samsung-a23 ",
      slug: "samsung-a23",
      category: "phones",
      Img_Url:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/02/Samsung-Galaxy-A23-5G-6.jpeg",
      price: 35000,
      countInStock: 4,
      Specs:
        " 6.5-inch HD+ Infinity-V display, 1080 x 2408 pixels, 20:9 aspect ratio, 90Hz refresh rate, 270 PPI Android 12 	64GB 4GB RAM,",
    },

    {
      Gadget_Name: "huawei honor 10  ",
      slug: "huawei-honor-10 ",
      category: "phones",
      Img_Url:
        "https://www.priceinkenya.com/_ipx/b_%23ffffff,f_png,q_75,fit_contain,s_300x300/https://api.priceinkenya.com/media/121038/conversions/huawei-honor-10-64gb-zwXAQG9nI2-original.webp",
      price: 35000,
      countInStock: 4,
      Specs:
        " 6.5-inch HD+ Infinity-V display, 1080 x 2408 pixels, 20:9 aspect ratio, 90Hz refresh rate, 270 PPI Android 12 	64GB 4GB RAM,",
    },

    {
      Gadget_Name: "headphones",
      slug: "headphones-1",
      category: "headphones",
      Img_Url:
        "https://t4.ftcdn.net/jpg/05/35/49/97/240_F_535499727_fLDl5BxuoURnqRVLJ9jc46rBMws9lgMs.jpg",
      price: 1500,
      countInStock: 4,
      Specs: "Sennheiser Pro Audio Model	HD 280 Pro white	Wireless",
    },

    {
      Gadget_Name: "hp laptop charger",
      slug: "hp-laptop-charger",
      category: "chargers",
      Img_Url:
        "https://3.imimg.com/data3/WG/AR/MY-22059447/19-5v-4-62a-adapter-500x500.jpg",
      price: 2500,
      countInStock: 4,
      Specs: "HP 19.5V 4.62A 90W Laptop Charger AC/DC Adapter",
    },
    {
      Gadget_Name: "iphone 14",
      slug: "iphone-14",
      category: "phones",
      Img_Url:
        "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Max_Deep_Purple_phonewall?$ProductBase$",
      price: 95000,
      countInStock: 4,
      Specs:
        " iPhone 14 Pro Max 256GB 6GB RAM 6.7 inches 5G 20MP Camera 4K Video 5000mAh Battery ",
    },
    {
      Gadget_Name: "wireless mouse",
      slug: "wireless-mouse",
      category: "mouse",
      Img_Url:
        "https://atlas-content-cdn.pixelsquid.com/assets_v2/200/2009721087641786232/previews/G03-200x200.jpg",
      price: 1000,
      countInStock: 4,
      Specs:
        "Wireless Mouse for Laptop, Inphic 2.4G Rechargeable Silent Computer Mouse,1600 DPI Ultra Thin Optical Portable USB Mini Mouse, Cordless Mice for Laptop,PC,MacBook,Mac, white",
    },
    {
      Gadget_Name: "webcam",
      slug: "webcam",
      category: "webcam",
      Img_Url:
        "https://w7.pngwing.com/pngs/302/546/png-transparent-webcam-camera-microphone-internet-webcam-electronics-microphone-camera-lens-thumbnail.png",
      price: 5000,
      countInStock: 4,
      Specs:
        "Webcam with Microphone, 1080P HD Streaming USB Computer Webcam [Plug and Play] [30fps] ",
    },
    {
      Gadget_Name: "wireless keyboard",
      slug: "wireless-keyboard",
      category: "keyboard",
      Img_Url:
        "https://png.pngtree.com/png-vector/20210205/ourlarge/pngtree-wireless-keyboard-png-image_2872698.jpg",
      price: 1500,
      countInStock: 4,
      Specs: " Jelly Comb 2.4G Slim Ergonomic Quiet Keyboard ",
    },
  ],
};
export default data;
