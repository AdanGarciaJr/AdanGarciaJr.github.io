
var btn = document.getElementById('giveRec').onclick = displayRec;

function displayRec(){

    var choice = document.querySelector('#num').value;

    var choiceArray = ["For portraits we recommend a camera that's preferably full frame, but crop sensors will work. We also recommend a prime telephoto lens.",
        "For Weddings we recommend a Full Frame Camera and a good backup camera. " +
        "We also recommend a long zoom lend (ex. 70-200 f2.8) a short zoom lens (ex. 24-70 f2.8). " +
        "We also recommend prime lenses for any portraits you'd need to take.",
        "For Sports we recommend a good full frame sensor camera and long zoom lens with a wide aperture in case you are shooting in darker conditions.",
        "For wildlife we recommend a very good crop sensor camera and a very long telephoto lens (ex. 200-600 f5.6-6.3) because a lot of times you will" +
        " be far away from your subject."]

    //var pick = Number(choice);
    document.getElementById("result").innerHTML = choiceArray[Number(choice)-1];
    console.log(choiceArray[Number(choice)-1]);
}





