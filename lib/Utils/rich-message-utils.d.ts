export declare const tokenizeCode: (code: string, language?: string) => any[];
export declare const toUnified: (submessages: any[]) => any;
export declare const prepareRichResponseMessage: (content: any) => any;
export declare const botMetadataSignature: () => Uint8Array;
export declare const botMetadataCertificate: (length?: number) => Uint8Array;
export declare const wrapToBotForwardedMessage: (richResponseMessage: any) => any;
