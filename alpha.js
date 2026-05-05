// START PROGRAM

// DISPLAY "Welcome to Engagement Rate Calculator"

// PROMPT user for totalFollowers
// CONVERT totalFollowers to Number

// PROMPT user for totalLikes
// CONVERT totalLikes to Number

// PROMPT user for totalComments
// CONVERT totalComments to Number


// DEFINE FUNCTION calculateEngagement(followers, likes, comments)

//     SET engagementRate = ((likes + comments) / followers) * 100

//     ROUND engagementRate to 2 decimal places

//     IF engagementRate < 1
//         SET message = "Low engagement. Your content may not be resonating with your audience."

//     ELSE IF engagementRate >= 1 AND engagementRate <= 3.4
//         SET message = "Average engagement. Solid performance, but there is room to grow."

//     ELSE IF engagementRate >= 3.5 AND engagementRate <= 6
//         SET message = "Good engagement. Your audience is responding well to this content."

//     ELSE
//         SET message = "Excellent engagement. This is top-performing content!"

//     RETURN engagementRate AND message

// END FUNCTION


// CALL calculateEngagement(totalFollowers, totalLikes, totalComments)
// STORE result


// DISPLAY alert with:
//     "Engagement Rate: " + engagementRate + "%"
//     + message


// END PROGRAM


document.getElementById('calc-form').addEventListener('submit', function(e) {

     e.preventDefault(); 

    let followers = Number(document.getElementById("followers").value);
    let likes = Number(document.getElementById("likes").value);
    let comments = Number(document.getElementById("comments").value);

    if (followers <= 0) {
        alert("Followers must be greater than 0");
        return;
    }
    let value = ((likes + comments) / followers) * 100;
    value = value.toFixed(2);


    let message = "";

    if (value < 1) {
        message = "Low engagement. Your content may not be resonating with your audience.";
    } else if (value >= 1 && value <= 3.4) {
        message = "Average engagement. Solid performance, but there is room to grow.";
    } else if (value >= 3.5 && value <= 6) {
        message = "Good engagement. Your audience is responding well.";
    } else {
        message = "Excellent engagement. This is top-performing content!";
    }

     document.getElementById("final-result").innerHTML =
        value + '<span class="percentage">%</span>';

    document.getElementById("remark-text").innerText = message;
    let resultEl = document.getElementById("final-result");

if (value < 1) resultEl.style.color = "red";
else if (value <= 3.4) resultEl.style.color = "orange";
else if (value <= 6) resultEl.style.color = "blue";
else resultEl.style.color = "green";

})


