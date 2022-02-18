const { Post } = require("../models");

const postData = [
  {
    post_title: "Super Bowl LVI.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 1,
    post_image: "/images/football.jpg",
  },
  {
    post_title: "Star Trek vs Star Wars.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 2,
    post_image: "/images/clones.jpg",
  },
  {
    post_title: "Best Tips to Keep Your House Plants Alive.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 3,
    post_image: "/images/houseplants.jpg",
  },
  {
    post_title: "How to Avoid Scams When Selling Online.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 1,
    group_id: 4,
    post_image: "",
  },
  {
    post_title: "How Animation Change the Movie Industry.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 2,
    post_image: "",
  },
  {
    post_title: "Ohio vs Michigan.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
    group_id: 1,
    post_image: "",
  },
  {
    post_title: "First Time Having a Garage Sale: What to do.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 4,
    post_image: "/images/garage_sale.jpg",
  },
  {
    post_title: "The Best time to Plant your Garden.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 2,
    group_id: 3,
    post_image: "",
  },
  {
    post_title: "Top 10 Sports Moments of all Time.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Placerat vestibulum lectus mauris ultrices eros in cursus. Eget nunc scelerisque viverra mauris in. In metus vulputate eu scelerisque. Mi sit amet mauris commodo. Arcu risus quis varius quam quisque id diam vel. Venenatis a condimentum vitae sapien. Neque gravida in fermentum et sollicitudin ac. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.",
    user_id: 3,
    group_id: 1,
    post_image: "",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
