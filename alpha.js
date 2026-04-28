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