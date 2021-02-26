export type BumpupData = {
  version?: string;
  type?: string;
  newVersion?: string;
  [key: string]: any;
};

export type BumpupOptions = {
  dry?: boolean;
  pre?: boolean;
  preid?: string;
  log?: "critical" | "error" | "warning" | "info" | "debug";
  file?: string;
  [key: string]: any;
};

export type BumpupFunction = (
  options: BumpupOptions,
) => (data: BumpupData) => BumpupData | Promise<BumpupData>;

export type BumpupPlugin = BumpupFunction | [BumpupFunction, BumpupOptions];

export type BumpupConfig = {
  version: string;
  plugins: BumpupPlugin[];
};
