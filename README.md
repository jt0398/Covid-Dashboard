# Covid Dashboard

Deploy a microservice application to AWS ECS using CloudFormation. This project uses data published from [The COVID Tracking Project](http://covidtracking.com) API.

```bash
.
├── README.MD                       <-- This instructions file
├── client                          <-- Source code for React dashboard application
│  └── src
│  └── Dockerfile                   <-- Docker build commands
│  └── package.json                 <-- React dependencies and scripts
├── cloudformation                  <-- AWS CloudFormation templates for CI/CD
|── server
│  └── cumulative-trend-service     <-- Source code for API (cumulative daily stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── daily-trend-service          <-- Source code for API (daily stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── national-total-service       <-- Source code for API (national stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── poll-data-service            <-- Source code for CRON job that pulls
|                                       data from The COVID Tracking Project API
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
├── docker-compose.yml              <-- Docker configuration for local DEV containers
```

## AWS Services Used

- CodePipeline for CI/CD
- S3
- ALB
- Auto Scaling
- ECS and ECR Repository
- CloudWatch Logs
- RDS databases

## Requirements

- [Create an AWS account](https://portal.aws.amazon.com/billing/signup#/start) if you do not have one.
- [NodeJS 12.18+ installed](https://nodejs.org/en/download/)
- [Docker installed](https://docs.docker.com/get-docker/)

## Using this Application

Run the following commands in the project root directory

```bash
docker-compose up
```

To stop all docker containers

```bash
docker-compose down
```

## Deploy to AWS

1. Create a GitHub Personal access token if you do not have one
1. Login to [AWS console](https://console.aws.amazon.com/)
1. Create an EC2 Key Pair if you do not have one
1. Create CloudFormation stack in order:
   - Public VPC
   - RDS Databases
   - CodePipeline

Provide the required app parameters (see parameter details below).

## CloudFormation Parameters

- EC2KeyPair: (Required) EC2 key pair to use to SSH to EC2 instances.
- ELBAccountID: (Requied) Get the ID from https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html for the region that hosts the ELB

## Contributors

1. [Judy Tan](https://github.com/jt0398)
2. [Sachin Jhaveri](https://github.com/sachin796)
