Webcam.attach('#camera')
var camera=document.getElementById("camera")
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
})  
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerhtml='<img id="selfie_image" src="'+data_uri+'"/>'
})
}
console.log('ml5version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kbqUQ1w1Z/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}
function check(){
    img=document.getElementById('selfie_image')
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("object").innerHTML=results[0].label
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}