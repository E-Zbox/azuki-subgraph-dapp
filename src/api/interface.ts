export interface ITokenApproval {
  id: string;
  approved: string;
  owner: string;
  tokenId: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
}

export interface ITokenTransfer {
  id?: string;
  from: string;
  to: string;
  tokenId: string;
  blockNumber?: string;
  blockTimestamp?: string;
  transactionHash?: string;
}

export interface IMetadataAttributes {
  trait_type: string;
  value: string;
}

export interface IMetadata {
  name: string;
  image: string;
  attributes: IMetadataAttributes[];
}

export interface ITokenTransferMetadata extends ITokenTransfer {
  name: string;
  image: string;
  attributes: IMetadataAttributes[];
  selected: boolean;
}

export interface IGenericResponse<T> {
  data: T;
  error: string;
  success: boolean;
}

export interface ITokenApprovalResponse
  extends IGenericResponse<ITokenApproval[]> {}

export interface ITokenTransferResponse
  extends IGenericResponse<ITokenTransfer[]> {}

export interface IMetadataResponse extends IGenericResponse<IMetadata> {}

export interface ITokenTransferMetadataResponse
  extends IGenericResponse<ITokenTransferMetadata> {}

export interface ITokenTransfersMetadataResponse
  extends IGenericResponse<ITokenTransferMetadata[]> {}
