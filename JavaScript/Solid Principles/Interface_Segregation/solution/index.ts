interface IOpenDocuments {
  openDocument(): void;
}
interface ICloseDocument {
  closeDocument(): void;
}

interface IDeleteInterface {
  deleteDocument(): void;
}

interface IScanDocument {
  scanDocument(): void;
}

class BasicPrinterWithoutScanner2 implements IOpenDocuments, ICloseDocument, IDeleteInterface {
  openDocument(): void {
    console.log("Opening a document");
  }
  closeDocument(): void {
    console.log("Closing a document");
  }
  deleteDocument(): void {
    console.log("Deleting a Document");
  }
}
