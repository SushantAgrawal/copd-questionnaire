"use strict";
var messages = {
    genInfo: 'Kistler Vineyards customer order site',
    errUrlNotFound: 'Url not found',
    errDevError: 'Development error',
    errProdError: 'Production error',
    errUnknown: 'Unknown error',
    errInternalServerError: 'Internal server error',
    errDotNetConnect: 'Error occured while connecting to .Net module',
    errInitFailed: 'Initialization of connection string for Dot Net Connector failed',
    errAuthNoUserName: 'User name is not provided in authentication string',
    errAuthIllegalFormat: 'Illegal format of authentication string',
    errNoHash: 'No hash of password is provided in authentication string',
    errNoAuth: 'No authentication string provided in body of post request',
    errUnAuthourized: 'Unauthorized user',
    errUnAuthenticated: 'Unauthenticated user',
    errAuthStringNotFound: 'auth string not found in body of POST request',
    errInvalidToken: 'Invalid token provided',
    errTokenNotFound: 'Authentication token not found with http request',
    errInvalidEmail: 'Invalid email address',
    errSendingMail:'An error occured while sending mail. You can ask administrator to configure mail in server',
    messAuthFailed: "Authentication failed for the user",
    messAuthStringFormat: 'Legal format of authentication string is base64(username:hash of password)',
    messInitialized: 'Initialization is successfully done',
    messErrorUnknown:'An unknown error orrured at server. The intended activity was not performed.',
    messExpressServerRunning: 'Nine express server running on port ',
    messUrlNotFoundDetails: 'The url which you have given is incorrect',
    messAuthStringinPostRequest: "For authentication to succeed you must provide authentication / auth string. Provide \"auth\" as key and base64(username:MD5Hash( password)) as value in body of POST request. auth string must be x-www-form-urlencoded and not as form-data",
    messInvalidToken: "A token must be provided within body / query string / x-access-token header. Format of providing token is for query string token=value of token, for body the key is token and value is value of token, for x-access-token just put the vale of token in custom header x-access-token. Value of \n    token can be obtained from response body after successful authentication. Token can be stored at client and should be provided with every request to API",
    messTokenNotFound: "Authentication token is not present in the http request. A token must be provided within body / query string / x-access-token header. The format of providing token is token=value of token. Value of token can be obtained from response body after successful authentication. Token can be stored at client and should be provided with every request to API"
};
module.exports = messages;
