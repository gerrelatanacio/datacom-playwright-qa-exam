module.exports = {
    default: `--require-module ts-node/register \
  --require 'src/resources/projects/netlify/cucumber/support/**/*.ts' \
  --require 'src/resources/projects/netlify/cucumber/steps/**/*.ts' \
  'src/resources/projects/netlify/cucumber/features/**/*.feature'`
  };
  