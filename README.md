NestJS Structure
```
.
├── README.md
├── dev
│   └── Dockerfile
├── migrations
│   ├── files
│   │   ├── 1707971224084-$npm_config_name.ts
│   │   └── 1708517873213-$npm_config_name.ts
│   └── migration-data-source.ts
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app.module.ts
│   ├── application
│   │   ├── cqrs
│   │   └── dtos
│   ├── domain
│   │   ├── aggregates
│   │   ├── domain-events
│   │   ├── entities
│   │   └── value-objects
│   ├── infrastructure
│   │   ├── common
│   │   ├── database
│   │   ├── exceptions
│   │   ├── logger
│   │   └── repositories
│   ├── main.ts
│   ├── presentation
│   │   ├── controllers
│   │   ├── guards
│   │   └── presenters
│   ├── service
│   │   ├── exchange-rate.service.ts
│   │   ├── external-caller.service.ts
│   │   └── index.ts
│   └── utils
│       ├── infinity-pagination.ts
│       ├── types
│       └── validation-options.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

.eslintrc.js
```javaScript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
};
```
