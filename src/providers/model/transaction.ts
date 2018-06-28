export interface Transaction {
  cryptoTrigram: string,
  walletFrom: string;
  walletTo: string;
  amount: number;
  date: number;
  label: string;
  articleId?: any;
  currency:string;
  hash?: string;
}
