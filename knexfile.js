// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'gSecrets'
    }
  },

  production: {
    client: 'pg',
    connections: {
      database: process.env.DATABASE_URL
    }
  }

};
