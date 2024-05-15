
const Animate = (dir,del) => {
    return {
        hidden : {
            y : dir === "up" ? 40 : dir === "down" ? -40 : 0,
            x : dir === "left" ? 40 : dir === "right" ? -40 : 0
        },
        show : {
            y : 0,
            x : 0,
            opacity : 1,
            transition : {
                type : 'tween',
                duration : 1.2,
                delay : del,
                ease : [0.25,0.25,0.25,0.75]
            }
        }
    }
};

export default Animate;