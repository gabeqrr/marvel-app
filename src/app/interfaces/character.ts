export interface Character {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number; // 0
    limit: number; // 20
    total: number; // 1559
    count: number; // 20
    results: [
      {
        id: number;
        name: string;
        description: string;
        modified: Date;
        resourceURI: string;
        urls: [
          {
            type: string;
            url: string;
          }
        ];
        thumbnail: {
          path: string;
          extension: string;
        };
        comics: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        stories: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
              type: string;
            }
          ];
        };
        events: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        series: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
      }
    ];
  };
  etag: string;
}
