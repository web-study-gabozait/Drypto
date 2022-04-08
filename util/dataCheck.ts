class DataCheck {
  public undefinedCheck<T>(data: T): boolean {
    if (data === undefined) {
      return true;
    }
    return false;
  }
}

export default new DataCheck();
