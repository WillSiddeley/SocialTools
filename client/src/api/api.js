import WebConstants from '../constants/WebConstants';

export default class api {

    static post = async function(url, formData) {
        // Create payload information for POST request
        const response = await fetch(`${WebConstants.websiteAPI}${url}`, {
            method: 'POST',
            body: formData
        });
        // Return the reponse back to the client
        return await response.json();
    }

}
