export interface IExtractedData {
    success: Boolean;
    extracted?: {
        size?: string,
        rovers?: Array<string>,
        commands?: Array<string>
    }
}