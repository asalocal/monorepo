import crypto from 'crypto';

function generateHash() {
  return crypto
    .createHash('md5')
    .update(Math.random().toString())
    .digest('hex');
}

export default generateHash;
