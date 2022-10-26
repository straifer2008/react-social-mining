const TOKEN = 'token';

export function setItemToStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function getItemFromStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function removeItemFromStorage(key: string): void {
  localStorage.removeItem(key);
}

export function setTokenToStorage(token: string): void {
  setItemToStorage(TOKEN, token);
}

export function getTokenFromStorage(): string | null {
  return getItemFromStorage(TOKEN);
}

export function removeTokenFromStorage(): void {
  removeItemFromStorage(TOKEN);
}
