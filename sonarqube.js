const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonar.anywhere.co', // hosted url for sonar
    token: 'f170729119e2244b1f882a580477f5069cf2507c', // your project token
    options: {
      'sonar.projectKey': 'CWATestCaseAutomation', // your project key
      'sonar.projectName': 'CWATestCaseAutomation', // your project name
      'sonar.sources': 'build',
      'sonar.tests': 'build',
      'sonar.test.inclusions':
        'build/step-definition/*.steps.js',
     // 'sonar.testExecutionReportPaths': 'test-report.xml',
      // 'sonar.eslint.reportPaths': 'eslint-report.json', //if your are using eslint reports then add or else ignore this.
  },
	},
  () => process.exit(),
);
