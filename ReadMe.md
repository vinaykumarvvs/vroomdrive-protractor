## VRoomDrive UI Tests using Protractor

In this repository we are going to automate UI tests for VRoomDrive using Protractor

The tech stack used for this project are:
1. **JavaScript** as the language for writing test code
2. **Cucumber** as the framework
3. **NPM** as the build tool
4. **Visual Studio Code** as the preferred IDE for writing java code.

#### Getting Started
Setup your machine.
1. Install Node
2. Install Protractor by using ```npm install -g protractor```
3. Install Visual Studio Code

#### Cloning & Importing the Project
1. Clone the project from ```git clone https://github.com/vinaykumarvvs/vroomdrive-protractor.git```
2. Import the project (vroomdrive-protractor) in Visual Studio Code ```File -> Open -> Browse Project Location```
3. Now ```OpenTerminal/CMD -> cd <change-to-project-location>``` and then execute ```npm install```

#### Running tests
Note: ```OpenTerminal/CMD -> cd <change-to-project-location>```
1. First step is to update the webdriver using ```npm run update-driver``` (Not a mandatory step everytime)
2. Second we need to start the webdriver using ```npm start-driver``` (It is mandatory before running tests)
3. So, now open another terminal and navigate to the project location and then execute ```npm run ui-tests``` to run the tests.

---