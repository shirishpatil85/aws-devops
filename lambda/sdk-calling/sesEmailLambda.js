var aws = require('aws-sdk');
 
var ses = new aws.SES({ 
    region: 'us-east-1' 
}); 

exports.handler = function(event, context) { 
	console.log("Incoming: ", event); 
	
	var eParams = { 
		Destination: { ToAddresses: ["verified-toemailid@gmail.com"] }, 
		Message: { Body: {Text: { Data: "Lambda is Working" }}, Subject: {Data: "Mail from SES"}}, 
		Source: "verified-fromemailid@gmail.com" 
    	};
 
    	console.log('===SENDING EMAIL===');

    	var email = ses.sendEmail(eParams, 
		function(err, data) { 
        		if (err) console.log(err); 
        		else { 
            			console.log("===EMAIL SENT==="); 
	            		// console.log(data); 
            			console.log("EMAIL CODE END"); 
         			console.log('EMAIL: ', email); 
       				context.succeed(event);
       			} 
   	}); 
}; 