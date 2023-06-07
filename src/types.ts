interface IZones {
  items: IZone[];
  _links: {
    first: ILink;
    last: ILink;
    self: ILink;
  };
  _meta: {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
  };
}

interface IZone {
  banners: IZoneBanner[];
  created_at: Date;
  id: number;
  name: string;
  slug: string;
  updated_at: Date;
}

interface IZoneBanner {
  banner: IBanner;
  display_time: number;
  sort: number | null;
}

interface IBanner {
  filename: string;
  id: number;
  name: string;
  type: "image" | "video";
  _links: {
    download: ILink;
  };
}

interface ILink {
  href: string;
}
