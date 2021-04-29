import Camera from "./Camera.js";
import Timer from "./Timer.js";
import { loadLevel } from "/loaders.js"
import { createCat } from './entities.js';
import { createCollisionLayer, createCameraLayer } from './layers.js';
import { setupKeyboard } from './input.js';
import { setupMouseControl } from './debug.js';

// Canvas config
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

Promise.all([
    createCat(),
    loadLevel('1-1')
])
.then(([cat, level]) => {
    const camera = new Camera();
    window.camera = camera;

    cat.pos.set(35, 68);
    
    // Debugger visual helper
    level.comp.layers.push(
        createCollisionLayer(level), 
        createCameraLayer(camera));

    level.entities.add(cat);

    const input = setupKeyboard(cat);
    input.listenTo(window);

    // Debugger visual helper
    setupMouseControl(cvs, cat, camera);

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        if(cat.pos.x > 100) {
            camera.pos.x = cat.pos.x -100;
        }

        level.comp.draw(ctx, camera);
    }
    timer.start();
});