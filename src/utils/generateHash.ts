import crypto from 'crypto';

function generateHash() {
  return crypto.createHash('md5').digest('hex');
}

export default generateHash;
