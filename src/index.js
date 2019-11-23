import Phaser from 'phaser';

import ninjaImg from './assets/images/ninja.png';
import ninjaJson from './assets/images/ninja.json';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.atlas('ninja', ninjaImg, ninjaJson);
}

function create() {
  const ninja = this.add.sprite(500, 300, 'ninja');
  // var frameNames = this.textures.get('ninja').getFrameNames();

  this.anims.create({
    key: 'attack',
    frames: [
      { key: 'ninja', frame: 'Attack__000.png' }, 
      { key: 'ninja', frame: 'Attack__001.png' },
      { key: 'ninja', frame: 'Attack__002.png' }, 
      { key: 'ninja', frame: 'Attack__003.png' },
      { key: 'ninja', frame: 'Attack__004.png' }, 
      { key: 'ninja', frame: 'Attack__005.png' },
      { key: 'ninja', frame: 'Attack__006.png' }, 
      { key: 'ninja', frame: 'Attack__007.png' },
      { key: 'ninja', frame: 'Attack__008.png' }, 
      { key: 'ninja', frame: 'Attack__009.png' },
    ],
    frameRate: 8,
    repeat: -1
  });

  ninja.play('attack');
}
