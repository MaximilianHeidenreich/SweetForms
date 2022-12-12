export interface IField {
    type: "text" | "textarea" | "number" | "checkbox" | "radio" | "file";
    value: unknown;
}
export interface ISubmission {
    // Meta
    id: string;             // UUID
    createdAt: number;      // Unix timestamp

    sender: string;         // Sender IP Hash -> Identify unique senders TODO: stateless rate limiting?
    formId: string;         // Unique identifier of the sending form
    read: boolean;          // Whether the submission has been read (opened)
    closed: boolean;        // Whether the submission has been processed (marked as done)

    // Data
    fields: Record<string, IField>;
}