import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

const Intro3 = (props) => {
  const scene = useRef("scene");
  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      width: 1000,
      height: 1000,
      options: {
        showAngleIndicator: false,
        wireframes: false,
        background: "white",
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(
      200,
      606 - 25.25 - 5 * 4,
      10,
      5,
      0,
      0,
      function (x, y) {
        return Bodies.rectangle(x, y, 70, 70, {
          render: {
            fillStyle: "white",
            strokeStyle: "#0068fa",
            lineWidth: 3,
          },
        });
      }
    );

    Composite.add(world, [
      stack,
      // walls
      Bodies.rectangle(400, 0, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: "blue",
          strokeStyle: "blue",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(800, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: "blue",
          strokeStyle: "blue",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(0, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: "blue",
          strokeStyle: "blue",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(400, 606, 800, 50.5, {
        isStatic: true,
        render: {
          fillStyle: "blue",
          strokeStyle: "blue",
          lineWidth: 3,
        },
      }),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, []);

  return <div ref={scene} className='scene' style={{ textAlign: "center" }} />;
};
export default Intro3;
