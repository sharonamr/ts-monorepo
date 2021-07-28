interface User {
  name: string;
}

export const getUser = (): User => {
  return {
    name: 'Sharon',
  };
};