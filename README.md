# Serverless-Lambda-Vue
---
Navigate to project directory

`$ cd serverless-lambda-vue`

## Prerequisites 
---
*Nodejs & npm* - `$(sudo apt-get install nodejs) || (brew install nodejs)`

*Serverless* - `$(npm i -g serverless)`

## Components Used
---
`- Backend (Express framework, Serverless framework, Mongodb)`

`- Frontend (Vuetify, Axios)`


### Prepare for local deployment
---

#### Install aws-cli in the development machine

Use below command to prepare for local deploment

`$ aws configure`

Input the `access key`, `secret key`, `region` name and `output` as json, Once done we are good to start backend code deployment


#### To run Backend
---

` $ cd backend`

To install dependencies

` $ npm install`

Before deployment, open `serverless.yml` file and replace the mongo url key `DB_HOST` with urs, then deploy using below command

` $ sls deploy`

#### Once deployed, u will get url's like below
---

`endpoints:`

  `POST - https://x1sn7zzg5h.execute-api.us-east-1.amazonaws.com/dev/user`
  
  `GET - https://x1sn7zzg5h.execute-api.us-east-1.amazonaws.com/dev/user`
  
  `GET - https://x1sn7zzg5h.execute-api.us-east-1.amazonaws.com/dev/user-type`
  

##### Copy the base url till `api/`
-----

##### Enter below command to set API url for UI deployment, rememeber to replace the url with the copied url

######  `$ export VUE_APP_API_URL=https://x1sn7zzg5h.execute-api.us-east-1.amazonaws.com/dev/api/`
-----

Once done, navigate to UI code

`$ cd ..`

`$ cd frontend`

Install dependencies using below command

`$ npm install`

To Start development server

`$ npm run dev`

The UI will be running in `http://localhost:8080`

----

### Sequence Diagram
---
                    
```seq
User->UI: Clicks dropdown 
Note right of UI: Makes request to server
UI->>User: Filters users by type
User->UI: Clicks refresh button 
Note right of UI: Makes request to server
UI->>User: Lists all users
User->UI: Clicks New user 
Note right of UI: Validates in both server and client
UI->>User: Adds new user to list
```
---

## Screenshots

Here's the images:

#### List of users
----
![](https://gitlab.com/10decoders/serverless-lambda-vue/raw/master/screenshots/list.png)


#### Filter users by type
----
![](https://gitlab.com/10decoders/serverless-lambda-vue/raw/master/screenshots/filter.png)


#### Add new user
----
![](https://gitlab.com/10decoders/serverless-lambda-vue/raw/master/screenshots/add.png)