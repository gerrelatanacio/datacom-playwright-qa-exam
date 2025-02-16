export class SoftAssertions {
    private errors: string[] = [];
  
    async assert(callback: () => Promise<void>, errorMessage: string) {
      try {
        await callback();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error); // Narrow down 'unknown'
        this.errors.push(`${errorMessage}: ${message}`);
      }
    }
  
    finalize() {
      if (this.errors.length > 0) {
        throw new Error(`Soft Assertion Errors:\n${this.errors.join("\n")}`);
      }
    }
  }
  