export interface FirestoreDocument {
    name: string;
    fields: {
      sku: { stringValue: string };
      name: { stringValue: string };
      category: { stringValue: string };
      brand: { stringValue: string };
      price: { doubleValue?: number; integerValue?: string };
      stock: { integerValue: string };
      rating: { doubleValue?: number; integerValue?: string };
      image: { stringValue: string };
    };
  }
  