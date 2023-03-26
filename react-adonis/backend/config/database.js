const Env = use('Env');

module.exports = {
  connection: 'mongodb',
  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
    connection: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
