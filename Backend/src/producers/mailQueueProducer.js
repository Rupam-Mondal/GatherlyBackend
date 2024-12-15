import mailQueues from "../queues/mailQueues.js";
import '../consumers/mailConsumer.js';


export async function addEmailToQueue(emailData){
    try {
        await mailQueues.add(emailData);
        console.log("Email added to queue");
    } catch (error) {
        console.log("Mail error" , error);
    }
}