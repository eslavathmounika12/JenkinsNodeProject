# Jenkins Node.js CI/CD Lab Project

## 1. Project Overview

This project demonstrates Continuous Integration and Continuous Delivery (CI/CD) using Jenkins, Node.js, npm, Git, and GitHub.

The application is maintained using Git branches. Jenkins automatically checks out the source code, installs dependencies, runs tests, and deploys the application locally.

## 2. Objectives

- Understand Git and GitHub version control.
- Create and manage `main`, `dev`, and `feature` branches.
- Develop a simple web application using Node.js.
- Automate build and testing using Jenkins.
- Deploy the application on a local server.
- Understand the CI/CD pipeline workflow.

## 3. Technologies Used

- **Node.js:** Runs the web application.
- **JavaScript:** Implements application logic.
- **Git:** Tracks source-code changes.
- **GitHub:** Hosts the project repository.
- **Jenkins:** Automates the CI/CD pipeline.
- **npm:** Manages packages and runs tests.
- **PowerShell:** Supports deployment on Windows.

## 4. Project Structure

```text
JenkinsNodeProject/
├── app.js
├── package.json
├── test.js
├── Jenkinsfile
├── README.md
└── .gitignore
```

## 5. Application Features

- Displays a welcome message in the browser.
- Runs using a Node.js HTTP server.
- Supports automated tests.
- Demonstrates changes using Git branches.
- Integrates with Jenkins for automated testing and deployment.

## 6. Git Branches

- **main:** Contains the main application version.
- **dev:** Used to develop and test development changes.
- **feature:** Used to implement new features.

Changes can be committed separately on each branch and pushed to GitHub.

## 7. Jenkins Pipeline

The Jenkins pipeline includes the following stages:

1. **Checkout:** Retrieves source code from GitHub.
2. **Install:** Installs the required npm dependencies.
3. **Test:** Runs automated tests to check the application.
4. **Deploy:** Starts the Node.js application on the local server.

## 8. How to Run the Project

### Prerequisites

Install Node.js, npm, Git, and Jenkins.

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Run tests

```bash
npm test
```

### Step 3: Start the application

```bash
npm start
```

### Step 4: Open the application

Open the following URL in your browser:

```text
http://localhost:3000
```

## 9. Git Commands

Check the current branch:

```bash
git branch
```

Create a development branch:

```bash
git switch -c dev
```

Create a feature branch:

```bash
git switch -c feature
```

Track and commit changes:

```bash
git add .
git commit -m "Update application"
```

Push a branch to GitHub:

```bash
git push -u origin main
```

Replace `main` with `dev` or `feature` when pushing those branches.

## 10. Expected Result

- The Node.js application runs at `http://localhost:3000`.
- Automated tests execute successfully.
- Jenkins runs the configured pipeline stages.
- Git maintains the project's commit history.
- GitHub stores the source code and branches.

## 11. Conclusion

This project demonstrates how Git, GitHub, Node.js, npm, and Jenkins work together to implement a basic CI/CD workflow. It helps students understand source-code management, automated testing, and local application deployment.

## 12. Repository

GitHub: https://github.com/eslavathmounika12/JenkinsNodeProject
