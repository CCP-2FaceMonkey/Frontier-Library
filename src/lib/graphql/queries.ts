/** Root introspection-friendly query for connectivity checks. */
export const CHAIN_IDENTIFIER_QUERY = /* GraphQL */ `
  query ChainIdentifier {
    chainIdentifier
  }
`;

export interface ChainIdentifierResponse {
  chainIdentifier: string;
}
