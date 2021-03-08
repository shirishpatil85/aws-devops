# Create EC2 based traditional application setup

Create key pair

Add MFA to root account

## Create Networking related infrastructure

VPC 
----
 VPC    	- CIDR Block (main route table created by default)  
 
 IG 		- IG, VPC Gateway Attachment (VPC 1 <-> IG 1)  
 
 NAT		- Subnet <-> Elastic IP or IP Private <-> NAT <-> Internet  
 
 Subnet 	- Public and Private, (CIDR ie IP range + AZ + 1 RouteTable)  
 
 Route 		- Route : CIDR subnet level <-> Gateway IG, local  
 
 EC2/RDS SG  	- Egress, Ingress (protocol, port, Destination/Source CIDR)  
 
 Elastic IP     - Avoid using it & instead use DNS, max 5 per account, fixed IP assigned manually to other EC2 instance on failure  
 
 Output (Exported)  
  VPCId  
  Subnet pairs - 2 of two different AZ  
  Security Groups for ELB, RDS, App, Bastion  

 Default VPC - Public Subnets - has both public and private IPs 

 ELB and Web servers should be in same public subnets  DB should be in private subnet Security group CIDR or soubnet port are configured  

## Create RDS (Aurora) with backup  
 Cluster  
 
 Instances - 2  
 
 CW Alarm  
 
 SNS Topic  
 
 IAM Role for CW Alarm to SNS  

 Imported - Subnets 2, Security group  
 
## Create bastion  
 
 ElasticIP  
 
 ENwInterface 	- Subnet , private IP , SG | Subnets M-1 <-> EC2 (communication)  
 
 IAM Role 	- Putevents, describe log logroups, to cloudwatch  
 
 Log 	  	- LogGroup, Metrics - Filter  
 
 Putty 	  	- Session -> Connection -> ssh-> auth -> key import ppk  
 			MFA authenticator QR scan for registering  

## Create EC2 auto scaling group for application web server  
 
 Launch Config - Autoscaling properties,  
		 
     CW Alarm,   
		 
     ALB  
		 
     EC2   
			Launch config  
				Subnets used should be public  
				services  
				userdata - scripts  
					cfn - ec2 sends signal to ASG  
			
      Webserverscaleup/down policy  
			
      CW -Alarm - policy  

Imported - VPC, Subnets for ALB and LConfig for EC2  
