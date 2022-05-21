import AWS, { AWSError } from 'aws-sdk'

AWS.config.update({
    region: 'eu-central-1',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});


interface params {
    stateMachineArn: any;
    input: string;
}



const triggerStateMachine = (params: params) => {
    const stepFunctions = new AWS.StepFunctions();


    stepFunctions.startExecution(params, (err: AWSError, data: any) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(data);
        }
    }
    );
}



export default triggerStateMachine;




