export enum countryToFlag {
  chile = "cl",
  perú = "pe",
  brasil = "br",
  colombia = "co",
  méxico = "mx",
  argentina = "ar",
}

export enum agentEnum {
  deposit = "Deposito",
  transaction = "Transacción",
}

export enum stateEnum {
  cancel = "Cancelado",
  confirmed = "Confirmado",
  process = "Proceso",
}

export enum stateEnumtoColor {
  cancel = "badge-error",
  confirmed = "badge-success",
  process = "badge-info",
}

export type ListIterfaces = {
  id: number;
  full_name: string;
  date: Date;
  amount: number;
  country: string;
  agent: agentEnum;
  state: stateEnum;
};
