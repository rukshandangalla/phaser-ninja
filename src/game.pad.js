import { UIBlock } from './UIBlock';
import { Align } from './align';

export class GamePad extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;
    this.grid = config.grid;
    this.game = config.game;

    const cross = this.scene.add.image(0, 0, 'cross');
    Align.scaleToGameW(this.game, cross, 0.2);
    this.grid.placeAtIndex(12, cross);

    const btn_1 = this.scene.add.image(0, 0, 'button');
    Align.scaleToGameW(this.game, btn_1, 0.1);
    this.grid.placeAtIndex(18, btn_1);

    const btn_2 = this.scene.add.image(0, 0, 'button');
    Align.scaleToGameW(this.game, btn_2, 0.1);
    this.grid.placeAtIndex(20, btn_2);

    btn_1.setInteractive();
    btn_2.setInteractive();

    btn_1.on('pointerdown', this.btn1Pressed.bind(this));
    btn_2.on('pointerdown', this.btn2Pressed.bind(this));

    const btn_up = this.scene.add.image(cross.x, cross.y - cross.displayHeight / 3, 'hidden');
    const btn_down = this.scene.add.image(cross.x, cross.y + cross.displayHeight / 3, 'hidden');
    const btn_left = this.scene.add.image(cross.x - cross.displayWidth / 3, cross.y, 'hidden');
    const btn_right = this.scene.add.image(cross.x + cross.displayWidth / 3, cross.y, 'hidden');

    btn_up.setInteractive();
    btn_down.setInteractive();
    btn_right.setInteractive();
    btn_left.setInteractive();

    btn_up.on('pointerdown', this.goUp.bind(this));
    btn_down.on('pointerdown', this.goDown.bind(this));
    btn_right.on('pointerdown', this.goRight.bind(this));
    btn_left.on('pointerdown', this.goLeft.bind(this));

    this.add(cross);
    this.add(btn_1);
    this.add(btn_2);
    this.add(btn_up);
    this.add(btn_down);
    this.add(btn_right);
    this.add(btn_left);
  }

  goUp() {
    console.log('Go Up');
  }

  goDown() {
    console.log('Go Down');
  }

  goRight() {
    console.log('Go Right');
  }

  goLeft() {
    console.log('Go Left');
  }

  btn1Pressed() {
    console.log('Btn 1 Pressed');
  }

  btn2Pressed() {
    console.log('Btn 2 Pressed');
  }
}
