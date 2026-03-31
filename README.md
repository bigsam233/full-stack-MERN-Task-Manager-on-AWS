
# Full Stack MERN Task Manager on AWS

## 📌 Overview

**A production-style, cloud-native MERN application deployed on AWS using Docker, private subnets, and an Application Load Balancer, demonstrating real-world DevOps architecture.**

This project is a **full-stack MERN (MongoDB, Express, React, Node.js) Task Management application** deployed on AWS using a **secure, scalable, and production-style architecture**.

Users can:
- Create tasks
- View tasks in real-time
- Update task status
- Delete tasks

The application is fully **containerized using Docker**, ensuring consistent environments across development and production. Both the frontend (React with Nginx) and backend (Node.js API) are packaged into containers and orchestrated using Docker Compose.

The application is deployed inside a **private subnet**, meaning the core application infrastructure is **not directly exposed to the internet**. Traffic is securely routed through an **Application Load Balancer (ALB)**, following real-world cloud architecture best practices.

## 🏗️ Architecture
[![full-stack-MERN-by-SAmuel-Tettey-fio.png](https://i.postimg.cc/Y9W830BN/full-stack-MERN-by-SAmuel-Tettey-fio.png)](https://postimg.cc/YGt12p9j)

This project follows a **production-grade AWS architecture**:

**•	Application Load Balancer (ALB)**: Public entry point for users and routes HTTP traffic to private instances.  
**•	VPC (Virtual Private Cloud)**: 2 Public Subnets (for ALB & NAT Gateway) and 2 Private Subnets (for application servers).  
**•	Bastion Host (Public EC2)**: Secure SSH access to private instances.  
**•	Private EC2 Instance**: Hosts Dockerized MERN application and Not directly accessible from the internet.  
**•	NAT Gateway**: Allows private EC2 to access the internet (e.g., install packages).  
**•	MongoDB Atlas**: Managed cloud database (DBaaS)

## ⚙️ Tech Stack
🔹 **Frontend**: React (Functional Components + Hooks).  
🔹 **Backend**: Node.js and Express.js  
🔹 **Database**: MongoDB Atlas.  
🔹 **DevOps / Cloud**: Docker, Docker Compose, AWS EC2, AWS VPC, AWS Application Load Balancer (ALB), AWS NAT Gateway and Bastion Host Architecture.

## 💻 Deployment Steps
### 1. Application Development
* Built REST API using Express:  
    * createTask 
    * getTasks 
    * updateTask 
    * deleteTask 
* Connected backend to MongoDB Atlas 
* Developed React frontend dashboard 
##### *Creating API Routes*
[![Creating-API-Routes.png](https://i.postimg.cc/PrGHjVXK/Creating-API-Routes.png)](https://postimg.cc/w3kZ5Vss)

##### *Generating Connection String on MongoDB*
[![Creation-of-DB-in-Mongo-DB-and-connection-string.png](https://i.postimg.cc/BbBMRvQL/Creation-of-DB-in-Mongo-DB-and-connection-string.png)](https://postimg.cc/m1hYHB9B)

### 2. Containerization
* Created Dockerfile for:  
    * Backend (Node.js API) 
    * Frontend (React → Nginx production build) 
* Used docker-compose to orchestrate services

##### *Frontend Docker Build*
[![frontend-docker-build.png](https://i.postimg.cc/c1Bppxzg/frontend-docker-build.png)](https://postimg.cc/fkkqXNDD)

##### *Backend Docker Build*
[![Backend-dicker-Build.png](https://i.postimg.cc/Qtbfytd2/Backend-dicker-Build.png)](https://postimg.cc/tZsd19Pk)

[![docker.png](https://i.postimg.cc/Wb3sSq4q/docker.png)](https://postimg.cc/MXCkpTVz)

### 3. AWS Infrastructure Setup
**VPC Configuration**  
* Created custom VPC 
* Configured 2 Public Subnets and 2 Private Subnets 
* Attached Internet Gateway 

**NAT Gateway**  
* Deployed in public subnet  
* Enabled outbound internet access for private EC2 

**EC2 Instances**  
* Bastion Host (Public Subnet)  
* Application Server (Private Subnet)

##### *VPC For MERN Task App*
[![VPC-For-MERN-Task-App.png](https://i.postimg.cc/JhcwRRhF/VPC-For-MERN-Task-App.png)](https://postimg.cc/JynYqVZ3)

##### *EC2 Instances*
[![EC2-Instances.png](https://i.postimg.cc/ZKJpKSLq/EC2-Instances.png)](https://postimg.cc/w3b70nZK)

### 4. Secure Access (Bastion Host)  
* Connected to Bastion via SSH  
* Used SCP to transfer application files  
* Accessed private EC2 through Bastion

##### *Connecting to Bastion Server via SSH*
[![Connecting-to-Bastion-Server-via-SSH.png](https://i.postimg.cc/L6GyJGYg/Connecting-to-Bastion-Server-via-SSH.png)](https://postimg.cc/gnqy5SKG)

##### *Transfering Application Files via SSH to Bastion Server*
[![Transfering_Application_Files_via_SSH_to_Bastion_Server.png](https://i.postimg.cc/Cxj3Cbqt/Transfering_Application_Files_via_SSH_to_Bastion_Server.png)](https://postimg.cc/21S9rbTF)

##### *Transfering of Application files to private EC2*
[![Transfering-of-Application-files-to-private-EC2.png](https://i.postimg.cc/RVPkgvsL/Transfering-of-Application-files-to-private-EC2.png)](https://postimg.cc/KRMpzhy1)

##### *Accessing Private Ec2 via Bastion Public Server*
[![Accessing-Private-Ec2-via-Bastion.png](https://i.postimg.cc/SRtpY4HD/Accessing-Private-Ec2-via-Bastion.png)](https://postimg.cc/H85NFqYy)


### 5. Application Deployment 
* Installed Docker & Docker Compose on private EC2  
* Ran: ```bash
docker-compose up -d --build

##### *Installing Docker on Private EC2*
[![Installing-Docker-on-Private-EC2.png](https://i.postimg.cc/fTNwXW3B/Installing-Docker-on-Private-EC2.png)](https://postimg.cc/V5KQP8WC)


### 6. Load Balancer Setup  
* Created Target Group (port 3000)  
* Registered private EC2 instance  
* Configured health checks (/)

### 7. Application Load Balancer (ALB)  
* Deployed ALB in public subnets  
* Configured listener: HTTP:80 → Target Group  
* Updated security groups: ALB → EC2 (port 3000)

##### *Application Load Balancer for MERN Task App*
[![Load-balancer.png](https://i.postimg.cc/3rbq5thd/Load-balancer.png)](https://postimg.cc/V5ngXBd8)

### 8. Debugging & Optimization  
Resolved real-world issues including:  
* Security group misconfigurations  
* ALB target health failures 
* Port mapping (3000 → 80 via Docker)  
* Network connectivity between ALB and private EC2

### Application Running  
[![Working-Application.png](https://i.postimg.cc/x1Drzv3H/Working-Application.png)](https://postimg.cc/gnDB965k)

## 📬 Contact  
If you’re a recruiter or hiring manager looking for a Cloud/DevOps Engineer, feel free to connect via email at samuel.tfio@gmail.com




## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuel-tettey-fio/)



## Authors

- [@bigsam233](https://www.github.com/bigsam233)

