export function createAnimation(frames, frameLen) {
    return function resolveFrame(distance) {
        const frameIndex = Math.floor(distance / frameLen) % frames.length
        const frameName = frames[frameIndex];
        return frameName;
    }
}
export function createIdleAnimation(frames, frameLen) {
    return function resolveFrame(speed) {
        const frameIndex = Math.floor(speed / frameLen) % frames.length;
        console.log(frameIndex);
        const frameName = frames[frameIndex];
        return frameName;
    }
}