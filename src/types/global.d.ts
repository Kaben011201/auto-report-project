interface PaginateParameters {
  page?: number | string;
  limit?: number | string;
}
interface CurrencyFormatOptions {
  locale?: string; // default: 'id-ID'
  currency?: string; // default: 'IDR'
  minimumFractionDigits?: number;
  compact?: boolean;
}

interface JwtPayloadInterface {
  userId: number;
  email: string;
  name: string | null;
  role?: "USER" | "ADMIN";
}
