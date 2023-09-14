const regexPatterns = [
    {
      id: 1,
      name: 'Pattern 1',
      pattern: '^[A-Z][a-z]*$',
      requirements: 'Starts with an uppercase letter, followed by lowercase letters.',
    },
    {
      id: 2,
      name: 'Pattern 2',
      pattern: '^[A-Za-z]+$',
      requirements: 'Consists of one or more letters, regardless of case.',
    },
    // Add more patterns and their requirements
  ];
  
  export const getPatterns = () => regexPatterns;
  
  export const filterPatterns = (query) => {
    // Simulate filtering based on requirements (case-insensitive)
    return regexPatterns.filter((pattern) =>
      pattern.requirements.toLowerCase().includes(query.toLowerCase())
    );
  };
  