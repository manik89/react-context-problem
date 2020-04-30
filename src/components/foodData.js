const foods = [
  {
    title:'Healthy Meal Plan',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch1.png',
    catagories:'lunch',
    price:9.99,
    id:100123
  },
  {
    title:'Fried Chicken Bento',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch2.png',
    catagories:'lunch',
    price:12.99,
    id:1001234,
  },
  {
    title:'Trragon-Rubbed-Salmon',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch3.png',
    catagories:'lunch',
    price:23.99,
    id:100145234,
  },
  {
    title:'Indian Lunch',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch4.png',
    catagories:'lunch',
    price:15.99,
    id:10012347,
  },
  {
    title:'Beaf Steak',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch5.png',
    catagories:'lunch',
    price:7.99,
    id:1001423,
  },
  {
    title:'Honey Soy Salmon',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/lunch/lunch6.png',
    catagories:'lunch',
    price:19.99,
    id:1770123,
  },
  {
    title:'Salmon with Grapefruits',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner1.png',
    catagories:'dinner',
    price:9.99,
    id:108453,
  },
  {
    title:'Lemony Salmon',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner2.png',
    catagories:'dinner',
    price:12.99,
    id:199123,
  },
  {
    title:'Pork Tenderiain',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner3.png',
    catagories:'dinner',
    price:23.99,
    id:10483,
  },
  {
    title:'Baked Chicken',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner4.png',
    catagories:'dinner',
    price:15.99,
    id:107484,
  },
  {
    title:'Curlic Butter baked salmon',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner5.png',
    catagories:'dinner',
    price:7.99,
    id:114414,
  },
  {
    title:'French fries with cheese',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Dinner/dinner6.png',
    catagories:'dinner',
    price:19.99,
    id:1178123,
  },
  {
    title:'Bagel and cream cheese',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast1.png',
    catagories:'breakfast',
    price:9.99,
    id:1001234854,
  },
  {
    title:'Breakfast sandwich',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast2.png',
    catagories:'breakfast',
    price:12.99,
    id:10012374874,
  },
  {
    title:'baked chicken',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast3.png',
    catagories:'breakfast',
    price:23.99,
    id:10014564723,
  },
  {
    title:'Eggs benedict',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast4.png',
    catagories:'breakfast',
    price:15.99,
    id:1001778623,
  },
  {
    title:'Toast fried Egg Butter',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast5.png',
    catagories:'breakfast',
    price:7.99,
    id:100123545444,
  },
  {
    title:'Full breakfast egg toast',
    subtitle:'How we dream about our future',
    description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Breakfast/breakfast6.png',
    catagories:'breakfast',
    price:19.99,
    id:100142447423,
  },
]

const chooseData = [
  {
    title:'Fast Delivery',
    description:'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Image/adult-blur-blurred-background-687824.png',
    id:2001,
    icon:'https://i.ibb.co/m6TDjxS/g1.png'
  },
  {
    title:'A Good Auto Responder',
    description:'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img:'https://raw.githubusercontent.com/ProgrammingHero1/hot-onion-restaurent-resources/master/Image/chef-cook-food-33614.png',
    id:2002,
    icon:'https://i.ibb.co/Lh9MFpK/g3.png',
  },
  {
    title:'Home Delivery',
    description:'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img:'https://github.com/ProgrammingHero1/hot-onion-restaurent-resources/blob/master/Image/architecture-building-city-2047397.png?raw=true',
    icon:'https://i.ibb.co/C2DG0ZV/g2.png',
    id:2003,
  }
]
export {chooseData};
export default foods;