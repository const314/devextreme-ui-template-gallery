import createTestCafe from 'testcafe';
import { argv, env, exit } from 'process';
import parseArgs from 'minimist';
import { packages } from './config.js';

console.log('testcafe');

const args = parseArgs(argv && argv.slice(1) || [], {
  default: {
    project: 'react',
    page: 'crm-contact-details',
    concurrency: '0',
    quarantineMode: false,
    theme: 'material.light',
  },
});

const currentPackage = packages.find((p) => p.name === args.project);

if (args.project === '' && args.page === '') {
  process.exit(1);
}

let testCafe;
try {
  createTestCafe()
    .then((tc) => {
      console.log('testcafe created');
      testCafe = tc;

      const runner = testCafe.createRunner()
        .browsers('chrome:headless')
        .reporter('minimal')
        .src([
          `tests/${args.page}.test.js`,
        ]);
      runner.cache = true;

      if (args.concurrency > 0) {
        runner.concurrency(args.concurrency);
      }

      env.project = args.project || 'react';
      env.port = currentPackage.port;
      env.theme = args.theme || 'material.light';

      return runner.run({
        quarantineMode: args.quarantineMode === 'true',
      });
    })
    .then((failedCount) => {
      testCafe.close();
      exit(failedCount);
    })
    .catch((e) => { console.log(e); });
} catch (e) {
  console.log(e);
}
