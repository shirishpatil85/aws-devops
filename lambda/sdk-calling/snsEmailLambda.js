console.log("Loading function"); 
var AWS = require("aws-sdk"); 
 
exports.handler = function(event, context) { 
    var eventText = JSON.stringify(event, null, 2); 
    console.log("Received event:", eventText); 
    var sns = new AWS.SNS(); 
    var params = { 
        Message: "An object is added in SQS",  
        Subject: "Message from SNS", 
        TopicArn: "arn:aws:sns:us-west-1:245376966395:Q-demo" // Give the ARN of your SNS 
    }; 
    sns.publish(params, context.done); 
}; 