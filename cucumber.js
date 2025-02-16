module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/resources/projects/netlify/cucumber/support/**/*.ts",
      "src/resources/projects/netlify/cucumber/steps/**/*.ts"
    ],
    paths: ["src/resources/projects/netlify/cucumber/features/**/*.feature"],
    retry: 0,
    parallel: 4,
    format: [
      "progress", // Console output
      "json:reports/cucumber-report.json", // JSON report
      "html:reports/cucumber-report.html", // HTML report (if supported plugin is installed)
      "summary" // Console summary output
    ],
  }
};
