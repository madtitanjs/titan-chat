export interface ChatMessage {
    message: string;
    sender: string;
    sender_id: string;
    sender_img: string;
    date: string;
    channel: string;
    self?: boolean;
}
