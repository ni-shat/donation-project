// @/services/api.js
export async function createDonationData(data) {
  try {
      const response = await fetch('https://charity-project-server.vercel.app/donation-details', { // Change this URL to match your server endpoint
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });
      //console.log('response from server',response)

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
  } catch (error) {
      console.error('Error in createDonationData:', error);
      throw error;
  }
}
