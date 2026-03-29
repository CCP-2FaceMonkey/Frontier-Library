import { request } from 'graphql-request';
import { getSuiGraphqlUrl } from '../sui-graphql';
import type { ChainIdentifierResponse } from './queries';
import { CHAIN_IDENTIFIER_QUERY } from './queries';

export async function fetchChainIdentifier(
  signal?: AbortSignal,
): Promise<string> {
  const url = getSuiGraphqlUrl();
  const data = await request<ChainIdentifierResponse>({
    url,
    document: CHAIN_IDENTIFIER_QUERY,
    ...(signal ? { signal } : {}),
  });
  return data.chainIdentifier;
}
