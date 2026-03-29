/** Default Sui GraphQL (Mysten hosted). Override with `VITE_SUI_GRAPHQL_URL`. */
export const DEFAULT_SUI_GRAPHQL_URL =
  'https://sui-testnet.mystenlabs.com/graphql';

export function getSuiGraphqlUrl(): string {
  const fromEnv = import.meta.env.VITE_SUI_GRAPHQL_URL;
  return typeof fromEnv === 'string' && fromEnv.length > 0
    ? fromEnv
    : DEFAULT_SUI_GRAPHQL_URL;
}
