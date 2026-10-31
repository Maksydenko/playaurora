import jsxA11y from 'eslint-plugin-jsx-a11y'
import rcPlugin from 'eslint-plugin-react'
import rcHooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import tsdoc from 'eslint-plugin-tsdoc'
import unusedImports from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import tsParser from '@typescript-eslint/parser'

const filename = fileURLToPath(import.meta.url)
const directoryName = dirname(filename)

const flatCompat = new FlatCompat({ baseDirectory: directoryName })

const eslintConfig = [
  { ignores: ['dist', 'node_modules', 'plopfile.js'] },
  ...flatCompat.extends(
    'plugin:perfectionist/recommended-natural-legacy',
    'plugin:@typescript-eslint/recommended'
  ),
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react: rcPlugin,
      'react-hooks': rcHooksPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImports
    },
    rules: {
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: false,
          ignoreProperties: false
        }
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-style': ['error', 'expression'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-empty-pattern': 'error',
      'no-lonely-if': 'warn',
      'no-restricted-syntax': [
        'warn',
        {
          message:
            'React default import is unnecessary. Use destructuring import.',
          selector:
            "ImportDeclaration[source.value='react'] ImportDefaultSpecifier"
        },
        {
          message: 'Avoid redundant primitive generic.',
          selector: [
            'CallExpression[callee.name=/^use/] >' +
              'TSTypeParameterInstantiation >' +
              ':matches(TSBigIntKeyword, TSBooleanKeyword, TSNullKeyword,' +
              'TSNumberKeyword, TSStringKeyword, TSSymbolKeyword, TSUndefinedKeyword)'
          ].join(' ')
        },
        {
          message: 'Avoid `export default` on declarations.',
          selector: 'ExportDefaultDeclaration > FunctionDeclaration'
        }
      ],
      'no-self-compare': 'error',
      'no-shadow': 'error',
      'no-template-curly-in-string': 'error',
      'no-unused-vars': 'off',
      'no-useless-rename': 'error',
      'object-curly-newline': [
        'warn',
        {
          ObjectExpression: {
            consistent: true,
            minProperties: 2,
            multiline: true
          }
        }
      ],
      'object-shorthand': ['error', 'always'],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          next: ['class', 'const', 'export', 'function', 'let', 'var'],
          prev: 'import'
        },
        {
          blankLine: 'always',
          next: '*',
          prev: 'directive'
        },
        {
          blankLine: 'any',
          next: 'directive',
          prev: 'directive'
        },
        {
          blankLine: 'always',
          next: 'return',
          prev: '*'
        },
        {
          blankLine: 'always',
          next: ['do', 'for', 'if', 'switch', 'try', 'while', 'with'],
          prev: '*'
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['do', 'for', 'if', 'switch', 'try', 'while', 'with']
        }
      ],
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'prefer-template': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/button-has-type': 'error',
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          children: 'never',
          propElementValues: 'always',
          props: 'never'
        }
      ],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: false }],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
          shorthandLast: true
        }
      ],
      'react/no-array-index-key': 'warn',
      'react/self-closing-comp': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react(\\u0000)?$', '^react-dom(\\u0000)?$'],
            ['^[a-z]'],
            ['^@'],
            ['^@/app'],
            ['^@/pages'],
            ['^@/widgets'],
            ['^@/features'],
            ['^@/entities'],
            ['^@/shared'],
            ['^@/'],
            ['\\/api$'],
            ['\\/config$'],
            ['\\/lib$'],
            ['\\/model$'],
            ['\\/ui$'],
            ['\\/enums$', '\\.enum$'],
            ['\\/types$', '\\.type$'],
            ['\\/constants$', '\\.const$'],
            ['\\/configs$', '\\.config$'],
            ['\\/schemas$', '\\.schema$'],
            ['\\/mocks$', '\\.mock$'],
            ['\\/data$', '\\.data$'],
            ['\\/utils$', '\\.util$'],
            ['\\/services$', '\\.service$'],
            ['\\/stores$', '\\.store$'],
            ['\\/atoms$', '\\.atom$'],
            ['\\/contexts$', '\\.context$'],
            ['\\/providers$', '\\.provider$'],
            ['\\/hooks$', '^\\.\\.*/use[A-Z].*$', '^\\.*/use[A-Z].*$'],
            ['^\\.\\.(?!/?$)', '^\\.(?!/?$)'],
            ['^'],
            ['^.+\\.json$'],
            ['^.+\\.svg$'],
            ['^.+\\.module\\.s?css$'],
            ['^.+\\.s?css$'],
            ['^\\u0000']
          ]
        }
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: directoryName
      }
    },
    plugins: { tsdoc },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      'tsdoc/syntax': 'warn'
    }
  }
]

export default eslintConfig
