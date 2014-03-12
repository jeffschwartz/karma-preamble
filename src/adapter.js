/**
 * A very simple reporter that relies on Preamble's pubsub feature, which Preamble 
 * uses for broadcasting important events that occur during the testing life-cycle.
 */
var createStartFn = function(tc, preambleEnvPassedIn) {

    function surroundWith(wrapChar, string){
        return wrapChar + string + wrapChar;
    }

    function surroundWithDoubleQoutes(string){
        return surroundWith('"', string);
    }

    return function(){

        //Get Preamble's pubsub...
        var runner = preambleEnvPassedIn || window.Preamble.__ext__.pubsub;

        //and use it to subscribe to broadcasts with a topic of "status update".
        runner.subscribe('status update', function(topic, data){

            //Disambiguate what we need from the data payload.
            var status = data.status,
                params = data.hasOwnProperty(data.status) ? data[status] : void 0;

            //Log receipt of the broadcast.
            console.log('topic:', surroundWithDoubleQoutes(topic), 'status:', surroundWithDoubleQoutes(status), 'data:', data[params]);

            //These are the status updates we are interested in.
            switch(status){

                case 'error':
                    //An error (either a global winodw error or one thrown 
                    //by Preamble dureing the test life-cycle) has occurred.
                    break;

                case 'loading':
                    //Queues are being built.
                    break;

                case 'coverage':
                    //Total groups (specs) and tests are now know.
                    break;

                case 'totalAssertionsToBeRun':
                    //Total assertions to be run is now known.
                    break;

                case 'resultsSummary':
                    //Testing has completed for all qroups and tests.
                    //Report the results.
                    break;

            }

        });

    };

};
