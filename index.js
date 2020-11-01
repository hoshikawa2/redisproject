let
    redis     = require('redis'),
    /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
    client    = redis.createClient({
        port      : 6379,               // replace with your port
        host      : '150.136.19.68',        // replace with your hostanme or IP address
        password  : 'P@ssw0rd',    // replace with your password
    });

    client.on('connect', function() {
        console.log('connected');
    });

    client.set('framework', 'AngularJS');

    client.exists('framework', function(err, reply) {
        if (reply === 1) {
            console.log('exists');
        } else {
            console.log('doesn\'t exist');
        }
    });