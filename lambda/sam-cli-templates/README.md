Serverless Application Model
----------------------------------------  

Extension of cloudformation for serverless components eg - Lambda, S3, DymanoDB, SQS, SNS etc  

Samples : https://github.com/aws/aws-sam-cli-app-templates  


SAM CLI commands

1> sam init - choose quickstart project  
2> sam build  
3> sam local invoke   // sychronous execution  
 aws lambda invoke --function-name my-function --payload '{ "key": "value" }' response.json  
4> Asynchronus execution  
 aws lambda invoke --function-name my-function  --invocation-type Event --payload '{ "key": "value" }' response.json  
5> sam deploy --guided    
6> sam s3 mb s3://bucket  


API Gateway
----------------------------------------  
1> Choose HTTP/REST/Websocket  
2> Endpoint  - Regional /private / Edge optimized  
3> API -  Methods , Error handling. Model, Permission, Documentation 
4> Create APO - Integrate Lambda / HTTP / Mock etc , region   
5> Auhorizer - Lambda or Cognito   
6> Throttle - request/per sec, Burst to avoid DOSm Quota  
7> Client certificate - Import in client  
8> API key - For client identification  
9> Stage - Env , Cache, TTL, WAF -SQL injection etc, Throttle at stage level, CW logs, Xtrace ,   
  Canary deployment %req to new deployment  
10> Documentation - Swagger  


REST API SAM Deployment
----------------------------------------

1> Creates 2 stacks - application stack  and sam stack 
2> Sam stack only contains s3 bucket policy  
3> Application stack contains 
   - lambda > function and permission,  
   - iam role,  
   - gateway -> stage, deployment , RestApi    


