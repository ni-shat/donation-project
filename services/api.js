export async function createDonationData(data) {
  try {
      const response = await fetch('https://charity-project-server.vercel.app/donation-details', { 

          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

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
