import Matter from 'matter-js';

exports.testMatter = elem_wrapper => {
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  let h = elem_wrapper.getBoundingClientRect().height,
    w = elem_wrapper.getBoundingClientRect().width;

  let engine = Engine.create(),
    world = engine.world;

  let render = Render.create({
    element: elem_wrapper,
    engine: engine,
    options: {
      height: h,
      width: w,
      wireframes: false,
      background: 'tranparent'
    }
  });

  let offset = 10,
    options = {
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    };

  World.add(world, [
    Bodies.rectangle(w / 2, -offset, w + 0.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(w / 2, h + offset, w + 0.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(w + offset, h / 2, 50.5, h + 0.5 + 2 * offset, options),
    Bodies.rectangle(-offset, h / 2, 50.5, h + 0.5 + 2 * offset, options)
  ]);

  let stack = Composites.stack(20, 20, Math.floor(w / 72), 3, 0, 0, (x, y) => {
    let random = Common.random();

    console.log('random');
    if (random > 0.8) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: 'public/emojis/male_3.png'
          }
        }
      });
    } else if (random > 0.6 && random <= 0.8) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: 'public/emojis/male_2.png'
          }
        }
      });
    } else if (random > 0.4 && random <= 0.6) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: 'public/emojis/female_2.png'
          }
        }
      });
    } else if (random > 0.2 && random <= 0.4) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: 'public/emojis/male_1.png'
          }
        }
      });
    } else {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: 'public/emojis/female_1.png'
          }
        }
      });
    }
  });

  World.add(world, stack);

  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: w, y: h }
  });
  Engine.run(engine);
  Render.run(render);
};
exports.preloadImages = (array, waitForOtherResources, timeout) => {
  let loaded = false, list = [], imgs = array.slice(0), t = timeout || 15*1000, timer;

  const loadNow = () => {
    if (!loaded) {
      loaded = true;
      for (let i = 0; i < imgs.length; i++) {
        let img = new Image();

        img.onload = img.onerror = img.onabort = () => {
          let index = list.indexOf(this);
          if (index !== -1) {
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = imgs[i];
      }
    }
  };

  if (!waitForOtherResources || document.readyState === 'complete') {
    loadNow();
  } else {
    window.addEventListener('load', function() {
      clearTimeout(timer);
      loadNow();
    });
    timer = setTimeout(() => {
      loadNow();
    }, t);
  }
};
exports.resizeSVG = (elDimension, containerDimension) => {
  const elW = elDimension.width;
  const elH = elDimension.height;
  const containerW = containerDimension.width;
  const containerH = containerDimension.height;

  const ratio = elH / elW;
  let w = containerW;
  let h = containerW * ratio;

  if (h < containerH) {
    h = containerH;
    w = h / ratio;
  }

  return {
    width: w,
    height: h,
    x: (containerW - w) / 2,
    y: (containerH - h) / 2
  };
};

