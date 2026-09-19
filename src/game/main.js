import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { SceneOne } from './scenes/SceneOne.mjs';
import { AUTO, Game, Scale } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: AUTO,
    pixelArt: true,
    width: 50,// 33*4,
    height: 50, // 19*4,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.NONE,
        autoCenter: Scale.CENTER_BOTH,
        zoom: 9
    },
    scene: [
        Boot,
        SceneOne //,
        // MainGame
    ]
};

const StartGame = (parent) => {

    return new Game({ ...config, parent });

}

export default StartGame;
