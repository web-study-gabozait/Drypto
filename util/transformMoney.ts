class transformMoney {
  public korea(money: number): string {
    return money.toLocaleString("ko-KR");
  }
}

export default new transformMoney();
