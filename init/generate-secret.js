import crypto from 'crypto';
import fs from 'node:fs';
import path from 'path'

// 生成一个安全的随机密钥
const generateSymmetricKey = () => {
  return crypto.randomBytes(32).toString('hex'); // 这将生成一个256位的随机密钥
};

const symmetricKey = generateSymmetricKey();
fs.writeFileSync(path.resolve(process.cwd(), '../frame-server_secret-key.txt'), symmetricKey)