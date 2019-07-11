export interface ChatMessage {
    message: string;
    sender: string;
    sender_id: number;
    sender_img: string;
    date: string;
    channel: string;
    self?: boolean;
}
