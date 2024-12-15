import transporter from "../config/mailconfig.js";
import mailQueues from "../queues/mailQueues.js";

mailQueues.process(async (job) => {
    const emailData = job.data;
    console.log("Processing email");

    try {
        const response = await transporter.sendMail(emailData);
        console.log("email sent" , response);
    } catch (error) {
        console.log("some error" , error);
    }
});