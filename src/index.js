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
  ninja.setScale(0.5);
  
  var frameNames = this.textures.get('ninja').getFrameNames();
  console.log(frameNames);

  makeAnims(this);
  //ninja.play('jump');
  ninja.play('run');
}

function makeAnims(context) {
  context.anims.create({
    key: 'attack',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Attack__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'climb',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Climb_', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'attack',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Attack__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'dead',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Dead__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'glide',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Glide_', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'Idle',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Idle__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'jump',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Jump__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'jump_attack',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Jump_Attack__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });

  context.anims.create({
    key: 'run',
    frames: context.anims.generateFrameNames('ninja', { start: 0, end: 8, zeroPad: 3, prefix: 'Run__', suffix: '.png' }),
    frameRate: 8,
    repeat: -1
  });
}
