export const getEnv = (key: string, defaultValue = '') => {
  const value = process.env[key];
  if (!value) {
    return defaultValue;
  }
  return value;
};
