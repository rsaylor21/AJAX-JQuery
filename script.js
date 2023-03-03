let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http:www.boredapi.com/api/activity', true);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            //Parse the response to a variable
            let myResponse = JSON.parse(this.responseText);

            //Create a div container element
            let myDiv = document/createElement('div');

            //Create a paragraph element and add the innerHTML
            let activityTag = document.createElement('p');
            activityTag.innerHTML = "Activity Name: " + myResponse.activity;

            //Create another paragraph element and add the innerHTML
            let participantsTag = document.createElement('p');
            participantsTagTag.innerHTML = "Number of Participants: " + myResponse.participants;

            //Append the paragraph tags to the created div element
            myDiv.appendChild(activityTag);
            myDiv.appendChild(participantsTag);

            //Add the div element to the body of the document
            document.body.appendChild(myDiv);
        } else {
            console.log("Error processing request")
        }
    }
}

//jQuery 
 //To make an AJAX request using jQuery - use the $.ajax()
 $.ajax('http://www.boredapi.com/api/activity',
     {
         success: function (APIResponse) {
             // console.log(APIResponse)
             // Create a div element
             let myDiv = document.createElement('div');

            // Creating a paragraph element and adding the innerHTML
             let activityTag = document.createElement('p');
             activityTag.innerHTML = "Activity Name: " + APIResponse.activity;

             // Creating another paragraph element and adding the innerHTML
             let participantsTag = document.createElement('p');
             participantsTag.innerHTML = "Number of Participants: " + APIResponse.participants;

             // Appending the paragraph tags to the created div element
             myDiv.appendChild(activityTag);
            myDiv.appendChild(participantsTag);
              document.body.appendChild(myDiv);
         }
     }
 )

// Create a button in HTML file in the body tag
// Create a function that is triggered when the button is clicked
function getJoke() {
    // Make a AJAX request using the URL
    $.ajax(
        'https://backend-omega-seven.vercel.app/api/getjoke',
        {
            success: function (APIResponse) {
                console.log(APIResponse)
                // turn the string to JSON type data
                let joke = JSON.parse(APIResponse)
                console.log(joke)

                // Create an HTML elment to display the Joke setup using the div tag
                let myJokeDiv = document.createElement('div');
                myJokeDiv.innerHTML = joke[0].question;

                // Create another button that displays the text, "Get Punch Line"
                let myButton = document.createElement('button');
                myButton.innerHTML = "Get Punchline";
                // Define an onclick attribute and add a function
                myButton.onclick = function() {
                    myJokeDiv.innerHTML += " " + joke[0].punchline
                }
                // Add everything to the body of the document
                document.body.appendChild(myJokeDiv);
                document.body.appendChild(myButton);
            }
        }
    )
}