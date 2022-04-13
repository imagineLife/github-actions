/*
  config for the semantic-release 
  https://www.npmjs.com/package/semantic-release
*/ 
module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/imagineLife/github-actions",
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}