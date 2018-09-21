function generate() {
  const container = document.createElement("div");
  container.className = "container";
  $("body").append(container);

  const topPane = document.createElement("div");
  topPane.className = "topPane";
  $(".container").append(topPane);

  for (let i = 1; i <= 4; i++) {
    let display = document.createElement("div");

    switch (i) {
      case 1:
        display.className = "display timer";
        break;
      case 2:
        display.className = "display money";
        break;
      case 3:
        display.className = "display tickets";
        break;
      case 4:
        display.className = "display dice";
        break;
    }

    $(".topPane").append(display);
  }

  const midPane = document.createElement("div");
  midPane.className = "midPane";
  $(".container").append(midPane);

  for (let i = 1; i <= 3; i++) {
    let display = document.createElement("div");
    if (i % 2 == 0) {
      display.className = "generator";
    } else {
      display.className = "spaceholder";
    }
    midPane.append(display);
  }


  /************************************************/
  const mainPane = document.createElement("div");
  mainPane.className = "mainPane";
  $(".container").append(mainPane);


  for (let i = 1; i <= 2; i++) {
    createGameBoard(i);
  }

  for (let i = 1; i <= 2; i++) {
    var button = document.createElement("button");
    button.className = "mainbutton";
    button.innerHTML = "BINGO";
    mainPane.append(button);
  }
  /************************************************/

  let int = window.setInterval(generateNumbers, 1000);

  /************************************************/

  /************************************************/
  /*INTERNAL FUNCTIONS*/

  function createGameBoard(num) {
    let numList = genNumList();

    let gameBoardNum = "gameBoard" + num;
    $("<style type='text/css'> ." + gameBoardNum + "{height:500px; width:500px; display:grid; grid-template-columns:repeat(5, 1fr); grid-template-rows:repeat(6, 1fr); border: solid black 10px; margin-left:auto; margin-right:auto;  } </style>").appendTo("head");

    const gamePane = document.createElement("div");
    gamePane.className = gameBoardNum;
    $(".mainPane").append(gamePane);

    let gameRep = []
    for (let x = 0; x < 5; x++) {
      switch (x) {
        case 0:
          pushColHeader("B", "green");
          break;
        case 1:
          pushColHeader("I", "blue");
          break;
        case 2:
          pushColHeader("N", "orange");
          break;
        case 3:
          pushColHeader("G", "pink");
          break;
        case 4:
          pushColHeader("O", "brown");
          break;
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let x = 1; x <= 5; x++) {
        if (x == 3 && i == 2) {
          pushColHeader("Free", "transparent");
          continue;
        }
        switch (x) {
          case 1:
            pushCard(1, 16);
            break;
          case 2:
            pushCard(16, 31);
            break;
          case 3:
            pushCard(31, 46);
            break;
          case 4:
            pushCard(46, 61);
            break;
          case 5:
            pushCard(61, 76);
            break;
        }
      }
    }

    function CreateElement(elementType, className) {
      let element = document.createElement(elementType);
      element.className = className;
    }


    function gen(x, y) {
      randNum = undefined;
      while (numList[randNum] == undefined) {
        randNum = randomIntFromInterval(x, y);
      }
      let holder = numList[randNum];
      delete numList[randNum];
      return holder;
    }

    function pushColHeader(letter, color) {
      let card = getCard();
      gameRep.push(letter);
      card.innerHTML = letter;
      card.setAttribute("style", "background-color:" + color);
      card.className = "card";
      gamePane.append(card);
    }

    function pushCard(min, max) {
      let card = getCard();
      let value = gen(min, max);
      gameRep.push(value);
      card.innerHTML = value;
      card.className = "card";
      gamePane.append(card);
    }

    function getCard() {
      let card = document.createElement("div");
      card.className = "card";
      return card;
    }
  }

  function genNumList() {
    let numList = [];
    for (let i = 1; i <= 75; i++) {
      numList.push(i);
    }

    return numList;
  }


  /************************************************/
  /*Random Number Generator */
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /************************************************/

  /*Generates values, creates divs (number balls), and shifts number balls to the right when the end
    of the display pane has been reached */

  let numRuns = 0;
  let masterNumList = genNumList();

  function generateNumbers() {

    if (masterNumList.length > 0) {
      numRuns += 1;
      if (numRuns > 8) {
        $(".generator")
          .find("div")
          .last()
          .remove();
      }

      let value = 0;

      randNum = randomIntFromInterval(0, masterNumList.length - 1);
      value = masterNumList[randNum];
      makeClickable(masterNumList.splice(randNum, 1));

      let ball = document.createElement("div");
      ball.innerHTML = value;
      ball.classList = "ball";

      switch (true) {
        case (value < 16):
          ball.setAttribute("style", "background-color:green");
          break;
        case (value >= 16 && value <= 30):
          ball.setAttribute("style", "background-color:blue");
          break;
        case (value >= 31 && value <= 45):
          ball.setAttribute("style", "background-color:orange");
          break;
        case (value >= 46 && value <= 61):
          ball.setAttribute("style", "background-color:pink");
          break;
        case (value >= 62 && value <= 75):
          ball.setAttribute("style", "background-color:brown");
          break;
      }

      $(".generator").prepend(ball);
    } else {
      clearInterval(this);
    }
  }
  /************************************************/

  function makeClickable(removedArr) {
    value = removedArr[0];

    $('.card').each(function (i, obj) {
      if (value == $(obj).text()) {
        $(obj).click(function () {
          let marker = document.createElement("div");
          marker.className = "marker";
          $(this).append(marker);
        });
      }
    });

  }
  /************************************************/
  /************************************************/
}