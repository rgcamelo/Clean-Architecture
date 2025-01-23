class InvalidUserAgeError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidUserAgeError';
    }
}