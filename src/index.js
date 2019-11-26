import Phaser from 'phaser';

import tileImg from './assets/images/ground_tile.png';
import ninjaImg from './assets/images/ninja.png';
import ninjaJson from './assets/images/ninja.json';
import crossImg from './assets/images/cross.png';
import buttonImg from './assets/images/button.png';
import hiddenImg from './assets/images/hidden.png';

import { AlignGrid } from './align.grid';
import { Align } from './align';
import { GamePad } from './game.pad';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 800,
  scene: {
    preload: preload,
    create: create
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
};

const game = new Phaser.Game(config);
let tileGroup;

function preload() {
  this.load.atlas('ninja', ninjaImg, ninjaJson);
  this.load.image('tile', tileImg);
  this.load.image('cross', crossImg);
  this.load.image('button', buttonImg);
  this.load.image('hidden', hiddenImg);
}

function create() {
  tileGroup = this.physics.add.group();

  const ninja = this.physics.add.sprite(400, 100, 'ninja');

  setTimeout(() => {
    ninja.body.setSize(ninja.width, ninja.height, true);
  }, 1000);

  Align.scaleToGameW(game, ninja, 0.2);
  // ninja.setScale(0.5);

  // var frameNames = this.textures.get('ninja').getFrameNames();
  // console.log(frameNames);

  makeAnims(this);

  const aGrid = new AlignGrid({ scene: this, rows: 11, cols: 11, gameWidth: 800, gameHeight: 800 });
  aGrid.showNumbers();

  //makeFloor(48, 49, 'tile', aGrid, this);
  makeFloor(77, 87, 'tile', aGrid, this);

  // ninja.play('jump');
  ninja.play('idle');

  ninja.setGravityY(200);
  this.physics.add.collider(ninja, tileGroup);

  const gamePad = new GamePad({ scene: this, grid: aGrid, game });
  aGrid.placeAtIndex(100, gamePad);
}

function placeBlock(pos, key, grid, context) {
  let block = context.physics.add.sprite(0, 0, key);
  grid.placeAtIndex(pos, block);
  tileGroup.add(block);
  block.setImmovable();

  Align.scaleToGameW(game, block, 0.09);
}

function makeFloor(fromPos, toPos, key, grid, context) {
  for (var i = fromPos; i < toPos + 1; i++) {
    placeBlock(i, key, grid, context);
  }
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
    key: 'idle',
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
