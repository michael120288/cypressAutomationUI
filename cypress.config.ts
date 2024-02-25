import { defineConfig } from 'cypress';

const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path');
export default defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        baseUrl: 'https://uitestingplayground.com',
        //baseUrl: 'https://play1.automationcamp.ir',
        setupNodeEvents(on, config) {
            //reporter = 'cypress-mochawesome-reporter';
            require('cypress-mochawesome-reporter/plugin')(on);
            // implement node event listeners here
            //reading excel document from fixture
            on('task', {
                parseXlsx({ filePath }) {
                    return new Promise((resolve, reject) => {
                        try {
                            const jsonData = xlsx.parse(
                                fs.readFileSync(filePath)
                            );
                            resolve(jsonData);
                        } catch (e) {
                            reject(e);
                        }
                    });
                },
            });
        },
        env: {
            stage: 'https://stage.pasv.us',
            prod: 'https://coding.pasv.us/course',
            test: 'Hello World!',
            demoQA: 'https://demoqa.com',
            expected_conditions:
                'https://play1.automationcamp.ir/expected_conditions.html',
            herokuapp: 'https://the-internet.herokuapp.com',
            email: 'michael.sheptun@gmail.com',
            password: 'michael12SH',
        },
    },
    retries: {
        runMode: 3,
        openMode: 2,
    },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 16000,
    reporterOptions: {
        charts: true,
        reportPageTitle: 'LecturePASV',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
});
//
// env:{
//     stage:'https://stage.pasv.us/course',
//     prod:'https://coding.pasv.us/course',
//     test:'Hello World!'
// }
// env.stage  dot notation
