export function addInvestmentTd(investment) {
  return {
    type: '@td/ADD_INVESTMENT',
    investment,
  };
}

export function addInvestmentBt(investment) {
  return {
    type: '@bt/ADD_INVESTMENT',
    investment,
  };
}
