import {
    FloTorchLLM,
    type FloTorchMessage,
    FloTorchBaseUrls
} from "@flotorch/sdk";


const model = 'flotorch/default'
const apiKey = "sk_kEKzE6jrtujJaco4MsS67U8H3D8UGvJQVQtJ6EbVASI=_OGQyODIyOWMtMTcxNC00NDM3LThlNWItNGFkZWU3MWRhMTRm_ZTFhOGNhNTgtNWY2ZS00ZTYwLWE3YzMtZTdmOTEyMTBjYzk3";
const baseUrl = FloTorchBaseUrls.DEFAULT;
const client = new FloTorchLLM(model, apiKey, baseUrl);

const message: FloTorchMessage = {
    role: 'user',
    content: 'What is the capital of Norway?'
}
const messages: FloTorchMessage[] = [message]

try {
    const output = await client.invoke(messages);
    console.log("Chat response:", output);
} catch (err) {
    console.error("Failed to get chat response:", err);
}