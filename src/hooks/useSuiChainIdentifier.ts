import { useQuery } from '@tanstack/react-query';
import { fetchChainIdentifier } from '@/lib/graphql/client';
import { getSuiGraphqlUrl } from '@/lib/sui-graphql';

export function useSuiChainIdentifier() {
  const url = getSuiGraphqlUrl();
  return useQuery({
    queryKey: ['sui', 'graphql', 'chainIdentifier', url],
    queryFn: ({ signal }) => fetchChainIdentifier(signal),
  });
}
