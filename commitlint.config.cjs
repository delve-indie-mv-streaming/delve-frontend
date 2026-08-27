const { types } = require('./.cz-config.cjs');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types.map((t) => t.value)],
    'subject-max-length': [2, 'always', 72],
  },
};
