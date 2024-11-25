module.exports = ({ env }) => ({
  auth: {
    secret: env('JWT_SECRET'), // Lit le JWT_SECRET depuis le fichier .env
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'), // Lit le API_TOKEN_SALT depuis le fichier .env
  },
});
