import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  id: number;
  email: string;
  password: string;
  username: string;
}

export type EVENT_STATUS =
  | "pending"
  | "approved"
  | "rejected"
  | "completed"
  | "archived";
export type TRANSACTION_STATUS = "deposit" | "withdraw";

export type Event = {
  id: number;
  title: string;
  description: string;
  quota: number;
  start_date: Date;
  end_date: Date;
  status: EVENT_STATUS;
  rejection_reason?: string;
  result: boolean | null;
  created_by: number; // refers to user_id
};

export type Bet = {
  id: number;
  user_id: number;
  event_id: number;
  amount: number;
  created_at: Date;
  result: boolean;
};

export type Wallet = {
  id: number;
  user_id: number;
  balance: number;
  bank_name?: string;
  agency_number?: string;
  account_number?: string;
  pix_key?: string;
};

interface Transaction extends RowDataPacket {
  id: number;
  user_id: number;
  wallet_id: number;
  amount: number;
  transaction_type: TRANSACTION_STATUS;
  created_at: Date;
}

// For the scope of this project, we will not implement the add Admin feature. Admins will be added directly into the database.
export type Admin = {
  id: number;
  email: string;
  username: string;
  password: string;
};

declare global {
  namespace Express {
    interface Request {
      user: {
        id?: number;
        email?: string;
        username?: string;
      };
    }
  }
}
