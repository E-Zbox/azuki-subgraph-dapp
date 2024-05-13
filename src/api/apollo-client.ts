import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// interfaces
import {
  IMetadataResponse,
  ITokenApprovalResponse,
  ITokenTransfersMetadataResponse,
  ITokenTransferResponse,
  ITokenTransferMetadataResponse,
} from "./interface";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/50548/azuki-nft-v1/version/latest",
});

export const getLatestTransfers = () => {};

export const getTokens = async (
  first: number,
  tokenId_gte: number
): Promise<ITokenTransferResponse> => {
  let response: ITokenTransferResponse = {
    data: [],
    error: "",
    success: false,
  };
  try {
    const { data } = await client.query({
      query: gql`
            query Transfers {
              transfers(
                where: {
                  blockTimestamp_gte: 1641961048
                  from: "0x0000000000000000000000000000000000000000"
                  # tokenId_gte: 
                  tokenId_gte: ${tokenId_gte}
                }
                first: ${first}
                orderBy: tokenId
                orderDirection: asc
              ) {
                # id
                from
                to
                tokenId
                # blockNumber
                # blockTimestamp
                # transactionHash
              }
            }
          `,
    });

    response = {
      data: data.transfers,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getMetadata = async (tokenId: number) => {
  let response: IMetadataResponse = {
    data: {
      attributes: [],
      image: "",
      name: "",
    },
    error: "",
    success: false,
  };

  try {
    const result = await fetch(
      `https://bafybeifhofputngb7k3zqpl5otnv4utpvse66sbzutxsg6bkozks6ytt7m.ipfs.dweb.link/${tokenId}`,
      {
        method: "GET",
      }
    );

    const data = await result.json();

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenMetadata = async (
  tokenId: number
): Promise<ITokenTransferMetadataResponse> => {
  let response: ITokenTransferMetadataResponse = {
    data: {
      attributes: [],
      from: "",
      image: "",
      name: "",
      selected: false,
      to: "",
      tokenId: "",
    },
    error: "",
    success: false,
  };

  try {
    const { data } = await client.query({
      query: gql`
            query Transfers {
              transfers(
                where: {
                  blockTimestamp_gte: 1641961048
                  from: "0x0000000000000000000000000000000000000000"
                  tokenId: ${tokenId}
                }
                orderBy: tokenId
                orderDirection: asc
              ) {
                # id
                from
                to
                tokenId
                # blockNumber
                # blockTimestamp
                # transactionHash
              }
            }
          `,
    });

    response = {
      data: {
        ...response.data,
        ...data.transfers[0],
      },
      error: "",
      success: true,
    };

    const metadataResponse = await getMetadata(tokenId);

    if (metadataResponse.success) {
      let { attributes, name } = metadataResponse.data;
      response.data = {
        ...response.data,
        ...data.transfers[0],
        name,
        attributes,
        image: `${IMAGE_BASE_URL}/${tokenId}.png`,
      };
    }
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokensMetadata = async (
  first: number,
  tokenId_gte: number
): Promise<ITokenTransfersMetadataResponse> => {
  let response: ITokenTransfersMetadataResponse = {
    data: [],
    error: "",
    success: false,
  };
  try {
    const allTokensResponse = await getTokens(first, tokenId_gte);

    if (!allTokensResponse.success) {
      throw allTokensResponse.error;
    }

    const data = await Promise.all(
      allTokensResponse.data.map(async ({ from, to, tokenId }) => {
        let metadataResponse = await getMetadata(Number(tokenId));

        if (!metadataResponse.success) {
          return {
            attributes: [],
            from,
            image: "",
            name: "",
            to,
            tokenId,
            selected: false,
          };
        }

        let { attributes, name } = metadataResponse.data;

        return {
          attributes,
          from,
          image: `${IMAGE_BASE_URL}/${tokenId}.png`,
          name,
          to,
          tokenId,
          selected: false,
        };
      })
    );

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenApprovals = async (
  tokenId: string,
  orderDirection: "asc" | "desc"
): Promise<ITokenApprovalResponse> => {
  let response: ITokenApprovalResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    const { data } = await client.query({
      query: gql`
        query Approvals {
          approvals(
            where: { tokenId: 0 }
            orderBy: blockTimestamp
            orderDirection: desc
          ) {
            id
            approved
            owner
            tokenId
            blockNumber
            blockTimestamp
            transactionHash
          }
        }
      `,
    });

    response = {
      data: data.approvals,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenTransfers = async (
  tokenId: string,
  orderDirection: "asc" | "desc"
): Promise<ITokenTransferResponse> => {
  let response: ITokenTransferResponse = {
    data: [],
    error: "",
    success: false,
  };
  try {
    const { data } = await client.query({
      query: gql`
        query Transfers {
          transfers(
            where: { tokenId: ${tokenId} }
            orderBy: blockTimestamp
            orderDirection: ${orderDirection}
          ) {
            id
            from
            to
            tokenId
            blockNumber
            blockTimestamp
            transactionHash
          }
        }
      `,
    });

    response = {
      data: data.transfers,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

// https://bafybeies3odi24wyk3e22rnautr57tiuk3b56nxrd53fxgtvr37abmz5j4.ipfs.dweb.link/:tokenId.png
export const IMAGE_BASE_URL =
  "https://bafybeies3odi24wyk3e22rnautr57tiuk3b56nxrd53fxgtvr37abmz5j4.ipfs.dweb.link";
