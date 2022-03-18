    },
    {
      name: "forest",
      img:
        "https://i.pinimg.com/474x/14/00/c3/1400c3b838cd0ed2946b8cb306209bda.jpg"
    },
    {
      name: "fairyCat",
      img:
        "https://i.pinimg.com/280x280_RS/7f/89/64/7f89644247b17be69f190784af2fddaf.jpg"
    },
    {
      name: "sleepyDeer",
      img:
        "https://www.enwallpaper.com/wp-content/uploads/2021/07/E1EAnidXIAALx-z-300x300.jpg"
    },
    {
      name: "petals",
      img:
        "https://th.bing.com/th/id/R1d0f1ff870b4d3dc56dfc5d17f3e1ef9?rik=CYAt6G2AvnP2SQ&pid=ImgRaw"
    },
    {
      name: "park",
      img:
        "https://th.bing.com/th/id/R648c810f27359748446c227800a2c77a?rik=%2fCjBhsofbumYrg&pid=ImgRaw"
    },
    {
      name: "betaFish",
      img:
        "https://th.bing.com/th/id/R6a31523c6b5b22e880e8a1b62ea9d286?rik=q3EPewwZS0goPw&pid=ImgRaw"
    },
    {
      name: "roses",
      img:
        "https://th.bing.com/th/id/Rd858da9177c9498a9725a0040d8bf343?rik=8lpx%2fsY91RSTzA&pid=ImgRaw"
    },
    {
      name: "wings",
      img:
        "https://i.pinimg.com/originals/c4/c9/63/c4c9630114e29c374b146fce4c17a4b6.jpg"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  /*Variables*/
  const grid = document.querySelector(".grid");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  const resultDisplay = document.getElementById("result");

  /* Create grid */
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute(
        "src",
        "https://us.123rf.com/450wm/jallom/jallom2008/jallom200800020/153222960-.jpg?ver=6"
      );
      card.setAttribute("data-id", i);
      card.classList.add("card", "image");
      card.setAttribute("id", "image");
      card.setAttribute("name", cardArray[i].name);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
