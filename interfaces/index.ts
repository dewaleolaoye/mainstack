export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
}

export interface IWallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

interface Metadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export interface ITransactions {
  amount: number;
  metadata: Metadata;
  payment_reference: string;
  status: 'successful' | 'pending';
  type: "withdrawal" | "deposit";
  date: string;
}


