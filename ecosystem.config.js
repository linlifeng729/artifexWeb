module.exports = {
  apps: [
    {
      name: 'artifexWeb',
      script: './server/index.mjs',
      exec_mode: 'cluster',
      instances: '2',
      env: {
        NODE_ENV: 'production',
        PORT: 12590,
      },
    }
  ]
}
