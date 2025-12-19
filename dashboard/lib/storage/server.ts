import { cookies } from 'next/headers';

export const serverCookies = {
  async get(name: string) {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value;
  },

  async set(name: string, value: string) {
    const cookieStore = await cookies();
    cookieStore.set(name, value);
  },

  async remove(name: string) {
    const cookieStore = await cookies();
    cookieStore.delete(name);
  }
};
