class local {
  public static get(key: string): string | null {
    let storageItem = null;
    if (typeof window !== "undefined") {
      storageItem = localStorage.getItem(key);
    }
    return storageItem;
  }

  public static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public static remove(key: string): void {
    localStorage.remove(key);
  }
}

export default local;
