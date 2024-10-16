import ts from 'typescript-eslint';

export default ts.config(
  { ignores: ['dist'] },
  {
    files: ['*.ts', '{src,db}/**/*.ts'],
    extends: [...ts.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['vitest.config.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['db/**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname + '/db',
      },
    },
  },
);
