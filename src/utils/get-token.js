export default function getToken (ctx, opts) {
  if (!ctx.header || !ctx.header['x-access-token']) {
    return;
  }

  const parts = ctx.header['x-access-token'].trim().split(' ');

  if (parts.length === 2) {
    const scheme = parts[0];
    const credentials = parts[1];

    if (/^Bearer$/i.test(scheme)) {
      return credentials;
    }
  }
  if (!opts.passthrough) {
    ctx.throw(401, 'Bad Authorization header format. Format is "X-Access-Token: Bearer <token>"');
  }
};