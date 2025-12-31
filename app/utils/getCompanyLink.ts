/**
 * Returns the website URL for a given company name
 * @param companyName - The name of the company
 * @returns The company's website URL or null if not found
 */
export const getCompanyLink = (companyName: string): string | null => {
  const companyLinks: Record<string, string> = {
    "Combattix": "https://combattix.com",
    "Polis": "https://polis.co.uk",
    // Add more companies as needed
  };

  return companyLinks[companyName] || null;
};
