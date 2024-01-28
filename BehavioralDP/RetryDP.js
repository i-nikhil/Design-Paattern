/**
 * Allows to handle temporary failures in an application whenever
 * making external network calls to API, database or other resources.
 * Can be done in three ways:
 * I - Don't retry (Eg: Authentication failures, etc.)
 * II - Immediate retry (Eg: Unusual network failures, etc.)
 * III - Retry after delay (Eg: Server is busy, etc.)
 */

async function retryOperation()
{
    let currentTry = 0;

    while(true)
    {
        try {
            externalServiceCall();
            console.log("Succeeded!");
            break;
        } catch (error) {
            currentTry++;
            console.log(`Failed attempt ${currentTry}`);

            if(currentTry >= 10)
            {
                console.log("Retry maximum reached. Exiting");
                break;
            }
        }
        await sleep(3000);
    }  
}     

function externalServiceCall()
{
    console.log("Calling external service...");
    const shouldPass = Math.random() < 0.4;
    if(shouldPass)
        return true;
    else
        throw "Failure";
}

async function sleep(ms)
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms);
    });
}

retryOperation();