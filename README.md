# Serverless API

This is an express application that illustrates how to build and deploy a serverless application.

## Application Setup

#### Clone the Repo

```bash
git clone https://github.com/agavitalis/serverless-api.git
```

#### Install application dependencies

```bash
npm install
```

#### Install Serverless framework

```bash
npm install -g serverless
```

#### Configure Serverless with AWS

```bash
serverless config credentials --provider aws --key ACCESS_KEY --secret SECRET_KEY -o
```

#### Deploy to AWS Lambda

```bash
serverless deploy
```

## Contributing
Adding features and making changes to the project.

#### Create your branch to work off

```bash
git checkout -b <type/your-branch-name>
```

#### Create pull request to master

```bash
git fetch --prune
git pull
git push --set-upstream origin <type/your-branch-name>
```

## Tech Stack

1. [Express](https://expressjs.com/): NodeJS Web framework.
2. [Serverless-http](https://www.npmjs.com/package/serverless-http): Serverless-http.
3. [Serverless Framework](https://www.serverless.com/): A Serverless framwork

