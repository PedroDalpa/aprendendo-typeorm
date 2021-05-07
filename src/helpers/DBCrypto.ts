import { EncryptionTransformer } from 'typeorm-encrypted';

const MyDBCrypto = new EncryptionTransformer({
  key: process.env.DB_KEY,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.DB_IV,
});
export { MyDBCrypto };
