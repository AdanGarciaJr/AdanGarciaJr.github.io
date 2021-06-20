
var choice = 0;

var name = prompt("What is your name?");

alert("Hello " + name + "! Choose a kind of sessions you would like to shoot for some gear recommendations.\n\n");

choice = Number(prompt("\n1. Portraits \n2. Weddings \n3. Sports \n4. Wildlife\n\nEnter your choice: "));

while(choice < 1 || choice > 4) {

    choice = Number(prompt('ENTER A VALID CHOICE!\n\n1. Portraits \n2. Weddings \n3. Sports \n4. Wildlife\n\nEnter your choice: '));

}

var choiceArray = ["For portraits we recommend a camera thats preferably full frame, but crop sensors will work. We also recommend a prime telephoto lens.",
"For Weddings we recommend a Full Frame Camera and a good backup camera. " +
"We also recommend a long zoom lend (ex. 70-200 f2.8) a short zoom lens (ex. 24-70 f2.8). " +
"We also recommend prime lenses for any portraits you'd need to take.",
    "For Sports we recommend a good full frame sensor camera and long zoom lens with a wide aperture in case you are shooting in darker conditions.",
    "For wildlife we recommend a very good crop sensor camera and a very long telephoto lens (ex. 200-600 f5.6-6.3) because a lot of times you will" +
    " be far away from your subject."
]

console.log(choiceArray[choice-1]);



