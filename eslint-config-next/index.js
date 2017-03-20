module.exports = {
    extends: [
        './rules/base',
        './rules/import',
        './rules/babel',
        './rules/react'
    ].map(require.resolve),
    plugins: [
        "@ali/eslint-plugin-next-md"
    ]
};
