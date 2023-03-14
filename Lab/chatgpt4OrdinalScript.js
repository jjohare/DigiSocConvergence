function makePictureFrame() {
    // Calculate rotation necessary to face picture towards user at spawn time.
    var rotation = Quat.multiply(Quat.fromPitchYawRollDegrees(0, 180, 0), Camera.getOrientation());
    rotation.x = 0;
    rotation.z = 0;
    var data = getDataFromNASA();
    var pictureFrameProperties = {
        name: 'Tutorial Picture Frame',
        description: data.explanation,
        type: 'Model',
        dimensions: {
            x: 1.2,
            y: 0.9,
            z: 0.075
        },
        position: center,
        rotation: rotation,
        textures: JSON.stringify({
            Picture: "https://i.postimg.cc/K83R8dGs/orange3.jpg" // Static image URL
        }),
        modelURL: MODEL_URL,
        lifetime: 3600,
        dynamic: true,
    }
    var pictureFrame = Entities.addEntity(pictureFrameProperties);

    var OUTER_FRAME_MODEL_URL = "https://cdn-1.vircadia.com/us-e-1/Developer/Tutorials/pictureFrame/outer_frame.fbx";
    var outerFrameProps = {
        name: "Tutorial Outer Frame",
        type: "Model",
        position: center,
        rotation: rotation,
        modelURL: OUTER_FRAME_MODEL_URL,
        lifetime: 3600,
        dynamic: true,
        dimensions: {
            x: 1.4329,
            y: 1.1308,
            z: 0.0464
        },
        parentID: pictureFrame // A parentd object will move, rotate, and scale with its parent.
    }
    var outerFrame = Entities.addEntity(outerFrameProps);
    Script.stop();
}
