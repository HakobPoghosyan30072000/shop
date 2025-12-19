
'use client'
export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },

  set<T>(key: string, value: T) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }
};

export const clientCookies = {
  set(name: string, value: string, days = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  },

  get(name: string) {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`))
      ?.split('=')[1];
  },

  remove(name: string) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  }
};
