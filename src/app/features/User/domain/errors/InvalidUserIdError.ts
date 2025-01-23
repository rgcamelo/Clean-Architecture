class InvalidUserIdError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidUserIdError'; // Nombre específico del error
    }
}