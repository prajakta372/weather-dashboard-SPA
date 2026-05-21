http://s3-demo-weather.s3-website.ap-south-1.amazonaws.com
# Currently working on it
# Weather Dashboard SPA

A responsive weather dashboard built using 

- HTML
- CSS
- Bootstrap
- JavaScript
- OpenWeather API
- AWS S3 Static Hosting

## Features

- Search weather by city
- Temperature display
- Humidity display
- Wind speed display
- Weather icons
- Responsive design
- Live API integration

## Deployment

Hosted using AWS S3 Static Website Hosting.


# Weather Dashboard Deployment Project

## Project Overview

This project is a simple Weather Dashboard frontend application built using:

* HTML
* CSS
* JavaScript

The main purpose of this project was to explore different deployment and DevOps approaches using AWS, Docker, Linux, and GitHub Actions.

---

# Features

* Weather dashboard frontend
* Responsive UI
* AWS S3 static website hosting
* Dockerized deployment
* AWS EC2 deployment
* GitHub Actions CI/CD pipeline

---

# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

## Cloud & DevOps

* AWS S3
* AWS EC2
* Docker
* Nginx
* GitHub
* GitHub Actions
* Linux
* SSH

---

# Approach 1 — AWS S3 Static Website Hosting

## Purpose

Used AWS S3 for static website hosting of frontend files.

---

## Steps Followed

### 1. Created S3 Bucket

* Opened AWS Console
* Opened S3 service
* Created a new bucket

---

### 2. Enabled Static Website Hosting

Inside bucket:

* Properties
* Static website hosting
* Enabled hosting

Configured:

* Index document: `index.html`

---

### 3. Uploaded Project Files

Uploaded:

* index.html
* style.css
* script.js

---

### 4. Configured Bucket Permissions

* Disabled block public access
* Added bucket policy for public read access

---

### 5. Accessed Website

Used S3 website endpoint URL to access website publicly.

---

# Approach 2 — Dockerized Deployment on AWS EC2

## Purpose

Used Docker and EC2 to practice Linux server deployment and containerization.

---

## Steps Followed

### 1. Created EC2 Instance

* Used Amazon Linux AMI
* Created key pair (.pem file)
* Configured Security Group

Opened ports:

* 22 (SSH)
* 8080 (Application Access)

---

### 2. Connected to EC2 Using SSH

```bash
ssh -i aws_key.pem ec2-user@PUBLIC_IP
```

---

### 3. Installed Docker

```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
```

---

### 4. Cloned GitHub Repository

```bash
git clone REPOSITORY_URL
```

---

### 5. Created Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

### 6. Built Docker Image

```bash
sudo docker build -t weather-app .
```

---

### 7. Ran Docker Container

```bash
sudo docker run -d -p 8080:80 --name weather-container weather-app
```

---

### 8. Verified Running Container

```bash
sudo docker ps
```

---

### 9. Accessed Application

```text
http://PUBLIC_IP:8080
```

---

# Docker Commands Used

## Build Docker Image

```bash
sudo docker build -t weather-app .
```

## Run Docker Container

```bash
sudo docker run -d -p 8080:80 --name weather-container weather-app
```

## View Running Containers

```bash
sudo docker ps
```

## View Container Logs

```bash
sudo docker logs weather-container
```

---

# Linux Commands Used

```bash
ls
pwd
cd
mkdir
rm
nano
```

---

# Networking Concepts Used

* Public IP
* SSH
* Port Mapping
* Security Groups
* DNS Basics

---

# Security Group Configuration

| Port | Purpose        |
| ---- | -------------- |
| 22   | SSH Access     |
| 8080 | Website Access |

---

# Troubleshooting Challenges Faced

## SSH Permission Error

Issue:

```text
Permissions are too open
```

Solution:

* Updated PEM file permissions

---

## Wrong EC2 Username

Issue:

```text
Permission denied (publickey)
```

Solution:

* Used correct username:

  * `ec2-user`

---

## Missing Dockerfile

Issue:

```text
failed to read dockerfile
```

Solution:

* Created Dockerfile manually

---

## Port Access Issue

Issue:

```text
Site not reachable
```

Solution:

* Opened port 8080 in Security Group

---

# Approach 3 — GitHub Actions CI/CD Pipeline

## Purpose

Implemented a basic CI/CD pipeline to automate deployment to AWS S3.

---

# CI/CD Workflow

```text
Git Push
   ↓
GitHub Actions Trigger
   ↓
Deploy Files to AWS S3
   ↓
Website Automatically Updated
```

---

# Steps Followed

## 1. Created GitHub Actions Workflow

Folder structure:

```text
.github/
└── workflows/
    └── deploy.yml
```

---

## 2. Added Workflow Configuration

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Deploy Website to S3
        run: aws s3 sync . s3://YOUR_BUCKET_NAME --delete
```

---

## 3. Created IAM User

Created IAM user with:

* AmazonS3FullAccess

---

## 4. Added GitHub Secrets

Added:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

---

## 5. Triggered Pipeline

```bash
git add .
git commit -m "updated pipeline"
git push
```

---

# CI/CD Benefits

* Automatic deployment
* Faster updates
* Reduced manual work
* Consistent deployment process

---

# Difference Between S3 Hosting and EC2 Docker Deployment

| AWS S3 Hosting       | EC2 Docker Deployment              |
| -------------------- | ---------------------------------- |
| Static hosting       | Full server deployment             |
| Simple setup         | More control                       |
| Best for frontend    | Supports containerized apps        |
| No server management | Requires Linux & Docker management |

---

# Future Improvements

* Add backend integration
* Add monitoring tools
* Add custom domain
* Explore Route 53
* Add advanced CI/CD pipeline

---

# Key Learnings

* AWS cloud deployment
* Docker containerization
* Linux server management
* GitHub Actions automation
* SSH connectivity
* Networking basics
* Security Group configuration
* Troubleshooting deployment issues

---

# Author

Prajakta Dnyaneshwar Gavhane
