/**
 * Convert a base64 string to a binary Blob.
 * @param {string} base64String - The base64 string to convert.
 * @returns {Blob} - The binary Blob representing the image.
 */
const base64ToBinary = (base64String) => {
    // Split the base64 string to remove the data URL scheme part
    const [header, data] = base64String.split(',');
    // Decode the base64 string
    const binaryString = window.atob(data);
    // Create an array buffer
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    // Create a view to the array buffer
    const uint8Array = new Uint8Array(arrayBuffer);
    
    // Convert binary string to binary data
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    // Return as Blob (you might need to specify MIME type, e.g., 'image/png')
    return new Blob([arrayBuffer], { type: 'image/png' });
};

export default base64ToBinary;