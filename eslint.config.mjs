import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends({
        extends: ["next/core-web-vitals", "next/typescript"],
        // Plugins in legacy format must be an array of plugin names.
        plugins: ['react-hooks'],
    }),
    {
        ignores: ['.next/**', 'node_modules/**', 'prisma/**'],
    },
];

export default eslintConfig;
