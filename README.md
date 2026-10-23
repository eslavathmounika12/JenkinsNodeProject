HEAD
# Jenkins Node.js CI/CD Lab Project

## Objective
Create two Git branches that modify a Node.js app, track work with Git, and use Jenkins to test and deploy the app to a local Windows server.

## Requirements
- Git
- Node.js and npm
- Java supported by your Jenkins version
- Jenkins running on Windows with Pipeline and Git plugins

## Run locally
Open Command Prompt in this folder:
```cmd
npm test
npm start
```
Open http://localhost:3000. Stop the server with Ctrl+C.

## Create branches
```cmd
git init -b main
git add .
git commit -m "Initial Node.js application"

git switch -c dev
```
Edit app.js on `dev` to show `Development Branch`, then:
```cmd
git add app.js
git commit -m "Update homepage in dev branch"

git switch main
git switch -c feature
```
Edit app.js on `feature` to show `New Feature Branch` and a feature paragraph, then:
```cmd
git add app.js
git commit -m "Add welcome feature"

git switch main
git merge dev
git merge feature
git branch
git log --oneline --all --graph
```
Both branches edit app.js, so Git may report a merge conflict. Open app.js, keep the final HTML you want, remove `<<<<<<<`, `=======`, and `>>>>>>>`, save, then run `git add app.js` and `git commit -m "Resolve merge conflict"`.

## Push to GitHub
Create an empty repository and replace YOUR_USERNAME:
```cmd
git remote add origin https://github.com/YOUR_USERNAME/JenkinsNodeProject.git
git push -u origin main
git push -u origin dev
git push -u origin feature
```
If `origin` already exists, check it using `git remote -v`.

## Jenkins configuration
1. Start Jenkins and open http://localhost:8080.
2. Click New Item, enter `NodeJS-CICD`, choose Pipeline, and click OK.
3. Under Pipeline, select `Pipeline script from SCM`.
4. SCM: Git; Repository URL: your GitHub URL; Branch Specifier: `*/main`; Script Path: `Jenkinsfile`.
5. Save, click Build Now, and inspect Console Output.

The Jenkins agent must be Windows-based and have Git, Node.js/npm, and PowerShell on PATH. Configure credentials if the GitHub repository is private.

## Deployment note
The sample pipeline uses port 3000 and stops the process listening on that port before starting the app. Do not use port 3000 for another application while deploying. This is a simple lab demonstration, not a production deployment strategy.