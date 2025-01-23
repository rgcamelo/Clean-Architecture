class InvalidCreatedAtError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidCreatedAtError';
    }
}