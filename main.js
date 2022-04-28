song1 = "";
song2 = "";

lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}   
 
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
    }
}