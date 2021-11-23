const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonar.anywhere.co', // hosted url for sonar
    token: '51d67ea3a3f2adc3c58f9d93a523d09f67b33694', // your project token
    options: {
      'sonar.projectKey': 'CWATestCaseAutomation', // your project key
      'sonar.projectName': 'CWATestCaseAutomation', // your project name
      'sonar.sources': 'server',
      'sonar.tests': 'spec',
      'sonar.test.inclusions':
        'spec/**/*.test.jsx,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      // 'sonar.eslint.reportPaths': 'eslint-report.json', //if your are using eslint reports then add or else ignore this.
    },
  },

  () => process.exit(),
);
