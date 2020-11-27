import Timer from "./Timer.js";
import { loadLevel } from "/loaders.js"
import { createMr } from './entities.js';
import { createCollisionLayer } from './layers.js';
import { setupKeyboard } from './input.js';
import { setupMouseControl } from './debug.js';

// Canvas config
const cvs = document.querySelector("canvas#game");
const ctx = cvs.getContext("2d");

Promise.all([
    createMr(),
    loadLevel('1-1')
])
.then(([mr, level]) => {
    mr.pos.set(50, 268);
    
    // Debugger visual helper
    level.comp.layers.push(createCollisionLayer(level));

    level.entities.add(mr);

    const input = setupKeyboard(mr);
    input.listenTo(window);

    setupMouseControl(cvs,mr, null)

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);
        level.comp.draw(ctx);
    }
    timer.start();
});