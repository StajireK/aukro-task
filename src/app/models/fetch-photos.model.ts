export interface FetchPhotosData {
  aggregations: Aggregation[];
  minPrice: number;
  maxPrice: number;
  categoryPath: CategoryPath[];
  resultReport: ResultReport;
  currentCategory: CurrentCategory;
  recommendedCategories: RecommendedCategory[];
  categoryBanners: any[];
  fallbackItems: any[];
  seoNiceUrlData: SeoNiceUrlData;
  titlePage: TitlePage;
  links: any[];
  content: FetchPhotosItemData[];
  page: Page;
}

export interface Aggregation {
  type: string;
  categoryParentId?: number;
  message: string;
  buckets: Bucket[];
  otherCount: number;
  attributeId?: number;
  attributePosition?: number;
}

export interface Bucket {
  value: any;
  seoUrl?: string;
  message: string;
  count: number;
  landingPage: boolean;
}

export interface CategoryPath {
  id: number;
  level: number;
  name: string;
  shortName: string;
  fullName: string;
  seoUrl: string;
  active: boolean;
}

export interface ResultReport {
  excludedCategory: boolean;
  state: string;
  version: string;
  sort: string;
  defaultSort: string;
  sortDirection: string;
  defaultSortDirection: string;
  defaultLayout: string;
  hideAds: boolean;
  provider: string;
}

export interface CurrentCategory {
  id: number;
  root: boolean;
  leaf: boolean;
  active: boolean;
  level: number;
  position: number;
  statusAdultContent: boolean;
  statusHpPromoRestriction: boolean;
  statusJuniorRestriction: boolean;
  statusOriginalArtContent: boolean;
  botRestriction: boolean;
  feedRestriction: boolean;
  hiddenForExpose: boolean;
  hreflang: boolean;
  name: string;
  shortName: string;
  seoUrl: string;
  metaDescription: string;
  description: string;
  title: string;
  categoryId: number;
}

export interface RecommendedCategory {
  id: number;
  position: number;
  statusAdultContent: boolean;
  statusHpPromoRestriction: boolean;
  statusJuniorRestriction: boolean;
  statusOriginalArtContent: boolean;
  botRestriction: boolean;
  feedRestriction: boolean;
  hiddenForExpose: boolean;
  hreflang: boolean;
  shortName: string;
  seoUrl: string;
  categoryId: number;
}

export interface SeoNiceUrlData {
  url: string;
  title: string;
  htmlTitle: string;
  filter: Filter;
}

export interface Filter {
  categorySeoUrl: string;
  landingPage: boolean;
  cashOnDelivery: boolean;
  paymentViaAukro: boolean;
  currency: string;
  visibleByCountry: boolean;
  excludeHiddenInSellerSoldList: boolean;
  excludeHiddenInSellerNotSoldList: boolean;
  splitGroupValue: string;
  splitGroupKey: string;
  noContent: boolean;
  hotAuction: boolean;
  searchRedirectDisabled: boolean;
  priceDeliveryIncluded: boolean;
  favouriteSearch: boolean;
  listingCode: string;
  requestFromBot: boolean;
  queryStringSearch: boolean;
}

export interface TitlePage {
  definition: Definition;
  components: Component[];
}

export interface Definition {
  categoryId: number;
  type: string;
}

export interface Component {
  type: string;
  visible: string[];
  moCode: string;
  content: Content;
}

export interface Content {
  categoryIds: number[];
  itemType: string;
  titleOfMore: string;
  YUSPenabled: boolean;
  minutesBeforeEnd: MinutesBeforeEnd;
  title: string;
  items: Item[];
  titleUrl: string;
}

export interface MinutesBeforeEnd {
  min: number;
  max: number;
}

export interface Item {
  endingTime: string;
  id: number;
  name: string;
  aukroPlus: boolean;
  paymentOnline: boolean;
  buyNowPrice: BuyNowPrice;
  biddingPrice: BiddingPrice;
  priceWithShipping: PriceWithShipping;
  freeShipping: boolean;
  images: Images;
  itemTypeEnumCode: string;
  seoUrl: string;
  paymentViaAukro: boolean;
  statusAdultContent: boolean;
}

export interface BuyNowPrice {
  amount: number;
  currency: string;
}

export interface BiddingPrice {
  amount: number;
  currency: string;
}

export interface PriceWithShipping {
  amount: number;
  currency: string;
}

export interface Images {
  lists: Lists;
}

export interface Lists {
  small: Small[];
  original: Original[];
  large: Large[];
  medium: Medium[];
}

export interface Small {
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Original {
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Large {
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface Medium {
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface FetchPhotosItemData {
  itemId: number;
  itemName: string;
  categoryPath: CategoryPath2[];
  startingTime: string;
  endingTime: string;
  buyNowActive: boolean;
  buyNowPrice: BuyNowPrice2;
  quantity: number;
  quantityType: string;
  attributes?: Attribute[];
  price: Price;
  priceWithShipping: PriceWithShipping2;
  titleImage: TitleImage;
  titleImageUrl: string;
  seoUrl: string;
  ppPriorityList: boolean;
  ppHighlight: boolean;
  ppBoldTitle: boolean;
  buyersCountRelative: number;
  itemState: string;
  sellerLogin: string;
  seller: Seller;
  userWatching: boolean;
  watchersCount: number;
  pepperLevel: number;
  personalPickup: boolean;
  location: string;
  postcode: string;
  aukroFreePriorityList: boolean;
  paymentViaAukro: boolean;
  locationRegion?: LocationRegion;
  adultContent: boolean;
  aukroPlus: boolean;
  paymentOnline: boolean;
  freeShipping: boolean;
  auction: boolean;
  links: any[];
}

export interface CategoryPath2 {
  id: number;
  name: string;
  seoUrl: string;
}

export interface BuyNowPrice2 {
  amount: number;
  currency: string;
}

export interface Attribute {
  attributeId: number;
  attributeName: string;
  attributeValue: string;
  attributeValueId?: number;
  position: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface PriceWithShipping2 {
  amount: number;
  currency: string;
}

export interface TitleImage {
  position: number;
  titleImage: boolean;
  url: string;
  thumbnailReady: boolean;
}

export interface Seller {
  userId: number;
  showName: string;
  companyAccount: boolean;
  accountActivated: boolean;
}

export interface LocationRegion {
  cityName: string;
  seoUrl: string;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
