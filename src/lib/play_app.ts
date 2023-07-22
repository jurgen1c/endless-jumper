import * as pc from "playcanvas";

export const CreatePlayApp = (canvas: HTMLCanvasElement) => {
  const app = new pc.Application(canvas);
  app.start();

  app.setCanvasFillMode(pc.FILLMODE_KEEP_ASPECT);
  app.setCanvasResolution(pc.RESOLUTION_AUTO);

  // Setup camera
  const camera = new pc.Entity();
  camera.addComponent("camera", {
    clearColor: new pc.Color(0.8, 0.8, 0.8),
  });

  app.scenes.add("MainMenu", "/mainMenu");
  console.log(app.scenes);
  app.scenes.changeScene("MainMenu");

//   app.root.addChild(camera);
//   camera.setPosition(0, 0, 7);

//   // Add a mesh
//   const box = new pc.Entity();
//   box.addComponent("model", { type: "box" });
//   app.root.addChild(box);
//   box.rotate(10, 15, 0);
//   box.translate(-2, 0, 0);

//   // Create light
//   var light = new pc.Entity();
//   light.addComponent('light');  
//   light.rotate(45, 0, 0);
//   app.root.addChild(light);
//   app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);   

//   // Create cube's material
//   var boxMaterial = new pc.PhongMaterial();
//   boxMaterial.diffuse.set(0, 0.58, 0.86);
//   boxMaterial.update();
//   if(box.model) {
//     box.model.model.meshInstances[0].material = boxMaterial;
//   }


// // Create cylinder
// var cylinder = new pc.Entity();
// cylinder.addComponent("model", { type: "cylinder" });
// app.root.addChild(cylinder);
// cylinder.rotate(15, 0, 0);

// // Create cylinder's material
// var cylinderMaterial = new pc.PhongMaterial();
// cylinderMaterial.diffuse.set(1, 0.58, 0);
// cylinderMaterial.update();
// if(cylinder.model) cylinder.model.model.meshInstances[0].material = cylinderMaterial;

// // Create cone
// var cone = new pc.Entity();
// cone.addComponent("model", { type: "cone" });
// app.root.addChild(cone);
// cone.translate(2, 0, 0);

// // Create cone's material
// var coneMaterial = new pc.PhongMaterial();
// coneMaterial.diffuse.set(0.9, 0.9, 0.9);
// coneMaterial.update();
// if (cone.model) cone.model.model.meshInstances[0].material = coneMaterial;

// // Animate shapes
// var timer = 0;
// app.on("update", function (deltaTime) {
//   timer += deltaTime;
//   box.rotate(deltaTime*10, deltaTime*20, deltaTime*3);
//   cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
//   cone.setPosition(2, Math.sin(timer*2), 0);
// });
};