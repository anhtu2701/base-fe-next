export const checkAllspace = (message: string) => ({
  validator(_: any, value: string) {
    if (value && value.trim() === "") {
      return Promise.reject(new Error(message));
    }
    return Promise.resolve();
  },
});
