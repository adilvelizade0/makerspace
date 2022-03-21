module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43d3ed5a8274ecf46d4e57bcc633717b'),
  },
});
