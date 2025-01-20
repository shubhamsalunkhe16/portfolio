const calculateReadingTime = (content) => {
  // Split content into words and filter out empty strings
  const wordCount = content.split(/\s+/).filter(Boolean).length;

  // Average reading speed (words per minute)
  const wordsPerMinute = 200;

  // Calculate reading time in minutes
  const timeInMinutes = Math.ceil(wordCount / wordsPerMinute);

  return timeInMinutes;
};

export default calculateReadingTime;
