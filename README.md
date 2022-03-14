# CWATestCaseAutomation
This project contains the test cases automated for CWA Project - **[Inbox and Settings tab]**.

### Project details:
- **Tool** - WebdriverIO
- **Language** - JavaScript (written in async mode as sync is getting deprecated from Node.js v16)
- **Framwork** - Cucumber (BDD)
- **Reports** - Allure reports
- **CI/CD** - Github Actions

### Get started:
- Download the zip, extract it and open the folder in VS code
- open a new terminal and type npm i 
  
  This will install all dependencies needed. Now node_modules folder would be created in the project. 
  
There you go to run CWA automation. 

### Run commands:
The run commands are customisable according to our wish. All you need to do is add the relevant tag at the end. 

For example, 
  - **To run a single scenario -** ```live_answerconnect=true ./node_modules/.bin/wdio wdio.conf.js ./build/features/*.feature --suite temp --cucumberOpts.tagExpression=@one```

  - **To run all test cases (End to end) -** ```live_answerconnect=true npm run test``` (will run all scenarios in parallel) 

  - **To run more than two or more scenarios in a single feature file or from different feature file -** ```live_answerconnect=true ./node_modules/.bin/wdio wdio.conf.js ./build/features/*.feature --suite temp --cucumberOpts.tagExpression='@one or @two'```

  - **To run the entire feature file -** ```live_answerconnect=true ./node_modules/.bin/wdio wdio.conf.js ./build/features/*.feature --suite temp --cucumberOpts.tagExpression=@addNote```

  - **To run only suite [inbox, settings] -** ```live_answerconnect=true ./node_modules/.bin/wdio wdio.conf.js ./build/features/*.feature --suite temp --cucumberOpts.tagExpression=@inbox```

  - **To run only smoke and regression tests -**```live_answerconnect=true  ./node_modules/.bin/wdio wdio.conf.js ./build/features/*.feature --suite temp --cucumberOpts.tagExpression=@smoke```
  
If more than one scenario is to be run, then it will run in parallel (which means another browser will be launched). As local machine can't handle that instance becasue of the given RAM, cloud functions are used to achieve this

After every test run, allure report will be generated. 

Github actions - When developers makes a pull request, automation codes will run and generate Allure reports. This reports can be seen in [Automation reports](https://testing-reports.setmore.com/index.php?p=cwa-automation)

### Note:
There are few project specific points to remember while writing in cucumber framework

 **Feature file:**
    - This file contains the acceptance criteria. Don't forget to add test case ID as a tag and add other needed tags like @smoke, @regression, @featureName, @componentName and so on
    
   There are 5 categories that needs to be considered, while writing acceptance criteria
    
     1. FHIR 
     2. Member
     3. Chat admin
     4. Account Admin 
     5. Brand-wise 
   If a scenario behaves unique on these 5 categories, then 5 different scenarios has to be written. But if the scenario is common on all the 5 categories, then writing one scenaio is enough. To know more about Member and Admin access policy - refer [member access details](https://docs.google.com/spreadsheets/d/1bY9iLuVF1fvgEMdsO6Bug78GrSGQuNb8gIvzktGIVjk/edit#gid=1887524131) and [Access policy](https://docs.google.com/spreadsheets/d/1RnQDQ1iTnfRaw4oO9PtosrQVm1P0DygLK9_DSWc18F4/edit#gid=0)
      
 **Page object:**
    Eventhough inbox is a single page, let's segregate it to three pages for easy maintenance. 
      - inboxLeft.page.js
      - inboxDetails.page.js
      - inboxRight.page.js
    For settings, a seperate page can be created for each tab
    
Some of the key things to remember while writing automation codes
  - The scenarios has to be independent 
  - Cut short the scenarios in way that each scenario shouldn't exceed more than 1 and a half minutes
