import crypto from 'crypto';

function generateHash() {
  return crypto.randomBytes(20).toString('hex');
}

export default generateHash;
