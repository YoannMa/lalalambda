'use strict';

const Hapi = require('@hapi/hapi');
const Lalalambda = require('../../..');

exports.deployment = async () => {

    const server = Hapi.server();

    await server.register(Lalalambda);

    server.lambda({
        id: 'info-lambda',
        handler: () => ({ success: 'infoed' })
    });

    return server;
};
