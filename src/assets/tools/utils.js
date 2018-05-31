import Matter from 'matter-js';

exports.matterJS = elem_wrapper => {
  let Example = Example || {};

  Example.sprites = function() {
    let Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create engine
    let engine = Engine.create(),
      world = engine.world;

    // create renderer
    let render = Render.create({
      element: elem_wrapper,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        background: '#0f0f13',
        showAngleIndicator: false,
        wireframes: false
      }
    });

    Render.run(render);

    // create runner
    let runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    let offset = 10,
      options = {
        isStatic: true,
        render: {
          fillStyle: 'transparent'
        }
      };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(world, [
      Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
      Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
    ]);

    let stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
      if (Common.random() > 0.35) {
        return Bodies.rectangle(x, y, 64, 64, {
          render: {
            strokeStyle: '#ffffff',
            sprite: {
              texture: '//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/box.png'
            }
          }
        });
      } else {
        return Bodies.circle(x, y, 46, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture: '//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/ball.png'
            }
          }
        });
      }
    });

    World.add(world, stack);

    // add mouse control
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

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function() {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      }
    };
  };

  MatterTools.Demo.create({
    toolbar: {},
    preventZoom: true,
    resetOnOrientation: true,
    examples: [
      {
        init: Example.sprites
      }
    ]
  });
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

