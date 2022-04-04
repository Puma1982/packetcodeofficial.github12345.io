module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5297e9b726f784cbce2a80d7c5873d02'),
  },
});
