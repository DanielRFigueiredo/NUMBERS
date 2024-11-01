class Draw {
  constructor() {
    this.chosenAmount = []
  }

  randomNumber() {
    return Math.floor(Math.random() * (Number(this.endValue.textContent) - Number(this.startValue.textContent) + 1) + Number(this.startValue.textContent))

  }

  getNumbers() {
    let numbersDraw = [];

    for (let i = 0; i < Number(this.amount.textContent); i++) {
      if (this.switch.checked) {
        let randomNumber = this.randomNumber();
        while (numbersDraw.includes(randomNumber)) {
          randomNumber = this.randomNumber();
        }
        numbersDraw = [...numbersDraw, randomNumber];

      } else {
        const randomNumber = this.randomNumber();
        numbersDraw = [...numbersDraw, randomNumber];
      }
    }
    this.chosenAmount = numbersDraw;
  }
}



export class DrawView extends Draw {
  constructor() {
    super();
    this.startBtn = document.querySelector('.draw button');
    this.restartBtn = document.querySelector('#result button');
    this.amount = document.querySelector('#amount');
    this.startValue = document.querySelector('#start');
    this.endValue = document.querySelector('#end');
    this.switch = document.querySelector('#switch');
    this.draw = document.querySelector('#draw');
    this.result = document.querySelector('#result');
    this.startBtnClick();

  }

  startBtnClick() {
    this.startBtn.addEventListener('click', () => {
      this.getNumbers()
      this.updateDisplay();
      this.swapDisplay();
    });
    console.log(this.restartBtn)
    this.restartBtn.addEventListener('click', () => {
      this.restartDraw()

    })
  }

  updateDisplay() {
    const resultado = document.querySelector('.resultado');
    let delay = 1;
    resultado.innerHTML = '';
    this.chosenAmount.forEach(value => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('style', `--delay:${delay}s`);
      delay += 3;
      card.innerHTML = `
        <span class="square"></span>
        <h2>${value}</h2>`;

      resultado.appendChild(card);
    })

  }

  swapDisplay() {
    this.draw.classList.toggle('hidden');
    this.result.classList.toggle('hidden');
  }

  restartDraw() {
    this.swapDisplay();
   
   

  }


}