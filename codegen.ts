import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://spacex-production.up.railway.app/',
    documents: ['src/**/*.{ts,vue}'],
    generates: {
        './src/apollo/types/graphql.ts': {
            plugins: ['typescript', 'typescript-operations'],
        },
    },
    ignoreNoDocuments: true,
};

export default config;