// TODO: Change this IP address when moving out of development
// Set default IP address to local server
var defaultIp = "192.168.2.222"

console.log(`[INFO]: Sending backend requests to http://${defaultIp}:3001`)

export default class WebConstants {

    static websiteURL = `http://${defaultIp}:3000`;
    static websiteAPI = `http://${defaultIp}:3001`;

}