# Demos of Lambda

Using AWS SDK
--------------------------------------
Demo1: Send an Email When an Object is Added to S3 through Lambda  
Demo2: Send a Notification through Lambda When a Message is Sent to SQS  

Lambda creation
 - create admin role
 - Code
   - Event handler 
     - SDK provisioning APIs
      - (aws.SES).sendEmail
      - (aws.SNS).publish

S3  -> Create Event -> Notification -> Send To Lambda  
SQS -> Create Trigger for Lambda Function  
