# Demos of Lambda

Using AWS SDK
--------------------------------------
Demo1: Send an Email When an Object is Added to S3 through Lambda  
Demo2: Send a Notification through Lambda When a Message is Sent to SQS  

Lambda setup
 - Create admin role
 - Lambda Code
   - Event handler 
     - SDK provisioning APIs
      - (aws.SES).sendEmail
      - (aws.SNS).publish

Events to trigger lambda
S3  -> Create Event -> Notification -> Send To Lambda  
SQS -> Create Trigger for Lambda Function  
API Gateway (REST Endpoint) -> Create GET/POST events  


Lambda using stacks
----------------------------------------
Files - template.yaml, handler or code, event file  


SAM applications  
-----------------------------------------

SAM is interface to build full fledge applications using lambda.  
Refer the readme file in sam-cli-templates folder for details.  
