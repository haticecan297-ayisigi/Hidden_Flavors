const recipes = [
  // --- OTTOMAN ERA RECIPES ---
  {
    id: 1,
    name: "Almond Soup (Badem Çorbası)",
    era: "Ottoman Era",
    category: "Soups",
    image: "./images/ottoman/almond-soup.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Sweet Almonds", amount: 1, unit: "Cup" },
      { name: "Chicken Broth", amount: 5, unit: "Cups" },
      { name: "Butter", amount: 2, unit: "Tablespoons" },
      { name: "Flour", amount: 2, unit: "Tablespoons" },
      { name: "Milk", amount: 1, unit: "Cup" },
      { name: "Grated Nutmeg", amount: 1, unit: "Teaspoon" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }  
    ],
    history: "An indispensable starter for palace banquets. A beautiful example of sweet-salty harmony, this soup was also served at the circumcision feasts of Suleiman the Magnificent's princes.",
    timeline: [
      { year: "1539", event: "Recorded in the circumcision feast menu of the princes." }
    ],
    instructions: [
      "Soak the almonds in hot water for 15 minutes, peel them, and puree them in a food processor.",
      "Melt the butter in a large pot and lightly roast the flour until fragrant.",
      "Add the almond puree to the pot and roast for 1-2 more minutes.",
      "Gradually whisk in the chicken broth to prevent lumps and bring to a boil.",
      "Add warm milk, salt, and grated nutmeg to the boiling soup. Simmer on low heat for 5 minutes and serve."
    ],
    comments: [
      { user: "tarih_gurmesi", rating: 5, text: "The lightest starter from palace cuisine. You absolutely must try it!" },
      { user: "lezzet_pesinde", rating: 4, text: "It tastes great, but it requires a little patience to make." }
    ]
  },
  {
    id: 2,
    name: "Mutancana",
    era: "Ottoman Era",
    category: "Main Courses",
    image: "./images/ottoman/mutancana.webp",
    basePortion: 4,
    ingredients: [
      { name: "Diced Lamb", amount: 500, unit: "Grams" },
      { name: "Pearl Onions", amount: 15, unit: "Pieces" },
      { name: "Butter", amount: 2, unit: "Tablespoons" },
      { name: "Dried Apricots", amount: 10, unit: "Pieces" },
      { name: "Dried Figs", amount: 5, unit: "Pieces" },
      { name: "Blanched Almonds", amount: 50, unit: "Grams" },
      { name: "Honey", amount: 2, unit: "Tablespoons" },
      { name: "Sumac", amount: 1, unit: "Teaspoon" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "Prepared with a magnificent harmony of dried fruits and meat, it is a spectacular palace dish rumored to be one of Mehmed the Conqueror's favorites.",
    timeline: [
      { year: "15th Century", event: "Entered the Topkapi Palace kitchen records during the reign of Mehmed the Conqueror." }
    ],
    instructions: [
      "Place the meat in a pot, add butter, and sauté until the meat releases and absorbs its juices.",
      "Add the whole pearl onions and continue sautéing.",
      "Add enough warm water to cover the meat and simmer on low heat until tender.",
      "In a separate pan, lightly sauté the almonds and quartered figs and apricots in a little oil.",
      "Once the meat is cooked, add the fruit mixture, honey, salt, and sumac to the pot. Simmer for 10 more minutes to blend the flavors and remove from heat."
    ],
    comments: [
      { user: "fatih_hayrani", rating: 5, text: "The combination of dried fruits and meat is amazing." }
    ]
  },
  {
    id: 3,
    name: "Imambayildi (Stuffed Eggplant)",
    era: "Ottoman Era",
    category: "Olive Oil Dishes",
    image: "./images/ottoman/imambayildi.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Eggplants", amount: 4, unit: "Pieces" },
      { name: "Onions", amount: 3, unit: "Pieces" },
      { name: "Garlic", amount: 8, unit: "Cloves" },
      { name: "Tomatoes", amount: 3, unit: "Pieces" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Granulated Sugar", amount: 1, unit: "Teaspoon" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "One of the most iconic dishes of the Ottoman olive oil culture. Legend has it that an Imam fainted with pleasure upon tasting its rich ingredients and flavor, hence the name 'Imam fainted'.",
    timeline: [
      { year: "19th Century", event: "Popularized as the olive oil culinary culture reached its peak in the palace and Istanbul." }
    ],
    instructions: [
      "Peel the eggplants in stripes and soak them in salted water for 20 minutes to remove bitterness.",
      "Slice the onions into half-moons, sauté them with garlic and diced tomatoes in half of the olive oil. Add sugar and salt.",
      "Dry the eggplants, slit them lengthwise down the middle, and lightly fry them in the remaining olive oil (or bake them).",
      "Stuff the eggplants with the onion mixture and arrange them in a wide pot.",
      "Add half a cup of water, cover with a lid, and simmer on low heat for 25-30 minutes. Serve cold."
    ]
  },
  {
    id: 4,
    name: "Piruhi (Ottoman Dumplings)",
    era: "Ottoman Era",
    category: "Pastries & Breads",
    image: "./images/ottoman/piruhi.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Flour", amount: 3, unit: "Cups" },
      { name: "Eggs", amount: 2, unit: "Pieces" },
      { name: "Tulum Cheese (or Feta)", amount: 150, unit: "Grams" },
      { name: "Crushed Walnuts", amount: 0.5, unit: "Cup" },
      { name: "Parsley", amount: 0.5, unit: "Bunch" },
      { name: "Butter", amount: 3, unit: "Tablespoons" }
    ],
    history: "A palace-style pastry similar to modern ravioli or manti, but filled with cheese and walnuts instead of minced meat, and served with sizzling browned butter.",
    timeline: [
      { year: "16th Century", event: "Took its place on the tables as manti and pastry variations diversified in the Ottoman kitchen." }
    ],
    instructions: [
      "Knead a firm dough with flour, eggs, a little water, and salt. Cover and let it rest for 30 minutes.",
      "For the filling, mix the Tulum cheese, crushed walnuts, and finely chopped parsley.",
      "Roll out the dough to manti thickness and cut it into squares (slightly larger than standard manti).",
      "Place a small amount of the cheese filling into each square and fold them into triangles.",
      "Boil the Piruhi in salted water and drain. Transfer to a serving dish and pour sizzling melted butter over them."
    ]
  },
  {
    id: 5,
    name: "Zerde (Saffron Rice Pudding)",
    era: "Ottoman Era",
    category: "Desserts",
    image: "./images/ottoman/zerde.jpg",
    basePortion: 6,
    ingredients: [
      { name: "Baldo Rice", amount: 0.5, unit: "Cup" },
      { name: "Water", amount: 6, unit: "Cups" },
      { name: "Granulated Sugar", amount: 1.5, unit: "Cups" },
      { name: "Starch", amount: 2, unit: "Tablespoons" },
      { name: "Saffron", amount: 1, unit: "Pinch" },
      { name: "Rose Water", amount: 2, unit: "Tablespoons" },
      { name: "Currants and Pine Nuts", amount: 2, unit: "Tablespoons" }
    ],
    history: "A golden-colored palace dessert that was the crown jewel of Ottoman banquets, especially weddings, victory celebrations, and circumcision ceremonies.",
    timeline: [
      { year: "15th Century", event: "Began to be served as a symbol of abundance and prosperity at palace banquets." }
    ],
    instructions: [
      "Soak the saffron in rose water for half an hour to release its color.",
      "Wash the rice and boil it with 6 cups of water until tender.",
      "Add the sugar and stir. Dissolve the starch in a little water and slowly add it to the boiling pot.",
      "Pour the saffron and rose water mixture into the pot.",
      "Boil for a few more minutes until it thickens. Divide into bowls, let cool, and garnish with currants and pine nuts."
    ]
  },
  {
    id: 6,
    name: "Cherry Stuffed Vine Leaves",
    era: "Ottoman Era",
    category: "Mezes & Snacks",
    image: "./images/ottoman/visneli-sarma.webp",
    basePortion: 6,
    ingredients: [
      { name: "Vine Leaves", amount: 300, unit: "Grams" },
      { name: "Rice", amount: 1.5, unit: "Cups" },
      { name: "Fresh Cherries", amount: 2, unit: "Cups" },
      { name: "Onions", amount: 3, unit: "Pieces" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Pine Nuts", amount: 2, unit: "Tablespoons" },
      { name: "Currants", amount: 2, unit: "Tablespoons" },
      { name: "Allspice and Cinnamon", amount: 1, unit: "Teaspoon" }
    ],
    history: "A very special cold appetizer reflecting the elegance of palace cuisine. The sweet and sour balance represents the peak of the palace's characteristic fruity and olive oil dishes.",
    timeline: [
      { year: "18th Century", event: "The era when olive oil stuffed vine leaves were enriched with fruits in the palace kitchen." }
    ],
    instructions: [
      "Finely chop the onions and sauté them with pine nuts in olive oil until pink.",
      "Add washed rice and continue sautéing. Stir in allspice, cinnamon, currants, salt, and half a cup of cherry juice, then let the filling steep.",
      "Place the filling onto the vine leaves, add 1-2 pitted cherries inside each, and roll them up tightly like pencils.",
      "Arrange the stuffed leaves in a pot and scatter the remaining cherries between them.",
      "Drizzle cherry juice, a little water, and olive oil over the top, cover with a porcelain plate, and simmer on low heat."
    ]
  },
  {
    id: 7,
    name: "Tamarind Sherbet",
    era: "Ottoman Era",
    category: "Beverages & Sherbets",
    image: "./images/ottoman/tamarind.jpg",
    basePortion: 8,
    ingredients: [
      { name: "Shelled Tamarind", amount: 200, unit: "Grams" },
      { name: "Water", amount: 2, unit: "Liters" },
      { name: "Sugar or Honey", amount: 1, unit: "Cup" },
      { name: "Cinnamon Sticks", amount: 2, unit: "Pieces" },
      { name: "Cloves", amount: 5, unit: "Pieces" },
      { name: "Fresh Ginger", amount: 1, unit: "Walnut-sized Piece" }
    ],
    history: "A unique, thirst-quenching, and digestive-aiding sherbet frequently consumed by sultans, made from tamarind, also known as the Indian date.",
    timeline: [
      { year: "16th Century", event: "Tamarind entered the palace kitchen via the Spice Route and was incorporated into the sherbet culture." }
    ],
    instructions: [
      "Soak the tamarind in 2 liters of water overnight.",
      "The next day, transfer it to a pot with its water. Add cinnamon sticks, cloves, and ginger, and boil for about 45 minutes.",
      "Towards the end of the boiling time, add sugar or honey and stir until dissolved.",
      "Remove from heat and let it cool.",
      "Once completely cooled, strain the sherbet through a fine cheesecloth into bottles and serve chilled from the refrigerator."
    ]
  },

  // --- ANCIENT ROMAN ERA RECIPES ---
  {
    id: 8,
    name: "Puls (Ancient Roman Pottage)",
    era: "Ancient Roman Era",
    category: "Soups",
    image: "./images/ancient-roman/puls.webp",
    basePortion: 4,
    ingredients: [
      { name: "Einkorn or Spelt Wheat", amount: 1.5, unit: "Cups" },
      { name: "Water or Meat Broth", amount: 5, unit: "Cups" },
      { name: "Olive Oil", amount: 3, unit: "Tablespoons" },
      { name: "Salt", amount: 1, unit: "Teaspoon" },
      { name: "Black Pepper", amount: 1, unit: "Teaspoon" }
    ],
    history: "The staple food of Roman soldiers and commoners. Initially consumed as a simple porridge, it was later enriched with broth and vegetables, becoming the ancestor of modern soups.",
    timeline: [
      { year: "5th Century BC", event: "Standardized as the basic daily ration for Roman legions." }
    ],
    instructions: [
      "Wash and drain the wheat or spelt thoroughly in plenty of water.",
      "Place the wheat in a pot and add the water or meat broth.",
      "Cook on low heat until the grains are very soft and mushy (about 40-45 minutes).",
      "Add olive oil, salt, and black pepper, and stir.",
      "Once it reaches the consistency of a thick soup, remove from heat and serve hot."
    ]
  },
  {
    id: 9,
    name: "Isicia Omentata (Roman Burger)",
    era: "Ancient Roman Era",
    category: "Main Courses",
    image: "./images/ancient-roman/isicia-omentata.webp",
    basePortion: 4,
    ingredients: [
      { name: "Minced Meat", amount: 500, unit: "Grams" },
      { name: "Pine Nuts", amount: 2, unit: "Tablespoons" },
      { name: "Garum (or Soy Sauce/Salt)", amount: 1, unit: "Tablespoon" },
      { name: "White Wine (or Grape Vinegar)", amount: 1, unit: "Tablespoon" },
      { name: "Black Pepper", amount: 1, unit: "Teaspoon" },
      { name: "Olive Oil", amount: 2, unit: "Tablespoons" }
    ],
    history: "Considered the ancestor of the modern hamburger, this famous Roman meat dish is featured in Apicius's cookbook. Originally, it was wrapped in caul fat (omentum) before cooking.",
    timeline: [
      { year: "1st Century AD", event: "Described in Apicius's culinary book 'De Re Coquinaria'." }
    ],
    instructions: [
      "Place the minced meat in a large mixing bowl.",
      "Lightly crush the pine nuts in a mortar and add them to the meat.",
      "Add garum (ancient Roman fish sauce - soy sauce as an alternative), wine, and plenty of black pepper.",
      "Knead the mixture thoroughly and shape it into flat, round patties.",
      "Heat olive oil in a pan, fry both sides of the patties until nicely browned, and serve."
    ]
  },
  {
    id: 10,
    name: "Patina de Asparagis (Asparagus Frittata)",
    era: "Ancient Roman Era",
    category: "Olive Oil Dishes & Vegetables",
    image: "./images/ancient-roman/asparagus-frittata.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Asparagus", amount: 1, unit: "Bunch" },
      { name: "Eggs", amount: 4, unit: "Pieces" },
      { name: "White Wine (or Apple Cider Vinegar)", amount: 2, unit: "Tablespoons" },
      { name: "Olive Oil", amount: 3, unit: "Tablespoons" },
      { name: "Garum (or Salt)", amount: 1, unit: "Teaspoon" },
      { name: "Black Pepper", amount: 1, unit: "Teaspoon" }
    ],
    history: "'Patina' is the name given to baked egg dishes with vegetables or meat (similar to a frittata) in Roman cuisine. Asparagus was a highly favored vegetable at the tables of nobles.",
    timeline: [
      { year: "1st Century AD", event: "Became a popular starter and vegetable dish at the banquets of Roman patricians (nobles)." }
    ],
    instructions: [
      "Cut off the tough ends of the asparagus and boil them in boiling water until tender.",
      "Puree the boiled asparagus in a food processor along with olive oil, wine, and garum/salt.",
      "Beat the eggs in a separate bowl, add them to the asparagus puree along with plenty of black pepper, and mix.",
      "Pour the mixture into a baking dish (patina) greased with olive oil.",
      "Bake in a preheated oven (approx. 180°C / 350°F) until the top is golden and the eggs are set. Slice and serve."
    ]
  },
  {
    id: 11,
    name: "Panis Quadratus (Pompeii Bread)",
    era: "Ancient Roman Era",
    category: "Pastries & Breads",
    image: "./images/ancient-roman/panis-quadratus.webp",
    basePortion: 1,
    ingredients: [
      { name: "Whole Wheat Flour", amount: 4, unit: "Cups" },
      { name: "Sourdough Starter", amount: 1, unit: "Cup" },
      { name: "Warm Water", amount: 1.5, unit: "Cups" },
      { name: "Salt", amount: 1.5, unit: "Teaspoons" }
    ],
    history: "An iconic Roman bread found petrified in the ruins of Pompeii, buried under the ashes of Mount Vesuvius. It features 8 distinct cuts on top to make portioning easier.",
    timeline: [
      { year: "79 AD", event: "Preserved perfectly as it was turned to stone in the ovens of Pompeii when Mount Vesuvius erupted." }
    ],
    instructions: [
      "Mix the flour, water, sourdough starter, and salt in a deep bowl and knead until you get a non-sticky dough.",
      "Cover the dough with a damp cloth and let it ferment at room temperature until it doubles in size (about 4-6 hours).",
      "Shape the fermented dough into a round loaf and tie a string around its equator to create a slight indentation.",
      "Using a knife or dough scraper, make deep cuts radiating from the center outwards to create 8 equal slices (like pizza slices).",
      "Bake in an oven at 200°C (400°F) for about 40-45 minutes until a crust forms and the inside is cooked."
    ]
  },
  {
    id: 12,
    name: "Globuli (Roman Sweet Fritters)",
    era: "Ancient Roman Era",
    category: "Desserts",
    image: "./images/ancient-roman/globuli.webp",
    basePortion: 4,
    ingredients: [
      { name: "Curd Cheese (or Ricotta)", amount: 250, unit: "Grams" },
      { name: "Semolina", amount: 1, unit: "Cup" },
      { name: "Olive Oil (for frying)", amount: 1, unit: "Cup" },
      { name: "Honey", amount: 0.5, unit: "Cup" },
      { name: "Poppy Seeds", amount: 2, unit: "Tablespoons" }
    ],
    history: "A much-loved Roman dessert made by kneading cheese and semolina, frying the dough in olive oil, and then rolling it in honey. Simple yet delicious.",
    timeline: [
      { year: "2nd Century BC", event: "The Roman statesman Cato the Elder provided its recipe in his work 'De Agricultura'." }
    ],
    instructions: [
      "Knead the curd cheese and semolina until you get a smooth, non-sticky dough.",
      "Pinch off walnut-sized pieces from the dough and roll them into balls (globuli/spheres) in your palms.",
      "Heat the olive oil in a pan and fry the dough balls until they are golden yellow.",
      "In a separate bowl, gently heat the honey to make it fluid.",
      "Coat the hot, fried balls in honey, sprinkle with poppy seeds, and serve."
    ]
  },
  {
    id: 13,
    name: "Epityrum (Olive Tapenade)",
    era: "Ancient Roman Era",
    category: "Mezes & Snacks",
    image: "./images/ancient-roman/epityrum.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Black or Green Olives", amount: 2, unit: "Cups" },
      { name: "Olive Oil", amount: 4, unit: "Tablespoons" },
      { name: "White Wine Vinegar", amount: 1, unit: "Tablespoon" },
      { name: "Coriander Seeds (Crushed)", amount: 1, unit: "Teaspoon" },
      { name: "Cumin", amount: 1, unit: "Teaspoon" },
      { name: "Fresh Mint", amount: 1, unit: "Pinch" }
    ],
    history: "A historical tapenade consumed by Romans with bread as an appetizer (gustatio) before a banquet, made by crushing olives with various spices.",
    timeline: [
      { year: "Throughout Antiquity", event: "Consumed as an indispensable part of the olive culture in the Mediterranean basin." }
    ],
    instructions: [
      "Pit the olives.",
      "Coarsely chop or crush the pitted olives in a food processor (or using a mortar) without turning them into a complete paste.",
      "Add the chopped fresh mint, coriander seeds, cumin, vinegar, and olive oil to the olive mixture.",
      "Blend all ingredients well.",
      "Transfer the mixture into a jar or bowl, pour a thin layer of olive oil on top to preserve it, and serve with Panis Quadratus."
    ]
  },
  {
    id: 14,
    name: "Mulsum (Honeyed Wine)",
    era: "Ancient Roman Era",
    category: "Beverages & Sherbets",
    image: "./images/ancient-roman/honey.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Dry Red Wine (or Red Grape Must)", amount: 1, unit: "Liter" },
      { name: "Honey", amount: 1, unit: "Cup" },
      { name: "Black Peppercorns", amount: 1, unit: "Teaspoon" },
      { name: "Bay Leaves", amount: 2, unit: "Pieces" }
    ],
    history: "A honey-sweetened and spiced beverage served at the beginning of Roman banquets. Romans considered drinking wine straight (unmixed) to be barbaric.",
    timeline: [
      { year: "Republican Period", event: "Became the standard welcome drink for Roman banquets (convivium)." }
    ],
    instructions: [
      "Pour the wine or grape must into a pot and gently heat on low without bringing it to a boil.",
      "Add honey to the warm liquid and stir with a wooden spoon until completely dissolved.",
      "Toss in the black peppercorns and bay leaves.",
      "Remove the mixture from the heat and let it steep until it reaches room temperature so the spices release their aromas.",
      "Strain the beverage, chill it in the refrigerator, and serve."
    ]
  },
  {
    id: 15,
    name: "Ancient Anatolian Lentil Soup",
    era: "Ancient Antiquity (Hittite)",
    category: "Soups",
    image: "./images/ancient-antiquity/lentil-soup.webp",
    basePortion: 4,
    ingredients: [
      { name: "Red Lentils", amount: 1.5, unit: "Cups" },
      { name: "Water or Broth", amount: 6, unit: "Cups" },
      { name: "Onion", amount: 1, unit: "Piece" },
      { name: "Cumin Seeds", amount: 1, unit: "Teaspoon" },
      { name: "Animal Fat or Olive Oil", amount: 2, unit: "Tablespoons" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "One of the oldest recorded dishes in history, found on Hittite cuneiform tablets in Anatolia. It proves that lentils have been a staple of the Anatolian diet for millennia.",
    timeline: [
      { year: "1600 BC", event: "First recorded in Hittite culinary tablets found in Hattusa." }
    ],
    instructions: [
      "Wash the red lentils thoroughly until the water runs clear.",
      "Finely chop the onion and sauté it in the fat or olive oil until softened.",
      "Add the cumin seeds and toast them lightly for about a minute to release their aroma.",
      "Add the lentils, water (or broth), and salt to the pot.",
      "Bring to a boil, then reduce the heat, cover, and simmer for 30-40 minutes until the lentils break down and the soup thickens."
    ]
  },
  {
    id: 16,
    name: "Tuh'u (Mesopotamian Lamb & Beet Stew)",
    era: "Ancient Antiquity (Mesopotamian)",
    category: "Main Courses",
    image: "./images/ancient-antiquity/tuhu.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Diced Lamb Leg", amount: 500, unit: "Grams" },
      { name: "Fresh Beets (with leaves)", amount: 3, unit: "Pieces" },
      { name: "Onion", amount: 1, unit: "Piece" },
      { name: "Garlic", amount: 4, unit: "Cloves" },
      { name: "Coriander Seeds (Crushed)", amount: 1, unit: "Teaspoon" },
      { name: "Arugula", amount: 1, unit: "Bunch" },
      { name: "Beer (Dark or Amber)", amount: 0.5, unit: "Cup" },
      { name: "Water", amount: 2, unit: "Cups" }
    ],
    history: "Translated from the Yale Culinary Tablets, this 4000-year-old Babylonian recipe is one of the world's oldest written, complex stew recipes, characterized by its vibrant red color from the beets.",
    timeline: [
      { year: "1700 BC", event: "Inscribed on Babylonian cuneiform tablets, now housed at Yale University." }
    ],
    instructions: [
      "Sear the diced lamb in a heated pot until browned on all sides.",
      "Add finely chopped onions and crushed garlic, sautéing until translucent.",
      "Peel and dice the beets, then add them to the pot along with the crushed coriander seeds.",
      "Pour in the beer and water, bring to a gentle boil, then cover and simmer on low heat for 1 hour.",
      "Stir in chopped beet leaves and arugula during the last 10 minutes of cooking. Serve warm."
    ]
  },
  {
    id: 17,
    name: "Prason (Ancient Greek Roasted Leeks)",
    era: "Ancient Antiquity (Ancient Greek)",
    category: "Olive Oil Dishes & Vegetables",
    image: "./images/ancient-antiquity/prason.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Leeks", amount: 4, unit: "Pieces" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Red Wine Vinegar", amount: 2, unit: "Tablespoons" },
      { name: "Coriander Seeds", amount: 1, unit: "Teaspoon" },
      { name: "Sea Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "Leeks were highly valued in Ancient Greece and Rome. They were often slow-roasted or boiled and dressed with oil, vinegar, and spices, serving as a staple vegetable dish.",
    timeline: [
      { year: "400 BC", event: "Frequently mentioned in ancient Greek comedies and medical texts as a healthy, staple food." }
    ],
    instructions: [
      "Wash the leeks thoroughly, trim the dark green tough ends, and cut the white/light green parts into 2-inch chunks.",
      "Place the leeks in a baking dish and drizzle generously with olive oil and red wine vinegar.",
      "Sprinkle sea salt and coriander seeds over the leeks.",
      "Toss to coat evenly, then cover the dish with parchment paper or a lid.",
      "Bake at 180°C (350°F) for 40 minutes until the leeks are tender and slightly caramelized. Serve at room temperature."
    ]
  },
  {
    id: 18,
    name: "Ninda (Hittite Barley Bread)",
    era: "Ancient Antiquity (Hittite)",
    category: "Pastries & Breads",
    image: "./images/ancient-antiquity/ninda.jpg",
    basePortion: 1,
    ingredients: [
      { name: "Barley Flour", amount: 3, unit: "Cups" },
      { name: "Wheat Flour", amount: 1, unit: "Cup" },
      { name: "Warm Water", amount: 1.5, unit: "Cups" },
      { name: "Honey", amount: 1, unit: "Tablespoon" },
      { name: "Active Sourdough Starter", amount: 0.5, unit: "Cup" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "Bread ('Ninda' in Sumerian/Hittite logs) was the absolute core of the ancient Near Eastern diet. Hittite texts mention over 150 types of breads and pastries.",
    timeline: [
      { year: "1500 BC", event: "Hittite texts recorded various ritualistic and daily breads made from barley and wheat." }
    ],
    instructions: [
      "In a large bowl, mix the warm water, honey, and sourdough starter.",
      "Add the barley flour, wheat flour, and salt, mixing until a dough forms.",
      "Knead the dough on a floured surface for 10 minutes (barley dough will be denser than pure wheat dough).",
      "Place in an oiled bowl, cover, and let it rise in a warm place for 4-6 hours.",
      "Shape into a round, flat loaf, place on a baking stone or tray, and bake at 200°C (400°F) for 35-40 minutes."
    ]
  },
  {
    id: 19,
    name: "Mersu (Mesopotamian Date Candy)",
    era: "Ancient Antiquity (Mesopotamian)",
    category: "Desserts",
    image: "./images/ancient-antiquity/mersu.webp",
    basePortion: 4,
    ingredients: [
      { name: "Pitted Dates", amount: 2, unit: "Cups" },
      { name: "Pistachios (Shelled)", amount: 0.5, unit: "Cup" },
      { name: "Walnuts", amount: 0.5, unit: "Cup" },
      { name: "Sesame Seeds", amount: 3, unit: "Tablespoons" },
      { name: "Melted Butter (or Animal Fat)", amount: 1, unit: "Tablespoon" }
    ],
    history: "Mersu is one of the earliest known sweets, often offered to the gods in Mesopotamian temples. It required no baking and relied on the natural sweetness of dates.",
    timeline: [
      { year: "2000 BC", event: "Recorded on clay tablets as a ceremonial offering to deities in ancient Sumer and Akkad." }
    ],
    instructions: [
      "Toast the sesame seeds lightly in a dry pan until golden, then set aside.",
      "Finely chop the pistachios and walnuts, or crush them in a mortar.",
      "Place the pitted dates in a food processor or mash them vigorously in a mortar until they form a thick paste.",
      "Knead the melted butter and the crushed nuts into the date paste until evenly distributed.",
      "Roll the mixture into bite-sized balls and coat them entirely in the toasted sesame seeds."
    ]
  },
  {
    id: 20,
    name: "Etnos (Ancient Greek Fava Puree)",
    era: "Ancient Antiquity (Ancient Greek)",
    category: "Mezes & Snacks",
    image: "./images/ancient-antiquity/etnos.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Yellow Split Peas (or Fava Beans)", amount: 1.5, unit: "Cups" },
      { name: "Water", amount: 4, unit: "Cups" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Red Onion", amount: 1, unit: "Piece" },
      { name: "Fresh Thyme", amount: 1, unit: "Tablespoon" },
      { name: "Sea Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "A very popular, simple dish in ancient Greece. Sold in the streets of Athens, this thick legume puree was scooped up with bread and served as a quick, nutritious meal or appetizer.",
    timeline: [
      { year: "5th Century BC", event: "A staple in Classical Athens, commonly sold by street vendors." }
    ],
    instructions: [
      "Rinse the split peas well under cold water.",
      "Place the peas in a pot with water and half of the chopped red onion. Bring to a boil, skimming off any foam.",
      "Reduce the heat, cover, and simmer for 40-50 minutes until the peas are completely mushy and the water is absorbed.",
      "Whisk or blend the mixture until it becomes a smooth, creamy puree, stirring in the salt and half of the olive oil.",
      "Serve warm or cold, topped with the remaining chopped raw onion, fresh thyme, and a generous drizzle of the rest of the olive oil."
    ]
  },
  {
    id: 21,
    name: "Kykeon (Barley & Mint Drink)",
    era: "Ancient Antiquity (Ancient Greek)",
    category: "Beverages & Sherbets",
    image: "./images/ancient-antiquity/kykeon.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Roasted Barley Flour", amount: 4, unit: "Tablespoons" },
      { name: "Water", amount: 4, unit: "Cups" },
      { name: "Honey", amount: 2, unit: "Tablespoons" },
      { name: "Fresh Mint Leaves", amount: 1, unit: "Handful" },
      { name: "Grated Goat Cheese (Optional)", amount: 1, unit: "Tablespoon" }
    ],
    history: "A widely popular ancient Greek beverage. Mentioned in Homer's epics, it was consumed by peasants for sustenance and by elites during the Eleusinian Mysteries as a sacred drink.",
    timeline: [
      { year: "8th Century BC", event: "Described in Homer's Iliad and Odyssey as a refreshing and restorative potion." }
    ],
    instructions: [
      "In a mortar or bowl, crush the fresh mint leaves to release their oils.",
      "In a pitcher, whisk the roasted barley flour into the water vigorously to prevent clumping.",
      "Add the honey and crushed mint leaves to the mixture and stir well until the honey dissolves.",
      "Let the drink sit for 15-20 minutes to allow the flavors to infuse.",
      "(Optional, for the Homeric version): Sprinkle a tiny bit of hard, grated goat cheese on top right before serving."
    ]
  },
  {
    id: 22,
    name: "Minestrone (Classic Italian Vegetable Soup)",
    era: "Traditional Italian",
    category: "Soups",
    image: "./images/italian/minestrone.webp",
    basePortion: 6,
    ingredients: [
      { name: "Carrots, Celery, Onion (Mirepoix)", amount: 1.5, unit: "Cups" },
      { name: "Zucchini", amount: 1, unit: "Piece" },
      { name: "Cannellini Beans", amount: 1, unit: "Cup" },
      { name: "Crushed Tomatoes", amount: 400, unit: "Grams" },
      { name: "Vegetable or Chicken Broth", amount: 6, unit: "Cups" },
      { name: "Short Pasta (like Ditalini)", amount: 0.5, unit: "Cup" },
      { name: "Parmigiano-Reggiano Rind", amount: 1, unit: "Piece" },
      { name: "Olive Oil", amount: 2, unit: "Tablespoons" }
    ],
    history: "A staple of 'cucina povera' (poor kitchen), Minestrone is a hearty vegetable soup that changes with the seasons based on available produce. It is a cornerstone of the Italian diet.",
    timeline: [
      { year: "2nd Century BC", event: "Pre-Roman origins as a simple vegetable broth, evolving into its modern form after the introduction of tomatoes from the Americas in the 16th century." }
    ],
    instructions: [
      "Dice the carrots, celery, and onion, and sauté them in olive oil in a large pot until softened.",
      "Add diced zucchini, crushed tomatoes, and the broth. Stir well.",
      "Drop in the Parmigiano-Reggiano rind for a deep umami flavor.",
      "Bring to a boil, then reduce heat and let it simmer for 30 minutes.",
      "Add the Cannellini beans and pasta, cooking for another 10-12 minutes until the pasta is al dente.",
      "Remove the cheese rind before serving hot, optionally topped with a drizzle of olive oil and grated cheese."
    ]
  },
  {
    id: 23,
    name: "Ossobuco alla Milanese",
    era: "Traditional Italian",
    category: "Main Courses",
    image: "./images/italian/ossobuco-alla-milanese.webp",
    basePortion: 4,
    ingredients: [
      { name: "Veal Shanks (Cross-cut)", amount: 4, unit: "Pieces" },
      { name: "Flour (for dusting)", amount: 0.5, unit: "Cup" },
      { name: "Butter", amount: 3, unit: "Tablespoons" },
      { name: "Dry White Wine", amount: 1, unit: "Cup" },
      { name: "Beef or Veal Broth", amount: 2, unit: "Cups" },
      { name: "Onion, Celery, Carrot", amount: 1, unit: "Cup (diced)" },
      { name: "Fresh Parsley, Lemon Zest, Garlic (Gremolata)", amount: 3, unit: "Tablespoons" }
    ],
    history: "A Lombard culinary masterpiece consisting of cross-cut veal shanks braised with vegetables, white wine, and broth. It is traditionally garnished with 'gremolata' and served with saffron risotto.",
    timeline: [
      { year: "19th Century", event: "Officially documented in Pellegrino Artusi's famous cookbook, though its origins in Milan date back to the 18th century." }
    ],
    instructions: [
      "Tie the veal shanks with kitchen twine so they hold their shape, dust them lightly with flour.",
      "Melt butter in a heavy pot and sear the veal shanks on both sides until golden brown, then remove them and set aside.",
      "In the same pot, sauté the diced onion, celery, and carrot until soft.",
      "Return the veal to the pot, pour in the white wine, and let it evaporate slightly.",
      "Add the broth to cover half the meat, cover the pot, and simmer on very low heat for 1.5 to 2 hours until the meat is falling off the bone.",
      "Chop parsley, garlic, and lemon zest together to make the gremolata, and sprinkle it over the dish 5 minutes before turning off the heat."
    ]
  },
  {
    id: 24,
    name: "Caponata Siciliana",
    era: "Traditional Italian",
    category: "Olive Oil Dishes & Vegetables",
    image: "./images/italian/caponata-siciliana.jpg",
    basePortion: 6,
    ingredients: [
      { name: "Eggplants", amount: 2, unit: "Large Pieces" },
      { name: "Celery Stalks", amount: 3, unit: "Pieces" },
      { name: "Onion", amount: 1, unit: "Piece" },
      { name: "Tomato Puree (Passata)", amount: 1.5, unit: "Cups" },
      { name: "Capers (Rinsed)", amount: 2, unit: "Tablespoons" },
      { name: "Green Olives (Pitted)", amount: 0.5, unit: "Cup" },
      { name: "White Wine Vinegar", amount: 0.25, unit: "Cup" },
      { name: "Sugar", amount: 1, unit: "Tablespoon" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" }
    ],
    history: "A classic Sicilian 'agrodolce' (sweet and sour) dish made with fried eggplant, celery, capers, and tomatoes. It perfectly reflects the island's Arab, Spanish, and Greek historical influences.",
    timeline: [
      { year: "18th Century", event: "Standardized in Sicily as a vegetable-heavy dish, having evolved from a seafood dish consumed by the aristocracy." }
    ],
    instructions: [
      "Dice the eggplants into cubes, salt them, and let them rest for 30 minutes to remove bitterness. Pat dry.",
      "Fry the eggplant cubes in generous olive oil until golden and soft. Remove and set aside.",
      "In the same pan, sauté the chopped onion and celery until tender.",
      "Add the capers, green olives, and tomato puree. Let it simmer for 10 minutes.",
      "Stir in the sugar and white wine vinegar, cooking for a few minutes until the vinegar evaporates and creates a sweet-sour glaze.",
      "Fold the fried eggplant back into the sauce, mix gently, and let it cool. It is best served at room temperature."
    ]
  },
  {
    id: 25,
    name: "Focaccia Genovese",
    era: "Traditional Italian",
    category: "Pastries & Breads",
    image: "./images/italian/focaccia-genovese.jpg",
    basePortion: 8,
    ingredients: [
      { name: "Bread Flour", amount: 4, unit: "Cups" },
      { name: "Warm Water", amount: 1.5, unit: "Cups" },
      { name: "Active Dry Yeast", amount: 2, unit: "Teaspoons" },
      { name: "Extra Virgin Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Fine Salt", amount: 2, unit: "Teaspoons" },
      { name: "Coarse Sea Salt (for topping)", amount: 1, unit: "Tablespoon" },
      { name: "Fresh Rosemary", amount: 2, unit: "Sprigs" }
    ],
    history: "A flat oven-baked Italian bread product, associated closely with the Liguria region. It is famous for its dimpled surface, fluffy interior, and crispy crust made rich by high-quality olive oil.",
    timeline: [
      { year: "Ancient Rome", event: "Derived from 'panis focacius', a flatbread baked on the hearth or under the ashes of a fire." }
    ],
    instructions: [
      "Dissolve the yeast in warm water. In a large bowl, mix the flour, fine salt, yeast mixture, and 2 tablespoons of olive oil to form a dough.",
      "Knead the dough until smooth, place it in an oiled bowl, cover, and let it double in size (about 1.5 hours).",
      "Pour a generous amount of olive oil into a rectangular baking pan. Stretch the dough into the pan, let it rest for 30 minutes to relax, then stretch it to the edges.",
      "Let it rise for another 45 minutes. Then, press your fingers deep into the dough to create the classic focaccia dimples.",
      "Drizzle the remaining olive oil and a splash of water over the top, sprinkle with coarse sea salt and rosemary leaves.",
      "Bake at 220°C (425°F) for 20-25 minutes until golden brown."
    ]
  },
  {
    id: 26,
    name: "Tiramisu",
    era: "Modern Italian",
    category: "Desserts",
    image: "./images/italian/tiramisu.webp",
    basePortion: 8,
    ingredients: [
      { name: "Mascarpone Cheese", amount: 500, unit: "Grams" },
      { name: "Ladyfingers (Savoiardi)", amount: 24, unit: "Pieces" },
      { name: "Eggs (separated)", amount: 4, unit: "Pieces" },
      { name: "Granulated Sugar", amount: 0.5, unit: "Cup" },
      { name: "Strong Espresso (Cooled)", amount: 1.5, unit: "Cups" },
      { name: "Marsala Wine or Coffee Liqueur", amount: 2, unit: "Tablespoons" },
      { name: "Unsweetened Cocoa Powder", amount: 2, unit: "Tablespoons" }
    ],
    history: "Literally translating to 'pick me up' or 'cheer me up', this iconic coffee-flavored dessert perfectly balances the bitterness of espresso with the rich creaminess of mascarpone.",
    timeline: [
      { year: "1960s", event: "Invented in the Veneto region, specifically in Treviso, quickly becoming Italy's most famous dessert worldwide." }
    ],
    instructions: [
      "Whip the egg yolks with half of the sugar until pale and fluffy. Gently fold in the mascarpone cheese until smooth.",
      "In a separate bowl, whip the egg whites to stiff peaks, adding the remaining sugar. Fold the egg whites gently into the mascarpone mixture.",
      "Mix the cooled espresso with the Marsala wine/liqueur in a shallow dish.",
      "Quickly dip each ladyfinger into the coffee mixture (do not soak them) and arrange a tight layer at the bottom of a rectangular dish.",
      "Spread half of the mascarpone cream evenly over the ladyfingers.",
      "Repeat with a second layer of dipped ladyfingers and top with the remaining cream.",
      "Refrigerate for at least 4-6 hours (overnight is best). Dust generously with cocoa powder before serving."
    ]
  },
  {
    id: 27,
    name: "Bruschetta al Pomodoro",
    era: "Traditional Italian",
    category: "Mezes & Snacks",
    image: "./images/italian/bruschetta-al-pomodoro.webp",
    basePortion: 4,
    ingredients: [
      { name: "Rustic Italian Bread (Ciabatta or Pagnotta)", amount: 4, unit: "Thick Slices" },
      { name: "Ripe Cherry or Roma Tomatoes", amount: 2, unit: "Cups (Diced)" },
      { name: "Fresh Basil Leaves", amount: 0.25, unit: "Cup (Torn)" },
      { name: "Garlic", amount: 2, unit: "Cloves" },
      { name: "Extra Virgin Olive Oil", amount: 3, unit: "Tablespoons" },
      { name: "Balsamic Glaze (Optional)", amount: 1, unit: "Tablespoon" },
      { name: "Salt and Black Pepper", amount: 1, unit: "Pinch" }
    ],
    history: "A classic 'antipasto' consisting of grilled bread rubbed with garlic and topped with olive oil. It is a brilliant example of Italian cuisine's dedication to high-quality, simple ingredients.",
    timeline: [
      { year: "15th Century", event: "Originated in Central Italy as a way for olive oil producers to taste freshly pressed oil on toasted bread." }
    ],
    instructions: [
      "Dice the tomatoes and mix them in a bowl with the torn fresh basil, a tablespoon of olive oil, salt, and pepper. Let it sit for 10-15 minutes.",
      "Toast or grill the bread slices until they are crispy on the outside but still slightly soft inside.",
      "Take a peeled, raw garlic clove and rub it lightly over the warm, toasted bread slices. The rough surface of the bread will grate the garlic.",
      "Drizzle a little more olive oil on the bread slices.",
      "Top the bread generously with the tomato mixture, drizzle with balsamic glaze if desired, and serve immediately."
    ]
  },
  {
    id: 28,
    name: "Limoncello",
    era: "Traditional Italian",
    category: "Beverages & Sherbets",
    image: "./images/italian/limoncello.webp",
    basePortion: 1, // Yields 1 Liter
    ingredients: [
      { name: "Organic Lemons (thick-skinned, un-waxed)", amount: 10, unit: "Pieces" },
      { name: "Pure Grain Alcohol (or high-proof Vodka)", amount: 750, unit: "Milliliters" },
      { name: "Water", amount: 3, unit: "Cups" },
      { name: "Granulated Sugar", amount: 2.5, unit: "Cups" }
    ],
    history: "A famous Italian lemon liqueur mainly produced in Southern Italy, especially around the Gulf of Naples, the Sorrentine Peninsula, and the Amalfi Coast. Served chilled as an after-dinner 'digestivo'.",
    timeline: [
      { year: "Early 20th Century", event: "Commercialized and popularized in the Sorrento area, though local families claim recipes dating back centuries." }
    ],
    instructions: [
      "Wash the lemons thoroughly. Carefully peel the lemons, removing only the yellow zest and leaving the bitter white pith behind.",
      "Place the lemon peels in a large glass jar and pour the alcohol over them. Seal the jar tightly.",
      "Store the jar in a cool, dark place for 1 to 4 weeks to let the alcohol extract the lemon oils.",
      "After the steeping period, make a simple syrup by boiling the water and sugar until the sugar dissolves. Let it cool completely.",
      "Strain the infused alcohol through a fine mesh sieve or cheesecloth, discarding the peels.",
      "Mix the infused alcohol with the cooled sugar syrup.",
      "Bottle the Limoncello and store it in the freezer. Serve ice cold in small chilled glasses."
    ]
  },
  {
    id: 29,
    name: "Tutmach Soup (Tutmaç Çorbası)",
    era: "Anatolian Seljuk Era",
    category: "Soups",
    image: "./images/seljuk/tutmac.webp",
    basePortion: 6,
    ingredients: [
      { name: "Green Lentils", amount: 0.5, unit: "Cup" },
      { name: "Chickpeas (Pre-boiled)", amount: 0.5, unit: "Cup" },
      { name: "Homemade Noodles (Erişte)", amount: 1, unit: "Cup" },
      { name: "Strained Yogurt", amount: 1.5, unit: "Cups" },
      { name: "Egg Yolk", amount: 1, unit: "Piece" },
      { name: "Flour", amount: 1, unit: "Tablespoon" },
      { name: "Butter", amount: 2, unit: "Tablespoons" },
      { name: "Dried Mint", amount: 1, unit: "Tablespoon" }
    ],
    history: "A famous, hearty Central Asian Turkic soup that became a staple in Seljuk palaces and army camps. It was highly valued for its nutritional density and was mentioned by the 11th-century scholar Mahmud al-Kashgari.",
    timeline: [
      { year: "11th Century", event: "Recorded in the 'Dīwān Lughāt al-Turk' (Compendium of the Languages of the Turks)." }
    ],
    instructions: [
      "Boil the green lentils in a large pot until they are slightly tender but not mushy.",
      "Add the pre-boiled chickpeas and the homemade noodles (erişte) to the pot. Cook until the noodles are soft.",
      "In a separate bowl, whisk together the strained yogurt, egg yolk, and flour to create a tempering mixture (terbiye).",
      "Gradually add a ladle of the hot soup water to the yogurt mixture, whisking constantly to prevent curdling.",
      "Slowly pour the tempered yogurt back into the boiling soup while stirring. Simmer for 5 more minutes.",
      "Melt the butter in a small pan, stir in the dried mint until fragrant, and pour the sizzling mint butter over the soup before serving."
    ]
  },
  {
    id: 30,
    name: "Herise / Keshkek (Keşkek)",
    era: "Anatolian Seljuk Era",
    category: "Main Courses",
    image: "./images/seljuk/keshkek.webp",
    basePortion: 8,
    ingredients: [
      { name: "Whole Hulled Wheat (Aşurelik Buğday)", amount: 2, unit: "Cups" },
      { name: "Lamb or Mutton (Bone-in)", amount: 750, unit: "Grams" },
      { name: "Water or Meat Broth", amount: 8, unit: "Cups" },
      { name: "Butter", amount: 4, unit: "Tablespoons" },
      { name: "Salt", amount: 2, unit: "Teaspoons" },
      { name: "Black Pepper", amount: 1, unit: "Teaspoon" }
    ],
    history: "A ceremonial dish of the Seljuks, often cooked in massive cauldrons for weddings, religious holidays, and to feed the poor at Sufi lodges (imarets).",
    timeline: [
      { year: "12th Century", event: "Became a staple of Anatolian communal feasts and Sufi lodge kitchens." }
    ],
    instructions: [
      "Soak the wheat in water overnight.",
      "Place the meat and soaked wheat in a large, heavy-bottomed pot. Add the water/broth and bring to a boil.",
      "Skim off any foam, reduce the heat to the lowest setting, cover, and let it slow-cook for 4 to 6 hours until the meat falls off the bone.",
      "Remove the bones carefully from the pot.",
      "Using a large wooden spoon (or a traditional mallet), vigorously beat the wheat and meat mixture against the sides of the pot until it melds into a thick, smooth, and stretchy porridge.",
      "Serve hot on flat plates, topped with a generous pour of sizzling melted butter."
    ]
  },
  {
    id: 31,
    name: "Spinach Borani (Ispanak Boranisi)",
    era: "Anatolian Seljuk Era",
    category: "Olive Oil Dishes & Vegetables",
    image: "./images/seljuk/ispanak-borani.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Fresh Spinach", amount: 500, unit: "Grams" },
      { name: "Onion", amount: 1, unit: "Piece" },
      { name: "Garlic", amount: 3, unit: "Cloves" },
      { name: "Yogurt", amount: 1.5, unit: "Cups" },
      { name: "Butter or Tail Fat", amount: 2, unit: "Tablespoons" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "Named after Buran, the wife of Abbasid Caliph Al-Ma'mun, 'Borani' refers to dishes combining vegetables with yogurt. It was adopted and widely consumed in the Seljuk Empire using local greens.",
    timeline: [
      { year: "13th Century", event: "A popular vegetable preparation method throughout the Islamic Golden Age and Anatolia." }
    ],
    instructions: [
      "Wash the spinach thoroughly and chop it roughly.",
      "Finely chop the onion and sauté it in butter (or traditional tail fat) until translucent.",
      "Add the spinach to the pot, cover, and cook until the leaves are wilted and the water they release has evaporated.",
      "Season with salt and let the spinach mixture cool to room temperature.",
      "Crush the garlic and mix it thoroughly with the yogurt.",
      "Fold the garlic yogurt into the cooled spinach and serve as a refreshing vegetable side."
    ]
  },
  {
    id: 32,
    name: "Historic Etli Ekmek (Seljuk Meat Flatbread)",
    era: "Anatolian Seljuk Era",
    category: "Pastries & Breads",
    image: "./images/seljuk/etli-ekmek.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Bread Dough", amount: 500, unit: "Grams" },
      { name: "Minced Lamb or Beef", amount: 300, unit: "Grams" },
      { name: "Onions", amount: 2, unit: "Pieces" },
      { name: "Fresh Parsley", amount: 0.5, unit: "Bunch" },
      { name: "Black Pepper", amount: 1, unit: "Teaspoon" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "The legendary flatbread of Konya, the Seljuk capital. The historical version lacked tomatoes and modern peppers (New World ingredients), relying on meat, onions, and herbs spread thinly over a long piece of dough.",
    timeline: [
      { year: "13th Century", event: "Baked in the communal wood-fired ovens of Konya for both the public and the palace." }
    ],
    instructions: [
      "Finely chop or grate the onions and finely mince the parsley.",
      "Knead the minced meat together with the onions, parsley, salt, and black pepper. Add a tiny splash of water to make the mixture spreadable.",
      "Divide the bread dough into small balls (about the size of an apple) and let them rest.",
      "Roll out each dough ball on a floured surface into a very thin, long oval shape.",
      "Spread a thin, even layer of the meat mixture over the entire surface of the dough, pressing it down lightly.",
      "Bake in a very hot oven (ideally on a pizza stone at 250°C/480°F) for 5-8 minutes until the edges are crispy and the meat is cooked. Slice and serve hot."
    ]
  },
  {
    id: 33,
    name: "Hasude (Pekmez Halva)",
    era: "Anatolian Seljuk Era",
    category: "Desserts",
    image: "./images/seljuk/hasude.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Grape Molasses (Pekmez)", amount: 1, unit: "Cup" },
      { name: "Water", amount: 1, unit: "Cup" },
      { name: "Wheat Flour", amount: 3, unit: "Tablespoons" },
      { name: "Butter", amount: 2, unit: "Tablespoons" },
      { name: "Crushed Walnuts", amount: 2, unit: "Tablespoons" }
    ],
    history: "Since refined sugar was practically non-existent, Seljuk desserts heavily relied on fruit molasses (pekmez) and honey. Hasude is a quick, energy-dense dessert often made in nomadic tents and stone houses alike.",
    timeline: [
      { year: "Early Anatolian Era", event: "A traditional winter dessert valued for keeping people warm and providing immediate energy." }
    ],
    instructions: [
      "In a bowl, whisk together the grape molasses, water, and flour until there are no lumps.",
      "Melt the butter in a wide pan over medium heat.",
      "Pour the molasses mixture into the bubbling butter.",
      "Stir continuously and vigorously with a wooden spoon as the mixture thickens and begins to pull away from the sides of the pan.",
      "Once it reaches a glossy, thick, pudding-like consistency, remove from heat.",
      "Serve warm, sprinkled with crushed walnuts."
    ]
  },
  {
    id: 34,
    name: "Spiced Curd Cheese (Baharatlı Çökelek / Sürk)",
    era: "Anatolian Seljuk Era",
    category: "Mezes & Snacks",
    image: "./images/seljuk/surk.webp",
    basePortion: 4,
    ingredients: [
      { name: "Curd Cheese (Çökelek or Lor)", amount: 250, unit: "Grams" },
      { name: "Cumin", amount: 1, unit: "Teaspoon" },
      { name: "Dried Thyme", amount: 1, unit: "Teaspoon" },
      { name: "Pul Biber (Aleppo Pepper)", amount: 1, unit: "Teaspoon" },
      { name: "Olive Oil or Walnut Oil", amount: 3, unit: "Tablespoons" },
      { name: "Walnuts (Crushed)", amount: 0.25, unit: "Cup" }
    ],
    history: "A very old Anatolian method of preserving leftover milk byproducts. Curd cheese was heavily spiced, kneaded, and sometimes sun-dried to create a robust, flavorful snack for travelers and soldiers.",
    timeline: [
      { year: "12th Century", event: "Consumed widely by Turkmen nomads and settled Seljuks as a preserved, high-protein food." }
    ],
    instructions: [
      "Place the curd cheese in a mixing bowl. If it is very dry, add a splash of water or milk.",
      "Add the cumin, dried thyme, and red pepper flakes (pul biber).",
      "Knead the spices into the cheese until it forms a uniform, slightly sticky paste.",
      "Shape the cheese into small balls or press it onto a small serving plate.",
      "Drizzle generously with olive oil (or walnut oil for historical accuracy) and sprinkle with crushed walnuts.",
      "Serve as an appetizer with warm flatbread."
    ]
  },
  {
    id: 35,
    name: "Sirkencubin (Oxymel Sherbet)",
    era: "Anatolian Seljuk Era",
    category: "Beverages & Sherbets",
    image: "./images/seljuk/sirkencubin-serbeti.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Honey", amount: 3, unit: "Tablespoons" },
      { name: "Apple or Grape Vinegar", amount: 3, unit: "Tablespoons" },
      { name: "Water", amount: 4, unit: "Cups" },
      { name: "Fresh Mint Leaves", amount: 1, unit: "Handful" }
    ],
    history: "A historic medicinal and refreshing drink with Persian roots ('Sirka' meaning vinegar, 'Angubin' meaning honey). It was the favorite drink of Rumi (Mevlana) and a staple of the Mevlevi dervish lodges.",
    timeline: [
      { year: "13th Century", event: "Frequently mentioned in Rumi's 'Masnavi' as a symbol of balance, healing, and spiritual purity." }
    ],
    instructions: [
      "In a large pitcher, combine the honey and vinegar.",
      "Stir vigorously until the honey is completely dissolved in the vinegar.",
      "Add the water to the pitcher and mix well. Taste and adjust—it should be a perfect balance of sweet and tart.",
      "Crush a few fresh mint leaves lightly with your fingers to release their oils and drop them into the pitcher.",
      "Let the sherbet chill in a cool place (or refrigerator) for an hour to allow the mint flavor to infuse.",
      "Serve cold."
    ]
  },
  {
    id: 36,
    name: "Andalusian Gazpacho",
    era: "Traditional Spanish",
    category: "Soups",
    image: "./images/spanish/Andalusian-Gazpacho.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Ripe Roma Tomatoes", amount: 1, unit: "Kilogram" },
      { name: "Cucumber", amount: 1, unit: "Piece" },
      { name: "Green Bell Pepper", amount: 1, unit: "Piece" },
      { name: "Garlic", amount: 2, unit: "Cloves" },
      { name: "Stale White Bread (Crusts removed)", amount: 1, unit: "Thick Slice" },
      { name: "Extra Virgin Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Sherry Vinegar (Vinagre de Jerez)", amount: 2, unit: "Tablespoons" },
      { name: "Salt", amount: 1, unit: "Teaspoon" }
    ],
    history: "A globally famous cold soup from Andalusia. Originally a humble peasant meal made only of bread, garlic, olive oil, and vinegar, it evolved into its iconic red form after tomatoes and peppers were brought from the Americas.",
    timeline: [
      { year: "19th Century", event: "The modern tomato-based version of Gazpacho became standardized and globally recognized." }
    ],
    instructions: [
      "Soak the stale bread in a little bit of water for a few minutes until softened.",
      "Chop the tomatoes, peeled cucumber, green pepper, and garlic into chunks.",
      "Place the vegetables and the soaked bread into a high-powered blender.",
      "Blend until completely smooth.",
      "While the blender is running on a low speed, slowly drizzle in the extra virgin olive oil to emulsify the soup, giving it a creamy, orange-pink texture.",
      "Add the sherry vinegar and salt to taste. Chill in the refrigerator for at least 2 hours before serving cold."
    ]
  },
  {
    id: 37,
    name: "Paella Valenciana",
    era: "Traditional Spanish",
    category: "Main Courses",
    image: "./images/spanish/paella-valenciana.webp",
    basePortion: 4,
    ingredients: [
      { name: "Bomba Rice", amount: 2, unit: "Cups" },
      { name: "Chicken Pieces (Bone-in)", amount: 500, unit: "Grams" },
      { name: "Rabbit Pieces (Bone-in)", amount: 300, unit: "Grams" },
      { name: "Flat Green Beans (Bajoqueta)", amount: 200, unit: "Grams" },
      { name: "Lima Beans (Garrofón)", amount: 0.5, unit: "Cup" },
      { name: "Chicken Broth", amount: 6, unit: "Cups" },
      { name: "Saffron Threads", amount: 1, unit: "Pinch" },
      { name: "Sweet Smoked Paprika (Pimentón)", amount: 1, unit: "Teaspoon" },
      { name: "Olive Oil", amount: 0.25, unit: "Cup" }
    ],
    history: "The quintessential Spanish dish, originating in the Albufera lagoon area of Valencia. Authentic Paella Valenciana does not contain seafood; it was historically a farmer's meal cooked over an open wood fire using local meats and beans.",
    timeline: [
      { year: "19th Century", event: "The recipe became formalized in Valencia and started spreading across Spain as a symbol of regional identity." }
    ],
    instructions: [
      "Heat the olive oil in a wide, shallow paella pan. Fry the chicken and rabbit pieces until golden brown.",
      "Push the meat to the edges of the pan. Add the green beans and lima beans to the center and sauté for a few minutes.",
      "Clear a small space in the center, add the sweet smoked paprika, and toast it for just 10 seconds to avoid burning.",
      "Pour in the chicken broth and add the saffron threads. Bring to a vigorous boil and let it cook for 10 minutes.",
      "Sprinkle the Bomba rice evenly across the entire pan. Do not stir the rice after this point.",
      "Cook on medium-high for 10 minutes, then lower the heat and cook until the liquid is absorbed and a crispy crust (socarrat) forms at the bottom. Let it rest for 5 minutes before serving."
    ]
  },
  {
    id: 38,
    name: "Pisto Manchego",
    era: "Traditional Spanish",
    category: "Olive Oil Dishes & Vegetables",
    image: "./images/spanish/pisto-manchego.webp",
    basePortion: 4,
    ingredients: [
      { name: "Zucchini", amount: 1, unit: "Large Piece" },
      { name: "Onion", amount: 1, unit: "Piece" },
      { name: "Red Bell Pepper", amount: 1, unit: "Piece" },
      { name: "Green Bell Pepper", amount: 1, unit: "Piece" },
      { name: "Crushed Tomatoes", amount: 2, unit: "Cups" },
      { name: "Garlic", amount: 2, unit: "Cloves" },
      { name: "Extra Virgin Olive Oil", amount: 0.25, unit: "Cup" },
      { name: "Eggs (for serving)", amount: 4, unit: "Pieces" }
    ],
    history: "Often described as the Spanish ratatouille, Pisto originates from the La Mancha region (famous for Don Quixote). It is a slow-cooked vegetable medley heavily reliant on the high-quality olive oil of central Spain.",
    timeline: [
      { year: "17th Century", event: "Became a staple in La Mancha following the widespread cultivation of tomatoes and peppers brought from the New World." }
    ],
    instructions: [
      "Dice the onion, zucchini, and both bell peppers into even, small cubes.",
      "Heat the olive oil in a large skillet or cazuela (clay pot). Add the onions and garlic, sautéing until soft.",
      "Add the red and green peppers and cook for another 5-7 minutes.",
      "Stir in the diced zucchini and cook until it begins to soften.",
      "Pour in the crushed tomatoes, season with salt and pepper, and simmer on low heat for 30 minutes until the vegetables are tender and the sauce has thickened.",
      "Traditionally served warm with a fried egg on top and crusty bread on the side."
    ]
  },
  {
    id: 39,
    name: "Empanada Gallega (Galician Pie)",
    era: "Traditional Spanish",
    category: "Pastries & Breads",
    image: "./images/spanish/empanada-gallega.jpg",
    basePortion: 8,
    ingredients: [
      { name: "Bread Flour", amount: 4, unit: "Cups" },
      { name: "Dry Yeast", amount: 2, unit: "Teaspoons" },
      { name: "Water", amount: 1, unit: "Cup" },
      { name: "Olive Oil", amount: 0.5, unit: "Cup" },
      { name: "Canned Tuna (or Cod) in Olive Oil", amount: 400, unit: "Grams" },
      { name: "Onions", amount: 2, unit: "Pieces" },
      { name: "Red Bell Pepper", amount: 1, unit: "Piece" },
      { name: "Sweet Smoked Paprika", amount: 1, unit: "Tablespoon" }
    ],
    history: "A large, savory pie from Galicia in northwestern Spain. It was historically a convenient way for pilgrims on the Camino de Santiago to carry a hearty meal that was protected by its crust.",
    timeline: [
      { year: "12th Century", event: "Depicted in the carvings of the Pórtico de la Gloria at the Cathedral of Santiago de Compostela." }
    ],
    instructions: [
      "For the filling (Zaragata): Slice the onions and red pepper thinly. Sauté them in olive oil until very soft. Stir in the paprika and tuna, then let the mixture cool completely.",
      "For the dough: Mix the flour, yeast, water, and olive oil (you can use the oil drained from the filling for extra flavor) to form a dough. Knead until smooth and let it rise for 1 hour.",
      "Divide the dough in half. Roll out the first half and line a greased baking sheet or pie dish.",
      "Spread the cooled tuna and onion filling evenly over the dough.",
      "Roll out the second half of the dough and cover the pie. Crimp the edges tightly to seal it.",
      "Poke a small hole in the center to let steam escape, brush with egg wash, and bake at 200°C (400°F) for 40 minutes until golden."
    ]
  },
  {
    id: 40,
    name: "Churros con Chocolate",
    era: "Traditional Spanish",
    category: "Desserts",
    image: "./images/spanish/churros-con-chocolate.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Water", amount: 1, unit: "Cup" },
      { name: "All-Purpose Flour", amount: 1, unit: "Cup" },
      { name: "Salt", amount: 1, unit: "Pinch" },
      { name: "Olive or Sunflower Oil", amount: 2, unit: "Cups (for frying)" },
      { name: "Granulated Sugar", amount: 0.5, unit: "Cup (for dusting)" },
      { name: "High-Quality Dark Chocolate", amount: 200, unit: "Grams" },
      { name: "Whole Milk", amount: 1.5, unit: "Cups" },
      { name: "Cornstarch", amount: 1, unit: "Teaspoon" }
    ],
    history: "Believed to have been invented by Spanish shepherds as an easy pastry to fry over open fires in the mountains. It became a cultural institution when paired with thick, rich chocolate brought from the Americas.",
    timeline: [
      { year: "16th Century", event: "The fried dough tradition met the newly imported chocolate from Mesoamerica in Spanish courts and streets." }
    ],
    instructions: [
      "Bring the water and salt to a rolling boil in a saucepan. Remove from heat and quickly stir in the flour with a wooden spoon until it forms a smooth, thick ball of dough.",
      "Transfer the dough into a piping bag fitted with a large star nozzle.",
      "Heat the oil in a deep frying pan to 190°C (375°F). Pipe 5-inch strips of dough into the hot oil, cutting the ends with scissors.",
      "Fry the churros until golden brown and crispy on all sides. Drain on paper towels and toss them in granulated sugar.",
      "For the chocolate: Heat the milk in a pot. Dissolve the cornstarch in a little cold milk and add it to the pot. Add the chopped dark chocolate and whisk continuously until it thickens into a rich, pudding-like consistency.",
      "Serve the hot, crispy churros alongside a cup of the thick hot chocolate for dipping."
    ]
  },
  {
    id: 41,
    name: "Patatas Bravas",
    era: "Modern Spanish",
    category: "Mezes & Snacks",
    image: "./images/spanish/patatas-bravas.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Potatoes", amount: 4, unit: "Large Pieces" },
      { name: "Olive Oil", amount: 1, unit: "Cup (for frying)" },
      { name: "Crushed Tomatoes", amount: 1, unit: "Cup" },
      { name: "Garlic", amount: 2, unit: "Cloves" },
      { name: "Hot Smoked Paprika (Pimentón Picante)", amount: 1, unit: "Teaspoon" },
      { name: "Sweet Smoked Paprika (Pimentón Dulce)", amount: 1, unit: "Teaspoon" },
      { name: "Sherry Vinegar", amount: 1, unit: "Tablespoon" }
    ],
    history: "The undisputed king of Spanish 'Tapas' (snacks/appetizers). Originating in the taverns of Madrid, the name 'Bravas' refers to the fierce, spicy kick of the paprika sauce.",
    timeline: [
      { year: "1950s", event: "Became a widespread staple in the bars of Madrid, quickly spreading to every tapas bar across the country." }
    ],
    instructions: [
      "Peel the potatoes and cut them into irregular, bite-sized chunks.",
      "Fry the potatoes in hot olive oil over medium-low heat until they are soft on the inside (about 10 minutes). Remove them.",
      "Turn the heat up to high and fry the potatoes a second time for 2-3 minutes until the outside is incredibly crispy and golden. Drain and salt immediately.",
      "For the Brava sauce: Sauté minced garlic in a little olive oil. Off the heat, stir in both the sweet and hot smoked paprika (be careful not to burn it).",
      "Return to heat, add the crushed tomatoes and vinegar, and simmer for 10 minutes until thick. Blend the sauce until smooth.",
      "Drizzle the spicy Brava sauce generously over the crispy potatoes and serve immediately (often accompanied by garlic aioli)."
    ]
  },
  {
    id: 42,
    name: "Traditional Sangria",
    era: "Traditional Spanish",
    category: "Beverages & Sherbets",
    image: "./images/spanish/sangria.webp",
    basePortion: 6,
    ingredients: [
      { name: "Dry Spanish Red Wine (like Rioja or Garnacha)", amount: 1, unit: "Bottle (750ml)" },
      { name: "Spanish Brandy (or Rum)", amount: 0.25, unit: "Cup" },
      { name: "Orange Juice (Freshly Squeezed)", amount: 0.5, unit: "Cup" },
      { name: "Brown Sugar or Simple Syrup", amount: 2, unit: "Tablespoons" },
      { name: "Orange", amount: 1, unit: "Piece (Sliced)" },
      { name: "Apple", amount: 1, unit: "Piece (Diced)" },
      { name: "Cinnamon Stick", amount: 1, unit: "Piece" }
    ],
    history: "Deriving its name from the Spanish word 'sangre' (blood) due to its dark red color, this fruit-infused wine drink traces its roots back to the Romans, who planted vineyards across the Iberian Peninsula and often mixed their wine with water, spices, and fruits.",
    timeline: [
      { year: "18th Century", event: "Gained widespread popularity in Spain and later globally as a festive, refreshing punch." }
    ],
    instructions: [
      "Place the sliced orange and diced apple into a large glass pitcher.",
      "Add the brown sugar (or syrup) and the brandy to the fruit. Muddle (mash) them slightly with a wooden spoon to release the fruit juices and essential oils.",
      "Pour in the fresh orange juice and the entire bottle of red wine.",
      "Add the cinnamon stick and stir everything together vigorously.",
      "Place the pitcher in the refrigerator to chill and let the flavors meld for at least 2 to 4 hours (overnight is even better).",
      "Serve cold in wine glasses, making sure to spoon some of the wine-soaked fruit into each glass."
    ]
  },
  {
    id: 43,
    name: "Kimchi Jjigae (Kimchi Stew)",
    era: "Traditional Korean",
    category: "Soups",
    image: "./images/korean/kimchi-jjigae.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Aged/Sour Kimchi", amount: 2, unit: "Cups" },
      { name: "Pork Belly (or Tuna)", amount: 250, unit: "Grams" },
      { name: "Firm Tofu", amount: 200, unit: "Grams" },
      { name: "Gochugaru (Korean Chili Flakes)", amount: 1, unit: "Tablespoon" },
      { name: "Garlic (Minced)", amount: 3, unit: "Cloves" },
      { name: "Sesame Oil", amount: 1, unit: "Tablespoon" },
      { name: "Anchovy or Water Broth", amount: 3, unit: "Cups" },
      { name: "Scallions", amount: 2, unit: "Pieces" }
    ],
    history: "The ultimate Korean soul food. It developed as a way to utilize older, highly fermented Kimchi that became too sour to eat on its own, creating a rich, complex, and comforting stew.",
    timeline: [
      { year: "Mid-Joseon Dynasty", event: "Kimchi evolved to include chili peppers introduced from the Americas, leading to the spicy Kimchi Jjigae we know today." }
    ],
    instructions: [
      "Cut the pork belly and the aged Kimchi into bite-sized pieces.",
      "Heat a pot over medium-high heat. Add the sesame oil and sauté the pork and Kimchi together for about 5-7 minutes until the meat is browned.",
      "Add the minced garlic and Gochugaru, stirring for another minute to release the flavors.",
      "Pour in the broth (or water) and bring the stew to a boil. Reduce the heat and let it simmer for 15-20 minutes.",
      "Slice the tofu into thick rectangles and chop the scallions.",
      "Add the tofu and scallions to the pot, let it boil for another 3 minutes, and serve bubbling hot with a bowl of steamed rice."
    ]
  },
  {
    id: 44,
    name: "Bulgogi (Marinated BBQ Beef)",
    era: "Traditional Korean",
    category: "Main Courses",
    image: "./images/korean/bulgogi.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Ribeye or Sirloin Beef (Thinly Sliced)", amount: 500, unit: "Grams" },
      { name: "Soy Sauce", amount: 4, unit: "Tablespoons" },
      { name: "Brown Sugar", amount: 2, unit: "Tablespoons" },
      { name: "Asian Pear (Grated)", amount: 0.5, unit: "Piece" },
      { name: "Sesame Oil", amount: 1, unit: "Tablespoon" },
      { name: "Garlic (Minced)", amount: 4, unit: "Cloves" },
      { name: "Toasted Sesame Seeds", amount: 1, unit: "Tablespoon" },
      { name: "Onion (Thinly Sliced)", amount: 1, unit: "Piece" }
    ],
    history: "Literally meaning 'fire meat', Bulgogi is Korea's most famous meat dish. The use of grated pear in the marinade is a traditional technique used to tenderize the beef while adding a natural, fruity sweetness.",
    timeline: [
      { year: "Goguryeo Era (37 BC–668 AD)", event: "Originated from 'Maekjeok', an ancient meat dish skewered and grilled over an open fire." }
    ],
    instructions: [
      "In a large bowl, combine the soy sauce, brown sugar, grated Asian pear, minced garlic, sesame oil, and sesame seeds to make the marinade.",
      "Add the thinly sliced beef and sliced onions to the marinade.",
      "Massage the meat gently to ensure every piece is coated. Cover and refrigerate for at least 30 minutes (or overnight for best results).",
      "Heat a large skillet, wok, or BBQ grill over high heat.",
      "Cook the marinated beef and onions in batches in a single layer until the meat is browned and caramelized (about 3-4 minutes).",
      "Serve hot, traditionally wrapped in lettuce leaves (Ssam) with rice and a dab of ssamjang (bean paste)."
    ]
  },
  {
    id: 45,
    name: "Sigeumchi Namul (Seasoned Spinach)",
    era: "Traditional Korean",
    category: "Vegetables & Side Dishes (Banchan)",
    image: "./images/korean/sigeumchi-namul.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Fresh Spinach", amount: 1, unit: "Bunch" },
      { name: "Soy Sauce", amount: 1, unit: "Tablespoon" },
      { name: "Toasted Sesame Oil", amount: 1, unit: "Tablespoon" },
      { name: "Garlic (Minced)", amount: 1, unit: "Clove" },
      { name: "Toasted Sesame Seeds", amount: 1, unit: "Tablespoon" },
      { name: "Salt", amount: 1, unit: "Pinch" }
    ],
    history: "A classic example of 'Banchan' (side dishes) that accompany every Korean meal. Korean cuisine heavily features blanched and lightly seasoned vegetables, a legacy of the country's Buddhist history.",
    timeline: [
      { year: "Three Kingdoms Period", event: "Buddhism was introduced to Korea, promoting a vegetable-heavy, meatless diet that gave rise to Namul (seasoned vegetable) culture." }
    ],
    instructions: [
      "Wash the spinach thoroughly, leaving the roots intact if they are tender and sweet.",
      "Bring a large pot of water to a boil and add a pinch of salt. Blanch the spinach for exactly 30 seconds until just wilted.",
      "Immediately transfer the spinach to a bowl of ice-cold water to stop the cooking process and preserve the bright green color.",
      "Squeeze the spinach tightly with your hands to remove as much excess water as possible, then cut it once or twice to make it bite-sized.",
      "In a mixing bowl, toss the spinach with soy sauce, minced garlic, sesame oil, and toasted sesame seeds.",
      "Serve at room temperature or chilled as a side dish."
    ]
  },
  {
    id: 46,
    name: "Haemul Pajeon (Seafood Scallion Pancake)",
    era: "Traditional Korean",
    category: "Pastries & Pancakes",
    image: "./images/korean/Haemul-Pajeon.jpg",
    basePortion: 4,
    ingredients: [
      { name: "Scallions (Green Onions)", amount: 1, unit: "Large Bunch" },
      { name: "Mixed Seafood (Squid, Shrimp, Clams)", amount: 200, unit: "Grams" },
      { name: "All-Purpose Flour", amount: 1, unit: "Cup" },
      { name: "Ice Water", amount: 1, unit: "Cup" },
      { name: "Egg", amount: 1, unit: "Piece" },
      { name: "Soy Sauce", amount: 1, unit: "Teaspoon" },
      { name: "Vegetable Oil", amount: 0.25, unit: "Cup (for frying)" }
    ],
    history: "A beloved savory pancake ('Jeon') heavily packed with scallions ('Pa') and seafood ('Haemul'). Culturally, Koreans crave these crispy pancakes paired with Makgeolli (rice wine) on rainy days because the sizzling sound resembles falling rain.",
    timeline: [
      { year: "Joseon Dynasty", event: "Pajeon became a staple in the Dongnae region (modern-day Busan), eventually being presented to the royal court." }
    ],
    instructions: [
      "Cut the scallions into long strips (about 4 inches long) and finely chop the mixed seafood.",
      "In a bowl, whisk together the flour, ice water, and soy sauce to create a thin, smooth batter. (Ice water makes the pancake crispier).",
      "Heat a generous amount of vegetable oil in a large non-stick skillet over medium-high heat.",
      "Lay the scallions flat in the pan in a single layer. Pour the batter evenly over the scallions.",
      "Scatter the chopped seafood evenly on top of the wet batter. Lightly beat the egg and pour it over the seafood.",
      "Fry until the bottom is deeply golden and crispy (about 4-5 minutes). Carefully flip the pancake and fry the other side for another 3-4 minutes. Serve hot with a soy-vinegar dipping sauce."
    ]
  },
  {
    id: 47,
    name: "Yakgwa (Honey Pastry)",
    era: "Traditional Korean",
    category: "Desserts",
    image: "./images/korean/yakgwa.jpg",
    basePortion: 6,
    ingredients: [
      { name: "Wheat Flour", amount: 2, unit: "Cups" },
      { name: "Sesame Oil", amount: 3, unit: "Tablespoons" },
      { name: "Honey", amount: 0.5, unit: "Cup" },
      { name: "Cheongju (Korean Rice Wine) or Soju", amount: 3, unit: "Tablespoons" },
      { name: "Ginger Juice", amount: 1, unit: "Tablespoon" },
      { name: "Vegetable Oil", amount: 2, unit: "Cups (for frying)" },
      { name: "Pine Nuts (Crushed)", amount: 2, unit: "Tablespoons" }
    ],
    history: "A highly prized traditional Korean confection. The name translates to 'medicinal confection' (Yak = medicine, Gwa = confection) because honey and sesame oil were considered medicines in ancient times. It was a luxurious item reserved for royalty, festivals, and ancestral rites.",
    timeline: [
      { year: "Goryeo Dynasty (918–1392)", event: "Became so popular among the aristocrats and Buddhist temples that the king temporarily banned its production because it was causing a shortage of grain and honey." }
    ],
    instructions: [
      "Rub the sesame oil into the flour with your hands until it resembles fine breadcrumbs. Pass it through a sieve.",
      "Mix the honey, rice wine, and ginger juice together. Pour this into the flour and gently knead it just until a dough forms.",
      "Roll the dough out to about 1/2 inch thickness. Cut it into traditional flower shapes using a mold or into squares.",
      "Heat the vegetable oil in a pot to a low temperature (around 140°C/285°F).",
      "Slow-fry the pastries for 10-15 minutes until they expand, float, and turn a deep golden brown. Drain on paper towels.",
      "While still warm, soak the fried pastries in a syrup made of honey and a little ginger juice for a few hours. Garnish with crushed pine nuts before serving."
    ]
  },
  {
    id: 48,
    name: "Tteokbokki (Spicy Rice Cakes)",
    era: "Modern Korean",
    category: "Mezes & Snacks",
    image: "./images/korean/tteokbokki.webp",
    basePortion: 4,
    ingredients: [
      { name: "Garaetteok (Cylinder Rice Cakes)", amount: 400, unit: "Grams" },
      { name: "Korean Fish Cake (Eomuk)", amount: 2, unit: "Sheets" },
      { name: "Gochujang (Korean Chili Paste)", amount: 3, unit: "Tablespoons" },
      { name: "Gochugaru (Chili Flakes)", amount: 1, unit: "Tablespoon" },
      { name: "Sugar", amount: 2, unit: "Tablespoons" },
      { name: "Anchovy-Kelp Broth (or Water)", amount: 3, unit: "Cups" },
      { name: "Scallions", amount: 2, unit: "Pieces" }
    ],
    history: "Today's globally famous, fiery red street food evolved from 'Gungjung Tteokbokki,' a non-spicy, soy sauce-based dish made for the royal court. The modern spicy version was created post-Korean War.",
    timeline: [
      { year: "1953", event: "A woman named Ma Bok-rim accidentally dropped a rice cake into hot pepper sauce and found it delicious, popularizing the spicy red version in Sindang-dong." }
    ],
    instructions: [
      "If the rice cakes are hard, soak them in warm water for 10 minutes to soften. Cut the fish cakes into bite-sized triangles and slice the scallions.",
      "In a wide, shallow pan, combine the anchovy broth, Gochujang, Gochugaru, and sugar. Stir well and bring to a boil.",
      "Add the rice cakes to the boiling sauce. Reduce the heat to medium and cook for 8-10 minutes, stirring frequently so the rice cakes don't stick to the bottom.",
      "When the sauce begins to thicken and the rice cakes are chewy and soft, add the fish cakes and scallions.",
      "Cook for another 3-4 minutes until the sauce is thick, shiny, and coats everything perfectly. Serve hot."
    ]
  },
  {
    id: 49,
    name: "Sikhye (Sweet Rice Punch)",
    era: "Traditional Korean",
    category: "Beverages & Sherbets",
    image: "./images/korean/Sikhye.jpg",
    basePortion: 6,
    ingredients: [
      { name: "Malted Barley Powder (Yeotgireum)", amount: 1, unit: "Cup" },
      { name: "Warm Water", amount: 10, unit: "Cups" },
      { name: "Cooked Short-Grain Rice", amount: 2, unit: "Cups" },
      { name: "Granulated Sugar", amount: 0.75, unit: "Cup" },
      { name: "Pine Nuts", amount: 1, unit: "Tablespoon (for garnish)" }
    ],
    history: "A traditional sweet, non-alcoholic beverage containing floating grains of cooked rice. It is typically served as a dessert drink after a heavy meal because malted barley contains amylase, an enzyme that aids digestion.",
    timeline: [
      { year: "Joseon Dynasty", event: "Consumed heavily during traditional holidays like Chuseok and Seollal, and served to guests as a sign of hospitality." }
    ],
    instructions: [
      "Place the malted barley powder in a fine strainer or cheesecloth bag. Soak it in the warm water for 1 hour, massaging it occasionally to extract a milky liquid. Let the liquid sit for 30 minutes so the white sediment sinks to the bottom.",
      "Carefully pour the clear liquid into a rice cooker, discarding the sediment at the bottom.",
      "Add the cooked rice to the liquid in the rice cooker. Stir gently.",
      "Keep the rice cooker on the 'Keep Warm' setting (do not cook) for 4 to 6 hours, until 10-15 grains of rice float to the surface.",
      "Transfer the mixture to a large pot on the stove. Add the sugar and bring it to a rolling boil for 10 minutes.",
      "Skim off any foam from the top. Let it cool completely.",
      "Chill in the refrigerator and serve ice cold, garnished with a few floating pine nuts."
    ]
  }
];

export default recipes; // Dışa aktarma eklendi

