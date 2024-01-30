import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://uitestingplayground.com',
        //baseUrl: 'https://play1.automationcamp.ir',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            stage: 'https://stage.pasv.us/course',
            prod: 'https://coding.pasv.us/course',
            test: 'Hello World!',
            demoQA:'https://demoqa.com',
            expected_conditions: 'https://play1.automationcamp.ir/expected_conditions.html'
        },
    },
    defaultCommandTimeout: 16000
});
//
// env:{
//     stage:'https://stage.pasv.us/course',
//     prod:'https://coding.pasv.us/course',
//     test:'Hello World!'
// }
// env.stage  dot notation
