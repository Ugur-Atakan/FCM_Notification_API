import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const jwtConfig = {
  global: true,
  secret: 'sosecretkeyandwhoami',
  signOptions: {
    expiresIn: '1h', // Tokenin geçerlilik süresi burada ayarlanır (örneğin, 1 saat)
  },
};
