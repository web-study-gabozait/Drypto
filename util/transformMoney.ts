class transformMoney {
  public korea(money: number): string {
    return (money * 1000).toLocaleString("ko-KR");
  }
}

export default new transformMoney();
