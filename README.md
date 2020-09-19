# Covid Dashboard

Deploy a microservice application to AWS ECS using CloudFormation. This project uses data published from [The COVID Tracking Project](http://covidtracking.com) API.

```bash
.
├── README.MD                       <-- This instructions file
├── client                          <-- Source code for a React dashboard application
│  └── src
│  └── Dockerfile                   <-- Docker build commands
│  └── package.json                 <-- React dependencies and scripts
├── cloudformation                  <-- AWS CloudFormation templates for CI/CD
|── server
│  └── cumulative-trend-service     <-- Source code for an API (cumulative daily stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── daily-trend-service          <-- Source code for an API (daily stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── national-total-service       <-- Source code for an API (national stats)
│       └── app.js                  <-- API routes
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
│  └── poll-data-service            <-- Source code for a CRON job that pulls data from The COVID Tracking Project API
│       └── server.js               <-- Express server
│       └── package.json            <-- NodeJS dependencies and scripts
├── docker-compose.yml          <-- Docker configuration for local DEV containers
```

## Services Deployed

- A Lambda function for publishing messages to Amazon MQ over MQTT.
- An Amazon MQ SINGLE_INSTANCE broker.

## Requirements

- [Create an AWS account](https://portal.aws.amazon.com/billing/signup#/start) if you do not have one.
- [NodeJS 12.18+ installed](https://nodejs.org/en/download/)
- [Docker installed](https://docs.docker.com/get-docker/)

## Using this Application

To run the applications, run the following commands in the project root directory

```bash
docker-compose up
```

To stop all docker containers

```bash
docker-compose down
```

## Deploy to AWS

1.
1.
1. Provide the required app parameters (see parameter details below) and click "Deploy"

## Parameter Details

- AdminUsername: (Required) A username for AmazonMQ console access.
- AdminPassword: (Required) A password for AmazonMQ console access. 12 characters and at least 4 unique characters.
- ClientUsername: (Required) A username for a client.
- ClientPassword: (Required) A password for a client. 12 characters and at least 4 unique characters.

## Contributors

1. [Judy Tan](https://github.com/jt0398)
2. [Sachin Jhaveri](https://github.com/sachin796)
