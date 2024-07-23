const func = () => {
    try {
        console.log("starting the try block");

        // unexisting variable.
        hello;

        console.log('finishing the try block');
    } catch (error) {
        console.log('starting the catch block');
        
        if (error) {
            console.log("Pardon verifie que toutes les variables sont declarees avant l'utilisation.");
            
            console.log(error.name);
        }
        // console.log(e);
    } finally {
        console.log("Function is done");
    }
}

func();

