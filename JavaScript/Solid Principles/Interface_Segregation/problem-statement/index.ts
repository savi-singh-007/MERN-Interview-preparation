interface IPrintMethods {
  openDocument(): void;
  closeDocument(): void;
  deleteDocument(): void;
  scanDocument(): void;
}

class BasicPrinterWithoutScanner implements IPrintMethods {
  openDocument(): void {
    console.log("Opening a document");
  }
  closeDocument(): void {
    console.log("Closing a document");
  }
  deleteDocument(): void {
    console.log("Deleting a Document");
  }
  scanDocument(): void {
    // Do not need this method but neet to include it due to interface contract
  }
}
