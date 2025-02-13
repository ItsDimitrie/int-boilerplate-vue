/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Auction {
  /** @format uuid */
  id?: string;
  status?: AuctionStatus;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "0A1234567"
   */
  auction_number?: string;
  /** @format date */
  auction_at: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John Doe"
   */
  contact_name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "+3112345678"
   */
  contact_phone?: string;
  /**
   * @format email
   * @minLength 1
   * @maxLength 255
   * @example "foo@bar.net"
   */
  contact_email?: string;
  contract_agreement: AuctionContractAgreementType;
  /** @format date-time */
  view_day_at: string;
  /** @format date-time */
  closing_at: string;
  /** @format date-time */
  collected_at: string;
  /** @format date-time */
  csu_at: string;
  /** @format date-time */
  sent_at: string;
}

export interface AuctionItemProductRequest {
  /** The UUID of the selected products. */
  products: string[];
}

export interface AuctionItemRequest {
  /** @min 1 */
  quantity?: number;
  /** @min 1 */
  lot_number?: number;
  assigned_explicitly?: boolean;
  starting_bid?: AuctionItemStartingBid;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  minimum_amount?: number | null;
  /**
   * The UUID of the selected product.
   * @format uuid
   */
  product_id?: string;
}

export interface AuctionItemResponse {
  /** @format uuid */
  id?: string;
  auction?: Auction;
  product?: ProductResponse;
  buyer?: BuyerResponse;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Wasmachine"
   */
  name: string;
  /** @min 1 */
  lot_number: number;
  /** @min 1 */
  quantity: number;
  assigned_explicitly: boolean;
  /** @default false */
  sold: boolean;
  status: AuctionItemStatus;
  /** The auction item's bid amount. */
  bid_amount: Money;
  /** The auction item's starting bid. */
  starting_bid: Money;
  /** The auction item's minimum amount. */
  minimum_amount: Money;
}

export enum AuctionContractAgreementType {
  Intern = "intern",
  Extern = "extern",
}

export enum AuctionItemStartingBid {
  Value0 = 0,
  Value10 = 10,
  Value50 = 50,
  Value100 = 100,
  Value250 = 250,
  Value500 = 500,
  Value1000 = 1000,
  Value2500 = 2500,
  Value5000 = 5000,
  Value7500 = 7500,
  Value10000 = 10000,
  Value25000 = 25000,
  Value50000 = 50000,
  Value75000 = 75000,
  Value100000 = 100000,
}

export enum AuctionItemStatus {
  NotCollected = "not-collected",
  Collected = "collected",
  NotSold = "not-sold",
}

export enum AuctionStatus {
  Created = "created",
  InAtlas = "in-atlas",
  InProgress = "in-progress",
  Completed = "completed",
}

/** Current Buyer Address */
export interface BuyerItemRequest {
  /**
   * The UUID of the selected buyer
   * @format uuid
   */
  buyer_id: string;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  price: number;
  status: BuyerItemStatus;
  /**
   * @min 1
   * @example 1
   */
  quantity: number;
}

export enum BuyerItemStatus {
  Extradited = "extradited",
  RentedOut = "rented-out",
  Service = "service",
  Sold = "sold",
}

/** Current Buyer Address */
export interface BuyerAddressRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  street: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  house_number: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  house_number_addition?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1234 AA"
   */
  postal_code: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  city: string;
  /**
   * @minLength 2
   * @maxLength 2
   * @example "NL"
   */
  country: string;
}

/** Current Buyer Address */
export interface BuyerAddressResponse {
  /**
   * @minLength 1
   * @maxLength 255
   */
  street: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  house_number: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  house_number_addition?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1234 AA"
   */
  postal_code: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  city: string;
  /**
   * @minLength 2
   * @maxLength 2
   * @example "NL"
   */
  country: string;
}

/** Current Buyer Item */
export interface BuyerItemResponse {
  /** @format uuid */
  id?: string;
  auctionItem?: AuctionItemResponse;
  buyer?: BuyerResponse;
  product: ProductResponse;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Wasmachine"
   */
  name: string;
  /** @min 1 */
  quantity: number;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Marktplaats"
   */
  publication: string;
  /** The buyer item's price. */
  price: Money;
  status: BuyerItemStatus;
  /** @format date */
  delivery_at: string | null;
}

/** Current Buyer Request */
export interface BuyerRequest {
  /** @format uuid */
  id?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
  /** @format email */
  email: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "+3112345678"
   */
  mobile?: string | null;
  is_company: boolean;
  registrationAddress: BuyerAddressRequest;
  company: CompanyRequest;
}

/** Current Buyer Response */
export interface BuyerResponse {
  /** @format uuid */
  id?: string;
  /**
   * @maxLength 255
   * @example "Nero"
   */
  first_name: string;
  /**
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
  /** @format email */
  email: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "+3112345678"
   */
  mobile: string | null;
  is_company: boolean;
  registrationAddress: BuyerAddressResponse;
  company: CompanyRequest;
}

export interface CompanyRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  vat_number?: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  coc_number?: string;
}

/** Current User */
export interface CurrentUser {
  /** @format uuid */
  id?: string;
  /**
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
  /** @format email */
  email: string;
}

export interface Error {
  message: string;
  errors?: Record<string, string[]>;
}

/** Money */
export interface Money {
  /**
   * The amount formatted as a string.
   *
   * `<= 999.999.999.999,00`
   * @example "100000.23"
   */
  amount: string;
  /**
   * A 3-letter uppercase ISO 4217 currency code.
   * @minLength 3
   * @maxLength 3
   * @example "EUR"
   */
  currency: string;
}

export interface PaginationLinks {
  /** @format uri */
  first: string | null;
  /** @format uri */
  last: string | null;
  /** @format uri */
  prev: string | null;
  /** @format uri */
  next: string | null;
}

export interface PaginationMeta {
  /** @min 1 */
  current_page: number;
  /** @min 1 */
  from: number | null;
  /** @min 1 */
  last_page: number;
  links: {
    active: boolean;
    label: string;
    /** @format uri */
    url: string | null;
  };
  /** @format uri */
  path: string;
  /**
   * @min 1
   * @max 250
   * @default 25
   */
  per_page: number;
  /** @min 1 */
  to: number | null;
  /** @min 0 */
  total: number;
}

export enum PlatformType {
  Web = "web",
  App = "app",
}

export type ProductCategoryResponse = {
  /** @format uuid */
  id: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "General"
   */
  name: string;
  children?: ProductCategoryResponse[];
} | null;

export enum ProductCondition {
  New = "new",
  AsGoodAsNew = "as-good-as-new",
  Used = "used",
  Defect = "defect",
  Damaged = "damaged",
}

export interface ProductRequest {
  /**
   * @maxLength 255
   * @example "Steamer"
   */
  title: string;
  /**
   * The UUID of the selected project.
   * @format uuid
   */
  project_id?: string | null;
  /**
   * The UUID of the selected product category.
   * @format uuid
   */
  product_category_id: string;
  /**
   * The UUID of the selected QR code.
   * @format uuid
   */
  qr_code_id?: string | null;
  /**
   * @maxLength 255
   * @example "Skyline"
   */
  brand?: string | null;
  /**
   * @maxLength 255
   * @example "C011"
   */
  model?: string | null;
  /**
   * @maxLength 255
   * @example "OC-0123456"
   */
  sku?: string | null;
  /**
   * @maxLength 255
   * @example "40GN"
   */
  capacity?: string | null;
  /**
   * @min 1
   * @example 10
   */
  width_in_mm?: number | null;
  /**
   * @min 1
   * @example 10
   */
  height_in_mm?: number | null;
  /**
   * @min 1
   * @example 10
   */
  length_in_mm?: number | null;
  /**
   * @maxLength 255
   * @example "500W"
   */
  voltage?: string | null;
  /**
   * @maxLength 255
   * @example "19kW"
   */
  power?: string | null;
  /**
   * @min 1900
   * @max 2100
   * @example 2023
   */
  year_of_manufacture?: number | null;
  condition: ProductCondition;
  dirt_factor: ProductDirtFactor;
  starting_bid: AuctionItemStartingBid;
  platform?: PlatformType;
  /**
   * @min 0
   * @example 1
   */
  quantity: number;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  price?: number | null;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  selling_price?: number | null;
  status: ProductStatus;
  /**
   * @maxLength 2000
   * @example "Awesome Combisteamer"
   */
  description?: string | null;
  /**
   * The description of the log product status.
   * @maxLength 2000
   * @example "This is a description that is created in the app."
   */
  status_description?: string | null;
}

export interface ProductUpdate {
  /**
   * @maxLength 255
   * @example "Steamer"
   */
  title?: string;
  /**
   * The UUID of the selected buyer.
   * @format uuid
   */
  buyer_id?: string;
  /**
   * The UUID of the selected project.
   * @format uuid
   */
  project_id?: string;
  /**
   * The UUID of the selected product category.
   * @format uuid
   */
  product_category_id?: string;
  /**
   * The UUID of the selected QR code.
   * @format uuid
   */
  qr_code_id?: string;
  /**
   * @maxLength 255
   * @example "Skyline"
   */
  brand?: string;
  /**
   * @maxLength 255
   * @example "C011"
   */
  model?: string;
  /**
   * @maxLength 255
   * @example "OC-0123456"
   */
  sku?: string;
  /**
   * @maxLength 255
   * @example "40GN"
   */
  capacity?: string;
  /**
   * @min 1
   * @example 10
   */
  width_in_mm?: number;
  /**
   * @min 1
   * @example 10
   */
  height_in_mm?: number;
  /**
   * @min 1
   * @example 10
   */
  length_in_mm?: number;
  /**
   * @maxLength 255
   * @example "500W"
   */
  voltage?: string;
  /**
   * @maxLength 255
   * @example "19kW"
   */
  power?: string;
  /**
   * @min 1900
   * @max 2100
   * @example 2023
   */
  year_of_manufacture?: number;
  condition?: ProductCondition;
  dirt_factor?: ProductDirtFactor;
  starting_bid?: AuctionItemStartingBid;
  platform?: PlatformType;
  /**
   * @min 0
   * @example 1
   */
  quantity?: number;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  price?: number;
  /**
   * @format float
   * @min 0
   * @example 150
   */
  selling_price?: number;
  status: ProductStatus;
  /**
   * @maxLength 2000
   * @example "Awesome Combisteamer"
   */
  description?: string;
}

export interface ProductResponse {
  /** @format uuid */
  id: string;
  /**
   * @maxLength 255
   * @example "Steamer"
   */
  title: string;
  project?: ProjectResponse;
  product_category?: ProductCategoryResponse;
  qr_code?: QrCode;
  /**
   * @maxLength 255
   * @example "Skyline"
   */
  brand: string | null;
  /**
   * @maxLength 255
   * @example "C011"
   */
  model?: string | null;
  /**
   * @maxLength 255
   * @example "OC-0123456"
   */
  sku?: string | null;
  /**
   * @maxLength 255
   * @example "40GN"
   */
  capacity?: string | null;
  /**
   * @min 1
   * @example 10
   */
  width_in_mm?: number | null;
  /**
   * @min 1
   * @example 10
   */
  height_in_mm?: number | null;
  /**
   * @min 1
   * @example 10
   */
  length_in_mm?: number | null;
  /**
   * @maxLength 255
   * @example "500W"
   */
  voltage?: string | null;
  /**
   * @maxLength 255
   * @example "19kW"
   */
  power?: string | null;
  /**
   * @min 0
   * @example 2023
   */
  year_of_manufacture?: number | null;
  condition: ProductCondition;
  dirt_factor: ProductDirtFactor;
  starting_bid?: AuctionItemStartingBid;
  platform?: PlatformType;
  /**
   * @min 0
   * @example 1
   */
  quantity?: number;
  price?: Money;
  status: ProductStatus;
  /** @format date-time */
  created_at?: string;
  /**
   * @maxLength 2000
   * @example "Awesome Combisteamer"
   */
  description?: string | null;
  image: Image;
  /** The sections where the product is located. */
  sections: SectionResponse[];
  /** The users where the product is assigned to. */
  assignees: SimpleUserResponse[];
  /** The quantities sold for a product. */
  buyer_items?: BuyerItemResponse[];
  /** Overview of product history/changes. */
  logs?: ProductLogResponse[];
  /** Overview of product tasks. */
  tasks?: TaskResponse[];
  orderProduct?: OrderProductResponse;
}

export interface ProductPublicationRequest {
  /**
   * The UUID of the selected publication.
   * @format uuid
   */
  publication_id: string;
  /** @min 1 */
  quantity: number;
}

export interface ProductPublicationResponse {
  /** @format uuid */
  id?: string;
  auction_item: AuctionItemResponse;
  product: ProductResponse;
  publication: Publication;
  /** @min 1 */
  quantity: number;
}

export enum ProductDirtFactor {
  Dirty = "dirty",
  Normal = "normal",
  Clean = "clean",
}

export interface ProductLogRequest {
  /**
   * @maxLength 255
   * @example "Aangeboden Troostwijk"
   */
  title: string;
  status: ProductStatus;
  /**
   * @maxLength 255
   * @example "€13.000,- (niet verkocht)"
   */
  description?: string | null;
  /**
   * @format float
   * @example 150
   */
  expense_price?: number | null;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_estimate?: string | null;
}

export interface ProductLogResponse {
  /** @format uuid */
  id?: string;
  /**
   * @maxLength 255
   * @example "Aangeboden Troostwijk"
   */
  title?: string;
  status?: ProductStatus;
  /**
   * @maxLength 255
   * @example "€13.000,- (niet verkocht)"
   */
  description?: string | null;
  expense_price?: Money;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_estimate?: string;
  /** @format date-time */
  created_at?: string;
  created_by?: SimpleUserResponse;
}

export enum ProductStatus {
  ForRent = "for-rent",
  ForRepair = "for-repair",
  ForReview = "for-review",
  InMaintenance = "in-maintenance",
  Published = "published",
  PartlyPublished = "partly-published",
  ReadyForSale = "ready-for-sale",
  ReadyToWrite = "ready-to-write",
  Registered = "registered",
  RentedOut = "rented-out",
  Service = "service",
  Sold = "sold",
  ToAllocate = "to-allocate",
  ToClean = "to-clean",
  ToSort = "to-sort",
  Extradited = "extradited",
  Storage = "storage",
}

export type ProjectResponse = {
  /** @format uuid */
  id: string;
  status?: ProjectStatus;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John Doe"
   */
  contact_name?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "+3112345678"
   */
  contact_phone?: string;
  /**
   * @format email
   * @minLength 1
   * @maxLength 255
   * @example "foo@bar.net"
   */
  contact_email?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kerkstraat"
   */
  street?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "5"
   */
  house_number?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1234 AA"
   */
  postal_code?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Rotterdam"
   */
  city?: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  purchase_date?: string;
  purchase_price?: Money;
  target_price?: Money;
  revenue_total?: Money;
} | null;

export interface ProjectRequest {
  /** @format uuid */
  id: string;
  status: ProjectStatus;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John Doe"
   */
  contact_name?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "+3112345678"
   */
  contact_phone?: string;
  /**
   * @format email
   * @minLength 1
   * @maxLength 255
   * @example "foo@bar.net"
   */
  contact_email?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kerkstraat"
   */
  street?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "5"
   */
  house_number?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1234 AA"
   */
  postal_code?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Rotterdam"
   */
  city?: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  purchase_date?: string;
  /**
   * @format float
   * @example 150
   */
  purchase_price?: number;
  /**
   * @format float
   * @example 150
   */
  target_price?: number;
}

export enum ProjectStatus {
  Created = "created",
  Planned = "planned",
  PickedUp = "picked-up",
  Completed = "completed",
}

export interface Publication {
  /** @format uuid */
  id?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Troostwijkauctions.com"
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "atlas"
   */
  label: string;
  active: boolean;
}

export interface MergeOrderProductRequest {
  /**
   * @maxLength 255
   * @example "Steamer"
   */
  title: string;
  /**
   * The UUID of the selected product category.
   * @format uuid
   */
  product_category_id: string;
  /**
   * The UUID of the selected QR code.
   * @format uuid
   */
  qr_code_id?: string | null;
  /** The UUID of the selected sections. */
  sections?: string[] | null;
  status?: "awaiting-delivery" | "ready-for-transport" | "delivered" | "technical-service";
  /**
   * @min 1900
   * @max 2100
   * @example 2023
   */
  year_of_manufacture: number;
  /**
   * @maxLength 2000
   * @example "Parts assembled for customer."
   */
  description?: string | null;
}

export interface OrderRequest {
  /** @format uuid */
  id?: string;
  /**
   * The UUID of the selected buyer
   * @format uuid
   */
  buyer_id: string;
  status?: OrderStatus;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "0A1234567"
   */
  order_number?: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_of_work_preparation?: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_of_installation?: string;
  /**
   * @maxLength 1000
   * @example "Dismantling old kitchen."
   */
  planning?: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  created_at?: string;
}

export interface OrderResponse {
  /** @format uuid */
  id?: string;
  status?: OrderStatus;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "0A1234567"
   */
  order_number?: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_of_work_preparation?: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "17:32"
   */
  hours_of_installation?: string;
  /**
   * @maxLength 1000
   * @example "Dismantling old kitchen."
   */
  planning?: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  created_at?: string;
  buyer?: BuyerResponse;
}

export interface OrderProductByOrderProduct {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  item_number?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  supplier?: string | null;
  /**
   * The UUID of the selected parent order product.
   * @format uuid
   */
  parent_id?: string | null;
  /**
   * The UUID of the selected product category.
   * @format uuid
   */
  product_category_id: string;
  status: OrderProductStatus;
  preparation_needed: boolean;
}

export interface OrderProductByProduct {
  /**
   * The UUID of the selected product.
   * @format uuid
   */
  product_id: string | null;
}

export interface OrderProductResponse {
  /** @format uuid */
  id?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Kaveler"
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  item_number: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  supplier: string;
  status: OrderProductStatus;
  order: OrderResponse;
  product?: ProductResponse;
  product_category: ProductCategoryResponse;
  preparation_needed: boolean;
  /** @min 0 */
  children_count?: number;
  /** @min 0 */
  delivered_count?: number;
}

export interface Image {
  /**
   * A unique identifier for the object.
   * @format uuid
   */
  id: string;
  /**
   * The original image name.
   * @minLength 1
   * @maxLength 255
   * @example "image.webp"
   */
  original_name: string;
  /**
   * The size of the image.
   * @min 0
   * @example 695
   */
  size: number;
  /**
   * The original image extension.
   * @minLength 1
   * @maxLength 255
   * @example "webp"
   */
  extension: string;
  /**
   * The mimetype of the image.
   * @minLength 1
   * @maxLength 255
   * @example "image/webp"
   */
  mime_type: string;
  /**
   * A map of available image variants and their respective temporary URLs.
   *
   * New variants may be available as soon as they've finished processing.
   * @example {"original":"https://example.com/images/original.png","105x105":"https://example.com/images/105x105.webp","608x608":"https://example.com/images/608x608.webp","800x600":"https://example.com/images/800x600.webp","1600x1200":"https://example.com/images/1600x1200.webp"}
   */
  variants?: {
    /**
     * A temporary URL to the original image.
     * @format uri
     */
    original: string;
    [key: string]: any;
  };
}

export enum OrderStatus {
  Preparation = "preparation",
  ReadyForTransport = "ready-for-transport",
  Placed = "placed",
}

export enum OrderProductStatus {
  AwaitingDelivery = "awaiting-delivery",
  ReadyForTransport = "ready-for-transport",
  Delivered = "delivered",
  TechnicalService = "technical-service",
  PartsCombined = "parts-combined",
}

export type QrCode = {
  /** @format uuid */
  id: string;
  type: "product" | "section";
  /**
   * @minLength 7
   * @maxLength 7
   * @example "V000026"
   */
  code: string;
  product?: ProductResponse;
  section?: SectionResponse;
} | null;

export interface QrCodeRequestProduct {
  /**
   * The UUID of the selected product.
   * @format uuid
   */
  product_id: string | null;
}

export interface QrCodeRequestSection {
  /**
   * The UUID of the selected section.
   * @format uuid
   */
  section_id: string | null;
}

export interface Role {
  /** @format uuid */
  id?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Developer"
   */
  name?: string;
  /** The available product statuses for the current role. */
  store_statuses?: string[];
  /** The available product statuses for the current role. */
  task_statuses?: string[];
  /** The available product statuses for the current role. */
  update_statuses?: string[];
  /** The permissions for the role. */
  permissions?: string[];
}

export interface ScheduleRequest {
  /** @format uuid */
  id?: string;
  /** @example "Uitleverdag veiling" */
  title: string;
  /**
   * @minLength 10
   * @maxLength 10
   * @example "2023-05-20"
   */
  date: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "09:30"
   */
  time_start: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "12:30"
   */
  time_end: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "A note about the appointment."
   */
  remark?: string | null;
}

export interface ScheduleResponse {
  /** @format uuid */
  id?: string;
  /** @example "Uitleverdag veiling" */
  title: string;
  /**
   * @minLength 10
   * @maxLength 10
   * @example "2023-05-20"
   */
  date: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "09:30"
   */
  time_start: string;
  /**
   * @format time-hour:time-minute
   * @minLength 5
   * @maxLength 5
   * @example "12:30"
   */
  time_end: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "A note about the appointment."
   */
  remark?: string;
  tasks?: TaskResponse[];
  /** The users the schedule is assigned to. */
  assignees?: SimpleUserResponse[];
}

export interface SectionRequest {
  /** @format uuid */
  id: string;
  warehouse: SectionWarehouse;
  row: SectionRow;
  floor: SectionFloor;
  /**
   * @minLength 3
   * @maxLength 3
   * @example "001"
   */
  box?: string;
  /**
   * The UUID of the selected QR code.
   * @format uuid
   */
  qr_code_id: string;
}

export interface SectionResponse {
  /** @format uuid */
  id: string;
  warehouse?: SectionWarehouse;
  row?: SectionRow;
  floor?: SectionFloor;
  /**
   * @minLength 3
   * @maxLength 3
   * @example "001"
   */
  box?: string;
  /** @example "1.01.001" */
  label: string;
  qr_code?: QrCode;
  products?: ProductResponse[];
}

export interface TaskRequest {
  /**
   * @maxLength 255
   * @example "Complete cleaning"
   */
  title: string;
  /**
   * @maxLength 9999
   * @example "Complete the cleaning of product A."
   */
  description: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  due_date: string | null;
  /** The UUID of the selected assignees. */
  assignees: string[] | null;
  /** The UUID of the selected products. */
  products: string[] | null;
}

export interface TaskAllocateRequest {
  /**
   * The UUID of the selected order product.
   * @format uuid
   */
  order_product_id: string;
  status?: "ready-for-transport" | "delivered" | "technical-service" | null;
  /**
   * The description of the log product status.
   * @maxLength 2000
   * @example "This is a description that is created in the app."
   */
  status_description?: string | null;
}

export interface TaskResponse {
  /** @format uuid */
  id: string;
  /**
   * @maxLength 255
   * @example "Complete cleaning"
   */
  title: string;
  /**
   * @maxLength 9999
   * @example "Complete the cleaning of product A"
   */
  description: string;
  /**
   * @format date
   * @example "2023-05-20"
   */
  due_date?: string | null;
  /**
   * @format date-time
   * @example "2023-05-20 12:00:00"
   */
  completed_at?: string | null;
  completed_by?: null | SimpleUserResponse;
  created_by: SimpleUserResponse;
  assignees: SimpleUserResponse[];
  products: ProductResponse[];
}

export enum SectionFloor {
  Value01 = "01",
  Value02 = "02",
  Value03 = "03",
  Value04 = "04",
  Value05 = "05",
  Value06 = "06",
  Value07 = "07",
  Value08 = "08",
  Value09 = "09",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
  Value19 = "19",
  Value20 = "20",
  Value21 = "21",
  Value22 = "22",
  Value23 = "23",
  Value24 = "24",
  Value25 = "25",
  Value26 = "26",
  Value27 = "27",
  Value28 = "28",
  Value29 = "29",
  Value30 = "30",
}

export enum SectionRow {
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
  Value19 = "19",
  Value20 = "20",
  Value21 = "21",
  Value22 = "22",
  Value23 = "23",
  Value24 = "24",
  Value25 = "25",
  Value26 = "26",
  Value27 = "27",
  Value28 = "28",
  Value29 = "29",
  Value30 = "30",
  Value31 = "31",
  Value32 = "32",
  Value33 = "33",
  Value34 = "34",
  Value35 = "35",
  Value36 = "36",
  Value37 = "37",
  Value38 = "38",
  Value39 = "39",
  Value40 = "40",
  Value41 = "41",
  Value42 = "42",
  Value43 = "43",
  Value44 = "44",
  Value45 = "45",
  Value46 = "46",
  Value47 = "47",
  Value48 = "48",
  Value49 = "49",
  Value50 = "50",
}

export enum SectionWarehouse {
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
}

export interface SimpleUserResponse {
  /** @format uuid */
  id: string;
  /**
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
}

export interface TaskIndexAuthorizations {
  tasks: {
    /** Whether the user is authorized to create tasks. */
    create: boolean;
    /** The tasks the user is authorized to update. */
    update: string[];
    /** The tasks the user is authorized to delete. */
    delete: string[];
  };
}

export interface TaskResourceAuthorizations {
  tasks: {
    /** Whether the user is authorized to update the task. */
    update: boolean;
    /** Whether the user is authorized to delete the task. */
    delete: boolean;
  };
}

export interface UserRequest {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
  /**
   * @format email
   * @minLength 1
   * @maxLength 255
   * @example "j.doe@example.net"
   */
  email: string;
  /**
   * The UUID of the selected role.
   * @format uuid
   */
  role_id: string;
}

export interface UserResponse {
  /** @format uuid */
  id: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
  /**
   * @format email
   * @minLength 1
   * @maxLength 255
   * @example "j.doe@example.net"
   */
  email?: string;
  role?: Role;
}

export interface PasswordForgotPayload {
  /** @format email */
  email: string;
}

export type PasswordForgotData = any;

export interface LoginPayload {
  /** @format email */
  email: string;
  /** @format password */
  password: string;
  /** Whether to remember the login session. */
  remember?: boolean;
}

export interface LoginData {
  two_factor: boolean;
}

export type LogoutData = any;

export interface AuctionsIndexParams {
  /** Set the auction status. */
  status?: AuctionStatus[];
  /** Set the sorting method. */
  sort_by?: "auction_number" | "name" | "auction_at" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface AuctionsIndexData {
  data: Auction[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface AuctionsStoreData {
  data: Auction;
}

export interface AuctionsShowData {
  data: Auction;
}

export interface AuctionsUpdateData {
  data: OrderResponse;
}

export type AuctionsDestroyData = any;

export interface AuctionsProductsStoreData {
  data: Auction;
}

export interface AuctionsAuctionItemsIndexParams {
  /** Set the sorting method, default sorting is lot_number. */
  sort_by?:
    | "lot_number"
    | "name"
    | "section"
    | "buyer"
    | "starting_bid"
    | "minimum_amount"
    | "status"
    | "assigned_explicitly";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
  /**
   * The UUID of the selected auction.
   * @format uuid
   */
  auction: string;
}

export interface AuctionsAuctionItemsIndexData {
  data: AuctionItemResponse[];
  links: PaginationLinks;
  meta: {
    /** @min 1 */
    current_page: number;
    /** @min 1 */
    from: number | null;
    /** @min 1 */
    last_page: number;
    links: {
      active: boolean;
      label: string;
      /** @format uri */
      url: string | null;
    };
    /** @format uri */
    path: string;
    /**
     * @min 1
     * @max 250
     * @default 25
     */
    per_page: number;
    /** @min 1 */
    to: number | null;
    /** @min 0 */
    total: number;
    /** @min 1 */
    last_lot_number: number;
  };
}

export interface AuctionsAuctionItemsStoreData {
  data: AuctionItemResponse;
}

export interface AuctionItemsShowData {
  data: AuctionItemResponse;
}

export interface AuctionItemsUpdateData {
  data: AuctionItemResponse;
}

export type AuctionItemsDestroyData = any;

export interface BuyersIndexParams {
  /** Set the sorting method. */
  sort_by?: "first_name" | "last_name" | "email" | "company";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 1000
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface BuyersIndexData {
  data: BuyerResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface BuyersStoreData {
  data: BuyerResponse;
}

export interface BuyersShowData {
  data: BuyerResponse;
}

export interface BuyersUpdateData {
  data: BuyerResponse;
}

export type BuyersDestroyData = any;

export interface BuyersItemsIndexParams {
  /** Set the sorting method. */
  sort_by?: "publication" | "name" | "status" | "price" | "created_at";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 1000
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
  /**
   * The UUID of the selected buyer.
   * @format uuid
   */
  buyer: string;
}

export interface BuyersItemsIndexData {
  data: BuyerItemResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface ProductCategoriesIndexParams {
  /** Set the sorting method */
  sort_by?: "name";
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface ProductCategoriesIndexData {
  data: ProductCategoryResponse[];
}

export interface ProductsImagesIndexData {
  data: Image[];
}

export interface ProductsImagesStorePayload {
  /**
   * The image file to upload.
   * Supported mime types: `images/jpeg`, `images/png`,  `images/webp`.
   * Max. 10 MB.
   * @format binary
   * @minLength 1
   * @maxLength 1048576
   */
  image?: File;
}

export interface ProductsImagesStoreData {
  data: Image;
}

export interface ProductsImagesSortingPayload {
  /** The UUID of the selected images. */
  images: string[];
}

export type ProductsImagesSortingData = any;

export interface ProductsIndexParams {
  /** Set the product status. */
  status?: ProductStatus[];
  /**
   * Set the product category UUID.
   * @format uuid
   */
  product_category_id?: string;
  /**
   * Set the product created day.
   * @format date
   */
  created_at?: string;
  /**
   * Set the sorting method, default sorting is created_at.
   * @default "created_at"
   */
  sort_by?: "title" | "brand" | "product_category_name" | "section" | "sku" | "created_at" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "desc"
   */
  sort_direction?: "asc" | "desc";
}

export interface ProductsIndexData {
  data: ProductResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface ProductsStoreData {
  data: ProductResponse;
}

export interface ProductsShowData {
  data: ProductResponse;
}

export interface ProductsUpdateData {
  data: ProductResponse;
}

export type ProductsDestroyData = any;

export interface ProductsAssignPayload {
  /** The UUID of the selected assignees. */
  assignees: string[];
}

export interface ProductsAssignData {
  data: ProductResponse;
}

export interface ProductsBuyerItemsStoreData {
  data: ProductResponse;
}

export type BuyerItemsDestroyData = any;

export interface ProductsPublicationsIndexData {
  data: ProductPublicationResponse[];
}

export interface ProductsSectionsPayload {
  /** The UUID of the selected sections. */
  sections: string[];
}

export interface ProductsSectionsData {
  data: ProductResponse;
}

export interface ProductsLogsStoreData {
  data: ProductResponse;
}

export interface ProductsProductPublicationsIndexData {
  data: ProductPublicationResponse[];
}

export interface ProductsProductPublicationsStoreData {
  data: ProductPublicationResponse;
}

export type ProductPublicationsDestroyData = any;

export interface ProjectsIndexParams {
  /** Set the sorting method. */
  sort_by?: "name" | "purchase_date" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "desc"
   */
  sort_direction?: "asc" | "desc";
}

export interface ProjectsIndexData {
  data: ProjectResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface ProjectsStoreData {
  data: ProjectResponse;
}

export interface ProjectsShowData {
  data: ProjectResponse;
}

export interface ProjectsUpdateData {
  data: ProjectResponse;
}

export type ProjectsDestroyData = any;

export interface ProjectsProductsIndexParams {
  /** Set the product status. */
  status?: ProductStatus[];
  /**
   * Set the product category UUID.
   * @format uuid
   */
  product_category_id?: string;
  /**
   * Set the product created day.
   * @format date
   */
  created_at?: string;
  /**
   * Set the sorting method.
   * @default "created_at"
   */
  sort_by?: "title" | "brand" | "product_category_name" | "section" | "sku" | "created_at" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "desc"
   */
  sort_direction?: "asc" | "desc";
  /**
   * The UUID of the selected project.
   * @format uuid
   */
  project: string;
}

export interface ProjectsProductsIndexData {
  data: ProductResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface ProjectsImagesIndexData {
  data: Image[];
}

export interface ProjectsImagesStorePayload {
  /**
   * The image file to upload.
   * Supported mime types: `images/jpeg`, `images/png`,  `images/webp`.
   * Max. 10 MB.
   * @format binary
   * @minLength 1
   * @maxLength 1048576
   */
  image?: File;
}

export interface ProjectsImagesStoreData {
  data: Image;
}

export interface ProjectsImagesSortingPayload {
  /** The UUID of the selected images. */
  images: string[];
}

export type ProjectsImagesSortingData = any;

export interface PublicationsIndexData {
  data: Publication[];
}

export interface OrdersIndexParams {
  /** Set the sorting method. */
  sort_by?: "name" | "order_number" | "created_at" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface OrdersIndexData {
  data: OrderResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export type OrdersStorePayload = OrderRequest;

export interface OrdersStoreData {
  data: OrderResponse;
}

export interface OrdersShowData {
  data: OrderResponse;
}

export type OrdersUpdatePayload = OrderRequest;

export interface OrdersUpdateData {
  data: OrderResponse;
}

export type OrdersDestroyData = any;

export interface OrdersOrderProductsIndexParams {
  /** Set the sorting method. */
  sort_by?: "title" | "product_category_name" | "preparation_needed" | "status";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
  /**
   * The UUID of the selected order.
   * @format uuid
   */
  order: string;
}

export interface OrdersOrderProductsIndexData {
  data: (OrderProductResponse & {
    product?: ProductResponse;
    parent?: OrderProductResponse;
  })[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export type OrdersOrderProductsStorePayload = OrderProductByProduct | OrderProductByOrderProduct;

export interface OrdersOrderProductsStoreData {
  data: OrderProductResponse & {
    product?: ProductResponse;
    parent?: OrderProductResponse;
  };
}

export interface OrderProductsShowData {
  data: OrderProductResponse & {
    product?: ProductResponse;
    parent?: OrderProductResponse;
    /** The children of the order product. */
    children?: OrderProductResponse[];
  };
}

export type OrderProductsUpdatePayload = OrderProductByProduct | OrderProductByOrderProduct;

export interface OrderProductsUpdateData {
  data: OrderProductResponse & {
    product?: ProductResponse;
    parent?: OrderProductResponse;
  };
}

export type OrderProductsDestroyData = any;

export type OrdersOrderProductsMergeData = ProductResponse;

export interface OrderProductsIndexParams {
  /** Set whether you want to filter on allocatable products only. */
  allocatable?: boolean;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
}

export interface OrderProductsIndexData {
  data: OrderProductResponse[];
}

export type ImagesDestroyData = any;

export interface PasswordResetPayload {
  /**
   * The password reset token from the URL.
   * @example "d6956f955026e5d3df4ac9525e9806b0e26efa437879150c9fbecf4f2f4bddf4"
   */
  token: string;
  /**
   * The user's e-mail address.
   * @format email
   */
  email: string;
  /**
   * The user's new password.
   * @format password
   */
  password: string;
  /**
   * Confirmation of the user's new password.
   * @format password
   */
  password_confirmation: string;
}

export type PasswordResetData = any;

export interface SanctumTokenPayload {
  /** @format email */
  email: string;
  /** @format password */
  password: string;
  /** @example "mobile" */
  device_name: string;
}

export interface SanctumTokenData {
  token?: string;
}

export interface RolesIndexData {
  data: Role[];
}

export type SanctumCsrfCookieData = any;

export interface QrCodesIndexParams {
  /** Set whether you also want to retrieve the QR codes with a connected product or section. */
  has_model?: boolean;
  /**
   * Set whether you want to exclude a certain ID from filtering.
   * @format uuid
   */
  exclude_id?: string;
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /** Set the sorting method. */
  sort_by?: "type" | "code_formatted";
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
  /** Set the QR code type. */
  type?: "product" | "section";
}

export interface QrCodesIndexData {
  data: QrCode[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface QrCodesShowData {
  data: QrCode;
}

export type QrCodesUpdatePayload = QrCodeRequestProduct | QrCodeRequestSection;

export interface QrCodesUpdateData {
  data: OrderProductResponse & {
    product?: ProductResponse;
    parent?: OrderProductResponse;
  };
}

export interface SchedulesIndexParams {
  /**
   * Set the end date.
   * @minLength 10
   * @maxLength 10
   */
  start_date?: string;
  /**
   * Set the start date.
   * @minLength 10
   * @maxLength 10
   */
  end_date?: string;
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 100
   */
  per_page?: number;
}

export interface SchedulesIndexData {
  data: ScheduleResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface SchedulesStoreData {
  data: ScheduleResponse;
}

export interface SchedulesShowData {
  data: ScheduleResponse;
}

export interface SchedulesUpdateData {
  data: ScheduleResponse;
}

export type SchedulesDestroyData = any;

export interface SchedulesTaskPayload {
  /** The UUID of the selected tasks. */
  tasks: string[];
}

export interface SchedulesTaskData {
  data: ScheduleResponse;
}

export interface ScheduleAssignPayload {
  /** The UUID of the selected assignees. */
  assignees: string[];
}

export interface ScheduleAssignData {
  data: ScheduleResponse;
}

export interface SectionsIndexParams {
  /** Set the sorting method. */
  sort_by?: "warehouse" | "row" | "floor" | "box";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 1000
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface SectionsIndexData {
  data: SectionResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface SectionsStoreData {
  data: SectionResponse;
}

export interface SectionsShowData {
  data: SectionResponse;
}

export interface SectionsUpdateData {
  data: SectionResponse;
}

export type SectionsDestroyData = any;

export interface TasksIndexParams {
  /**
   * The UUID of the assignee.
   * @format uuid
   */
  assignee?: string | null;
}

export interface TasksIndexData {
  data: TaskResponse[];
  authorizations: TaskIndexAuthorizations;
}

export interface TasksStoreData {
  data: TaskResponse;
  authorizations: TaskResourceAuthorizations;
}

export interface TasksShowData {
  data: TaskResponse;
  authorizations: TaskResourceAuthorizations;
}

export interface TasksUpdateData {
  data: TaskResponse;
  authorizations: TaskResourceAuthorizations;
}

export type TasksDestroyData = any;

export interface TasksCompleteData {
  data: TaskResponse;
  authorizations: TaskResourceAuthorizations;
}

export interface TasksAllocateData {
  data: ProductResponse;
}

export interface UserShowData {
  data: CurrentUser;
  meta: {
    /** The global permissions for the current user. */
    permissions?: string[];
    /** The available product statuses for the current user. */
    store_statuses?: string[];
    /** The available product statuses for the current user. */
    task_statuses?: string[];
    /** The available product statuses for the current user. */
    update_statuses?: string[];
  };
}

export interface UserUpdatePayload {
  /**
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
}

export interface UserUpdateData {
  data: CurrentUser;
}

export interface UserPasswordPayload {
  /** @format password */
  current_password: string;
  /**
   * @format password
   * @minLength 8
   */
  new_password: string;
  /**
   * @format password
   * @minLength 8
   */
  new_password_confirmation: string;
}

export type UserPasswordData = any;

export interface UsersIndexParams {
  /** Set the sorting method. */
  sort_by?: "name";
  /**
   * Set the current page.
   * @min 1
   */
  page?: number;
  /**
   * Set the number of items to be returned per page.
   * @min 1
   * @max 250
   * @default 25
   */
  per_page?: number;
  /**
   * Set the search query.
   * @minLength 1
   * @maxLength 255
   */
  search?: string;
  /**
   * Set the sorting direction.
   * @default "asc"
   */
  sort_direction?: "asc" | "desc";
}

export interface UsersIndexData {
  data: UserResponse[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface UsersStoreData {
  data: UserResponse;
}

export interface UsersShowData {
  data: UserResponse;
}

export interface UsersUpdateData {
  data: UserResponse;
}

export type UsersDestroyData = any;

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Kaveler API
 * @version 0.1
 * @baseUrl http://localhost:8000
 * @contact 23G <support@23g.nl> (https://23g.nl)
 *
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  forgotPassword = {
    /**
     * @description This operation will always respond successfully when the provided data is semantically valid, this means no assumptions can be made regarding whether the email was sent or if the provided email address was valid at all. This operation requires [CSRF protection](#operation/session).
     *
     * @tags Authentication
     * @name PasswordForgot
     * @summary Request a password reset
     * @request POST:/forgot-password
     */
    passwordForgot: (data: PasswordForgotPayload, params: RequestParams = {}) =>
      this.request<PasswordForgotData, Error>({
        path: `/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  login = {
    /**
     * @description Creates an authenticated web-based session.
     *
     * @tags Authentication
     * @name Login
     * @summary Login
     * @request POST:/login
     * @secure
     */
    login: (data: LoginPayload, params: RequestParams = {}) =>
      this.request<LoginData, Error>({
        path: `/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  logout = {
    /**
     * @description Logs the current user out.
     *
     * @tags Authentication
     * @name Logout
     * @summary Logout
     * @request POST:/logout
     * @secure
     */
    logout: (params: RequestParams = {}) =>
      this.request<LogoutData, Error>({
        path: `/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  auctions = {
    /**
     * @description Display a listing of the auctions.
     *
     * @tags Auctions
     * @name AuctionsIndex
     * @summary List auctions
     * @request GET:/auctions
     */
    auctionsIndex: (query: AuctionsIndexParams, params: RequestParams = {}) =>
      this.request<AuctionsIndexData, Error>({
        path: `/auctions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created auction in storage.
     *
     * @tags Auctions
     * @name AuctionsStore
     * @summary Store auction
     * @request POST:/auctions
     */
    auctionsStore: (data: Auction, params: RequestParams = {}) =>
      this.request<AuctionsStoreData, Error>({
        path: `/auctions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified auction.
     *
     * @tags Auctions
     * @name AuctionsShow
     * @summary Show auction
     * @request GET:/auctions/{auction}
     */
    auctionsShow: (auction: string, params: RequestParams = {}) =>
      this.request<AuctionsShowData, Error>({
        path: `/auctions/${auction}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified auction in storage.
     *
     * @tags Auctions
     * @name AuctionsUpdate
     * @summary Update auction
     * @request PATCH:/auctions/{auction}
     */
    auctionsUpdate: (auction: string, data: Auction, params: RequestParams = {}) =>
      this.request<AuctionsUpdateData, Error>({
        path: `/auctions/${auction}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified auction from storage.
     *
     * @tags Auctions
     * @name AuctionsDestroy
     * @summary Delete auction
     * @request DELETE:/auctions/{auction}
     */
    auctionsDestroy: (auction: string, params: RequestParams = {}) =>
      this.request<AuctionsDestroyData, Error>({
        path: `/auctions/${auction}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Assign the selected products to the auction.
     *
     * @tags Assign products
     * @name AuctionsProductsStore
     * @summary Assign products for selected auction
     * @request POST:/auctions/{auction}/products
     */
    auctionsProductsStore: (auction: string, data: AuctionItemProductRequest, params: RequestParams = {}) =>
      this.request<AuctionsProductsStoreData, Error>({
        path: `/auctions/${auction}/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display a listing of all items connected to the auction.
     *
     * @tags Auction items
     * @name AuctionsAuctionItemsIndex
     * @summary List items for selected auction
     * @request GET:/auctions/{auction}/auction-items
     */
    auctionsAuctionItemsIndex: ({ auction, ...query }: AuctionsAuctionItemsIndexParams, params: RequestParams = {}) =>
      this.request<AuctionsAuctionItemsIndexData, Error>({
        path: `/auctions/${auction}/auction-items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created auction item in storage.
     *
     * @tags Auction items
     * @name AuctionsAuctionItemsStore
     * @summary Store auction item
     * @request POST:/auctions/{auction}/auction-items
     */
    auctionsAuctionItemsStore: (auction: string, data: AuctionItemRequest, params: RequestParams = {}) =>
      this.request<AuctionsAuctionItemsStoreData, Error>({
        path: `/auctions/${auction}/auction-items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auctionItems = {
    /**
     * @description Display the specified auction item.
     *
     * @tags Auction items
     * @name AuctionItemsShow
     * @summary Show auction item
     * @request GET:/auction-items/{auctionItem}
     */
    auctionItemsShow: (auctionItem: string, params: RequestParams = {}) =>
      this.request<AuctionItemsShowData, Error>({
        path: `/auction-items/${auctionItem}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified auction item in storage.
     *
     * @tags Auction items
     * @name AuctionItemsUpdate
     * @summary Update auction item
     * @request PATCH:/auction-items/{auctionItem}
     */
    auctionItemsUpdate: (auctionItem: string, data: AuctionItemRequest, params: RequestParams = {}) =>
      this.request<AuctionItemsUpdateData, Error>({
        path: `/auction-items/${auctionItem}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified auction item from storage.
     *
     * @tags Auction items
     * @name AuctionItemsDestroy
     * @summary Delete auction item
     * @request DELETE:/auction-items/{auctionItem}
     */
    auctionItemsDestroy: (auctionItem: string, params: RequestParams = {}) =>
      this.request<AuctionItemsDestroyData, Error>({
        path: `/auction-items/${auctionItem}`,
        method: "DELETE",
        ...params,
      }),
  };
  buyers = {
    /**
     * @description Display a listing of the buyers.
     *
     * @tags Buyers
     * @name BuyersIndex
     * @summary List buyers
     * @request GET:/buyers
     */
    buyersIndex: (query: BuyersIndexParams, params: RequestParams = {}) =>
      this.request<BuyersIndexData, Error>({
        path: `/buyers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created buyer in storage.
     *
     * @tags Buyers
     * @name BuyersStore
     * @summary Store buyer
     * @request POST:/buyers
     */
    buyersStore: (data: BuyerRequest, params: RequestParams = {}) =>
      this.request<BuyersStoreData, Error>({
        path: `/buyers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified buyer.
     *
     * @tags Buyers
     * @name BuyersShow
     * @summary Show buyer
     * @request GET:/buyers/{buyer}
     */
    buyersShow: (buyer: string, params: RequestParams = {}) =>
      this.request<BuyersShowData, Error>({
        path: `/buyers/${buyer}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified buyer in storage.
     *
     * @tags Buyers
     * @name BuyersUpdate
     * @summary Update buyer
     * @request PATCH:/buyers/{buyer}
     */
    buyersUpdate: (buyer: string, data: BuyerRequest, params: RequestParams = {}) =>
      this.request<BuyersUpdateData, Error>({
        path: `/buyers/${buyer}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified buyer from storage.
     *
     * @tags Buyers
     * @name BuyersDestroy
     * @summary Delete buyer
     * @request DELETE:/buyers/{buyer}
     */
    buyersDestroy: (buyer: string, params: RequestParams = {}) =>
      this.request<BuyersDestroyData, Error>({
        path: `/buyers/${buyer}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Display a listing of the buyer items.
     *
     * @tags Buyers
     * @name BuyersItemsIndex
     * @summary List buyer items
     * @request GET:/buyers/{buyer}/items
     */
    buyersItemsIndex: ({ buyer, ...query }: BuyersItemsIndexParams, params: RequestParams = {}) =>
      this.request<BuyersItemsIndexData, Error>({
        path: `/buyers/${buyer}/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  productCategories = {
    /**
     * @description Display a list of the Atlas API product categories.
     *
     * @tags Product categories
     * @name ProductCategoriesIndex
     * @summary List product categories
     * @request GET:/product-categories
     */
    productCategoriesIndex: (query: ProductCategoriesIndexParams, params: RequestParams = {}) =>
      this.request<ProductCategoriesIndexData, Error>({
        path: `/product-categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * @description Display a listing of all images connected to the product.
     *
     * @tags Product images
     * @name ProductsImagesIndex
     * @summary List images of product.
     * @request GET:/products/{product}/images
     */
    productsImagesIndex: (product: string, params: RequestParams = {}) =>
      this.request<ProductsImagesIndexData, Error>({
        path: `/products/${product}/images`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Store an image in Simple Storage Service-storage in folder.
     *
     * @tags Product images
     * @name ProductsImagesStore
     * @summary Store an image.
     * @request POST:/products/{product}/images
     */
    productsImagesStore: (product: string, data: ProductsImagesStorePayload, params: RequestParams = {}) =>
      this.request<ProductsImagesStoreData, Error>({
        path: `/products/${product}/images`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Sorting images for a product.
     *
     * @tags Product images
     * @name ProductsImagesSorting
     * @summary Sorting images.
     * @request PATCH:/products/{product}/images/sorting
     */
    productsImagesSorting: (product: string, data: ProductsImagesSortingPayload, params: RequestParams = {}) =>
      this.request<ProductsImagesSortingData, Error>({
        path: `/products/${product}/images/sorting`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Display a listing of the products.
     *
     * @tags Products
     * @name ProductsIndex
     * @summary List products
     * @request GET:/products
     */
    productsIndex: (query: ProductsIndexParams, params: RequestParams = {}) =>
      this.request<ProductsIndexData, Error>({
        path: `/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created product in storage.
     *
     * @tags Products
     * @name ProductsStore
     * @summary Store products
     * @request POST:/products
     */
    productsStore: (data: ProductRequest, params: RequestParams = {}) =>
      this.request<ProductsStoreData, Error>({
        path: `/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified product.
     *
     * @tags Products
     * @name ProductsShow
     * @summary Show product
     * @request GET:/products/{product}
     */
    productsShow: (product: string, params: RequestParams = {}) =>
      this.request<ProductsShowData, Error>({
        path: `/products/${product}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified product in storage.
     *
     * @tags Products
     * @name ProductsUpdate
     * @summary Update product
     * @request PATCH:/products/{product}
     */
    productsUpdate: (product: string, data: ProductUpdate, params: RequestParams = {}) =>
      this.request<ProductsUpdateData, Error>({
        path: `/products/${product}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified product from storage.
     *
     * @tags Products
     * @name ProductsDestroy
     * @summary Delete product
     * @request DELETE:/products/{product}
     */
    productsDestroy: (product: string, params: RequestParams = {}) =>
      this.request<ProductsDestroyData, Error>({
        path: `/products/${product}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Assign users to the selected product.
     *
     * @tags Products
     * @name ProductsAssign
     * @summary Set product assignees
     * @request POST:/products/{product}/assign
     */
    productsAssign: (product: string, data: ProductsAssignPayload, params: RequestParams = {}) =>
      this.request<ProductsAssignData, Error>({
        path: `/products/${product}/assign`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created buyer item for the specified product.
     *
     * @tags Product buyer items
     * @name ProductsBuyerItemsStore
     * @summary Store a buyer item
     * @request POST:/products/{product}/buyer-items
     */
    productsBuyerItemsStore: (product: string, data: BuyerItemRequest, params: RequestParams = {}) =>
      this.request<ProductsBuyerItemsStoreData, Error>({
        path: `/products/${product}/buyer-items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display a listing of the product publications.
     *
     * @tags Products
     * @name ProductsPublicationsIndex
     * @summary List product publications
     * @request GET:/products/{product}/publications
     */
    productsPublicationsIndex: (product: string, params: RequestParams = {}) =>
      this.request<ProductsPublicationsIndexData, Error>({
        path: `/products/${product}/publications`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Synchronize the sections of the specified product.
     *
     * @tags Products
     * @name ProductsSections
     * @summary Sync product sections
     * @request PATCH:/products/{product}/sections
     */
    productsSections: (product: string, data: ProductsSectionsPayload, params: RequestParams = {}) =>
      this.request<ProductsSectionsData, Error>({
        path: `/products/${product}/sections`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created log for product in storage.
     *
     * @tags Products
     * @name ProductsLogsStore
     * @summary Store product log
     * @request POST:/products/{product}/logs
     */
    productsLogsStore: (product: string, data: ProductLogRequest, params: RequestParams = {}) =>
      this.request<ProductsLogsStoreData, Error>({
        path: `/products/${product}/logs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display a listing of the product publications.
     *
     * @tags Product publications
     * @name ProductsProductPublicationsIndex
     * @summary List product publications
     * @request GET:/products/{product}/product-publications
     */
    productsProductPublicationsIndex: (product: string, params: RequestParams = {}) =>
      this.request<ProductsProductPublicationsIndexData, Error>({
        path: `/products/${product}/product-publications`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Store product publication to the selected product.
     *
     * @tags Product publications
     * @name ProductsProductPublicationsStore
     * @summary Store product publications
     * @request POST:/products/{product}/product-publications
     */
    productsProductPublicationsStore: (product: string, data: ProductPublicationRequest, params: RequestParams = {}) =>
      this.request<ProductsProductPublicationsStoreData, Error>({
        path: `/products/${product}/product-publications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  buyerItems = {
    /**
     * @description Delete the specified buyer item from storage.
     *
     * @tags Product buyer items
     * @name BuyerItemsDestroy
     * @summary Delete buyer item
     * @request DELETE:/buyer-items/{buyerItem}
     */
    buyerItemsDestroy: (buyerItem: string, params: RequestParams = {}) =>
      this.request<BuyerItemsDestroyData, Error>({
        path: `/buyer-items/${buyerItem}`,
        method: "DELETE",
        ...params,
      }),
  };
  productPublications = {
    /**
     * @description Delete the specified product publication from storage.
     *
     * @tags Product publications
     * @name ProductPublicationsDestroy
     * @summary Delete product publication
     * @request DELETE:/product-publications/{productPublication}
     */
    productPublicationsDestroy: (productPublication: string, params: RequestParams = {}) =>
      this.request<ProductPublicationsDestroyData, Error>({
        path: `/product-publications/${productPublication}`,
        method: "DELETE",
        ...params,
      }),
  };
  projects = {
    /**
     * @description Display a listing of the projects.
     *
     * @tags Projects
     * @name ProjectsIndex
     * @summary List projects
     * @request GET:/projects
     */
    projectsIndex: (query: ProjectsIndexParams, params: RequestParams = {}) =>
      this.request<ProjectsIndexData, Error>({
        path: `/projects`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created project in storage.
     *
     * @tags Projects
     * @name ProjectsStore
     * @summary Store project
     * @request POST:/projects
     */
    projectsStore: (data: ProjectRequest, params: RequestParams = {}) =>
      this.request<ProjectsStoreData, Error>({
        path: `/projects`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified project.
     *
     * @tags Projects
     * @name ProjectsShow
     * @summary Show project
     * @request GET:/projects/{project}
     */
    projectsShow: (project: string, params: RequestParams = {}) =>
      this.request<ProjectsShowData, Error>({
        path: `/projects/${project}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified project in storage.
     *
     * @tags Projects
     * @name ProjectsUpdate
     * @summary Update project
     * @request PATCH:/projects/{project}
     */
    projectsUpdate: (project: string, data: ProjectRequest, params: RequestParams = {}) =>
      this.request<ProjectsUpdateData, Error>({
        path: `/projects/${project}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified project from storage.
     *
     * @tags Projects
     * @name ProjectsDestroy
     * @summary Delete project
     * @request DELETE:/projects/{project}
     */
    projectsDestroy: (project: string, params: RequestParams = {}) =>
      this.request<ProjectsDestroyData, Error>({
        path: `/projects/${project}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Display a listing of all products connected to the project.
     *
     * @tags Projects
     * @name ProjectsProductsIndex
     * @summary Show products for selected project.
     * @request GET:/projects/{project}/products
     */
    projectsProductsIndex: ({ project, ...query }: ProjectsProductsIndexParams, params: RequestParams = {}) =>
      this.request<ProjectsProductsIndexData, Error>({
        path: `/projects/${project}/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Display a listing of all images connected to the project.
     *
     * @tags Project images
     * @name ProjectsImagesIndex
     * @summary List images of project.
     * @request GET:/projects/{project}/images
     */
    projectsImagesIndex: (project: string, params: RequestParams = {}) =>
      this.request<ProjectsImagesIndexData, Error>({
        path: `/projects/${project}/images`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Store an image in Simple Storage Service-storage in folder.
     *
     * @tags Project images
     * @name ProjectsImagesStore
     * @summary Store an image.
     * @request POST:/projects/{project}/images
     */
    projectsImagesStore: (project: string, data: ProjectsImagesStorePayload, params: RequestParams = {}) =>
      this.request<ProjectsImagesStoreData, Error>({
        path: `/projects/${project}/images`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Sorting images for a project.
     *
     * @tags Project images
     * @name ProjectsImagesSorting
     * @summary Sorting images.
     * @request PATCH:/projects/{project}/images/sorting
     */
    projectsImagesSorting: (project: string, data: ProjectsImagesSortingPayload, params: RequestParams = {}) =>
      this.request<ProjectsImagesSortingData, Error>({
        path: `/projects/${project}/images/sorting`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  publications = {
    /**
     * @description Display a listing of the publications.
     *
     * @tags Publications
     * @name PublicationsIndex
     * @summary List publications
     * @request GET:/publications
     */
    publicationsIndex: (params: RequestParams = {}) =>
      this.request<PublicationsIndexData, Error>({
        path: `/publications`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * @description Display a listing of the orders.
     *
     * @tags Orders
     * @name OrdersIndex
     * @summary List orders
     * @request GET:/orders
     */
    ordersIndex: (query: OrdersIndexParams, params: RequestParams = {}) =>
      this.request<OrdersIndexData, Error>({
        path: `/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created order in storage.
     *
     * @tags Orders
     * @name OrdersStore
     * @summary Store order
     * @request POST:/orders
     */
    ordersStore: (data: OrdersStorePayload, params: RequestParams = {}) =>
      this.request<OrdersStoreData, Error>({
        path: `/orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified order.
     *
     * @tags Orders
     * @name OrdersShow
     * @summary Show order
     * @request GET:/orders/{order}
     */
    ordersShow: (order: string, params: RequestParams = {}) =>
      this.request<OrdersShowData, Error>({
        path: `/orders/${order}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified order in storage.
     *
     * @tags Orders
     * @name OrdersUpdate
     * @summary Update order
     * @request PATCH:/orders/{order}
     */
    ordersUpdate: (order: string, data: OrdersUpdatePayload, params: RequestParams = {}) =>
      this.request<OrdersUpdateData, Error>({
        path: `/orders/${order}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified order from storage.
     *
     * @tags Orders
     * @name OrdersDestroy
     * @summary Delete order
     * @request DELETE:/orders/{order}
     */
    ordersDestroy: (order: string, params: RequestParams = {}) =>
      this.request<OrdersDestroyData, Error>({
        path: `/orders/${order}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Display a listing of all products connected to the order.
     *
     * @tags Order products
     * @name OrdersOrderProductsIndex
     * @summary List products for selected order
     * @request GET:/orders/{order}/order-products
     */
    ordersOrderProductsIndex: ({ order, ...query }: OrdersOrderProductsIndexParams, params: RequestParams = {}) =>
      this.request<OrdersOrderProductsIndexData, Error>({
        path: `/orders/${order}/order-products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created order product in storage.
     *
     * @tags Order products
     * @name OrdersOrderProductsStore
     * @summary Store order product
     * @request POST:/orders/{order}/order-products
     */
    ordersOrderProductsStore: (order: string, data: OrdersOrderProductsStorePayload, params: RequestParams = {}) =>
      this.request<OrdersOrderProductsStoreData, Error>({
        path: `/orders/${order}/order-products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  orderProducts = {
    /**
     * @description Display order product.
     *
     * @tags Order products
     * @name OrderProductsShow
     * @summary Show order product
     * @request GET:/order-products/{orderProduct}
     */
    orderProductsShow: (orderProduct: string, params: RequestParams = {}) =>
      this.request<OrderProductsShowData, Error>({
        path: `/order-products/${orderProduct}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update order product.
     *
     * @tags Order products
     * @name OrderProductsUpdate
     * @summary Update order product
     * @request PATCH:/order-products/{orderProduct}
     */
    orderProductsUpdate: (orderProduct: string, data: OrderProductsUpdatePayload, params: RequestParams = {}) =>
      this.request<OrderProductsUpdateData, Error>({
        path: `/order-products/${orderProduct}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified order product from storage.
     *
     * @tags Order products
     * @name OrderProductsDestroy
     * @summary Delete order product
     * @request DELETE:/order-products/{orderProduct}
     */
    orderProductsDestroy: (orderProduct: string, params: RequestParams = {}) =>
      this.request<OrderProductsDestroyData, Error>({
        path: `/order-products/${orderProduct}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Change the status of product parts and merge them into 1 product.
     *
     * @tags Order products
     * @name OrdersOrderProductsMerge
     * @summary Merge order product parts
     * @request POST:/order-products/{orderProduct}/merge
     */
    ordersOrderProductsMerge: (orderProduct: string, data: MergeOrderProductRequest, params: RequestParams = {}) =>
      this.request<OrdersOrderProductsMergeData, Error>({
        path: `/order-products/${orderProduct}/merge`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Overview of order products
     *
     * @tags Order products
     * @name OrderProductsIndex
     * @summary List order products
     * @request GET:/order-products
     */
    orderProductsIndex: (query: OrderProductsIndexParams, params: RequestParams = {}) =>
      this.request<OrderProductsIndexData, Error>({
        path: `/order-products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  images = {
    /**
     * @description Delete image from S3-storage and remove relation from resource.
     *
     * @tags Images
     * @name ImagesDestroy
     * @summary Delete image.
     * @request DELETE:/images/{image}
     */
    imagesDestroy: (image: string, params: RequestParams = {}) =>
      this.request<ImagesDestroyData, Error>({
        path: `/images/${image}`,
        method: "DELETE",
        ...params,
      }),
  };
  resetPassword = {
    /**
     * @description This operation requires [CSRF protection](#operation/session).
     *
     * @tags Authentication
     * @name PasswordReset
     * @summary Reset the user's password
     * @request POST:/reset-password
     */
    passwordReset: (data: PasswordResetPayload, params: RequestParams = {}) =>
      this.request<PasswordResetData, Error>({
        path: `/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  sanctum = {
    /**
     * @description Create a new access token for mobile applications.
     *
     * @tags Authentication
     * @name SanctumToken
     * @summary Bearer authentication
     * @request POST:/sanctum/token
     */
    sanctumToken: (data: SanctumTokenPayload, params: RequestParams = {}) =>
      this.request<SanctumTokenData, Error>({
        path: `/sanctum/token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To authenticate the SPA, the "login" page should first make a request to this endpoint to initialize CSRF protection for the application. See: https://laravel.com/docs/10.x/sanctum#csrf-protection
     *
     * @tags CSRF
     * @name SanctumCsrfCookie
     * @summary Initialize CSRF
     * @request GET:/sanctum/csrf-cookie
     */
    sanctumCsrfCookie: (params: RequestParams = {}) =>
      this.request<SanctumCsrfCookieData, any>({
        path: `/sanctum/csrf-cookie`,
        method: "GET",
        ...params,
      }),
  };
  roles = {
    /**
     * @description Display a listing of the roles.
     *
     * @tags Roles
     * @name RolesIndex
     * @summary List roles
     * @request GET:/roles
     */
    rolesIndex: (params: RequestParams = {}) =>
      this.request<RolesIndexData, Error>({
        path: `/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  qrCodes = {
    /**
     * @description Display a listing of the QR codes.
     *
     * @tags QR codes
     * @name QrCodesIndex
     * @summary List QR codes
     * @request GET:/qr-codes
     */
    qrCodesIndex: (query: QrCodesIndexParams, params: RequestParams = {}) =>
      this.request<QrCodesIndexData, Error>({
        path: `/qr-codes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified product or section by QR code.
     *
     * @tags QR codes
     * @name QrCodesShow
     * @summary Show QR code
     * @request GET:/qr-codes/{qrCode}
     */
    qrCodesShow: (qrCode: string, params: RequestParams = {}) =>
      this.request<QrCodesShowData, Error>({
        path: `/qr-codes/${qrCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update QR code.
     *
     * @tags QR codes
     * @name QrCodesUpdate
     * @summary Update QR code
     * @request PATCH:/qr-codes/{qrCode}
     */
    qrCodesUpdate: (qrCode: string, data: QrCodesUpdatePayload, params: RequestParams = {}) =>
      this.request<QrCodesUpdateData, Error>({
        path: `/qr-codes/${qrCode}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  schedules = {
    /**
     * @description Display a listing of the schedules.
     *
     * @tags Schedules
     * @name SchedulesIndex
     * @summary List schedules
     * @request GET:/schedules
     */
    schedulesIndex: (query: SchedulesIndexParams, params: RequestParams = {}) =>
      this.request<SchedulesIndexData, Error>({
        path: `/schedules`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created schedule in storage.
     *
     * @tags Schedules
     * @name SchedulesStore
     * @summary Store schedule
     * @request POST:/schedules
     */
    schedulesStore: (data: ScheduleRequest, params: RequestParams = {}) =>
      this.request<SchedulesStoreData, Error>({
        path: `/schedules`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified schedule.
     *
     * @tags Schedules
     * @name SchedulesShow
     * @summary Show schedule
     * @request GET:/schedules/{schedule}
     */
    schedulesShow: (schedule: string, params: RequestParams = {}) =>
      this.request<SchedulesShowData, Error>({
        path: `/schedules/${schedule}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified schedule in storage.
     *
     * @tags Schedules
     * @name SchedulesUpdate
     * @summary Update schedule
     * @request PUT:/schedules/{schedule}
     */
    schedulesUpdate: (schedule: string, data: ScheduleRequest, params: RequestParams = {}) =>
      this.request<SchedulesUpdateData, Error>({
        path: `/schedules/${schedule}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified schedule from storage.
     *
     * @tags Schedules
     * @name SchedulesDestroy
     * @summary Delete schedule
     * @request DELETE:/schedules/{schedule}
     */
    schedulesDestroy: (schedule: string, params: RequestParams = {}) =>
      this.request<SchedulesDestroyData, Error>({
        path: `/schedules/${schedule}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Assign tasks to the selected schedule.
     *
     * @tags Schedules
     * @name SchedulesTask
     * @summary Set schedule tasks
     * @request PATCH:/schedules/{schedule}/tasks
     */
    schedulesTask: (schedule: string, data: SchedulesTaskPayload, params: RequestParams = {}) =>
      this.request<SchedulesTaskData, Error>({
        path: `/schedules/${schedule}/tasks`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Assign users to the selected schedule.
     *
     * @tags Schedules
     * @name ScheduleAssign
     * @summary Set schedule assignees
     * @request PATCH:/schedules/{schedule}/assign
     */
    scheduleAssign: (schedule: string, data: ScheduleAssignPayload, params: RequestParams = {}) =>
      this.request<ScheduleAssignData, Error>({
        path: `/schedules/${schedule}/assign`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sections = {
    /**
     * @description Display a listing of the sections.
     *
     * @tags Sections
     * @name SectionsIndex
     * @summary List sections
     * @request GET:/sections
     */
    sectionsIndex: (query: SectionsIndexParams, params: RequestParams = {}) =>
      this.request<SectionsIndexData, Error>({
        path: `/sections`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created section in storage.
     *
     * @tags Sections
     * @name SectionsStore
     * @summary Store section
     * @request POST:/sections
     */
    sectionsStore: (data: SectionRequest, params: RequestParams = {}) =>
      this.request<SectionsStoreData, Error>({
        path: `/sections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified section.
     *
     * @tags Sections
     * @name SectionsShow
     * @summary Show section
     * @request GET:/sections/{section}
     */
    sectionsShow: (section: string, params: RequestParams = {}) =>
      this.request<SectionsShowData, Error>({
        path: `/sections/${section}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified section in storage.
     *
     * @tags Sections
     * @name SectionsUpdate
     * @summary Update section
     * @request PATCH:/sections/{section}
     */
    sectionsUpdate: (section: string, data: SectionRequest, params: RequestParams = {}) =>
      this.request<SectionsUpdateData, Error>({
        path: `/sections/${section}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified section from storage.
     *
     * @tags Sections
     * @name SectionsDestroy
     * @summary Delete section
     * @request DELETE:/sections/{section}
     */
    sectionsDestroy: (section: string, params: RequestParams = {}) =>
      this.request<SectionsDestroyData, Error>({
        path: `/sections/${section}`,
        method: "DELETE",
        ...params,
      }),
  };
  tasks = {
    /**
     * @description Display a listing of the tasks.
     *
     * @tags Tasks
     * @name TasksIndex
     * @summary List tasks
     * @request GET:/tasks
     */
    tasksIndex: (query: TasksIndexParams, params: RequestParams = {}) =>
      this.request<TasksIndexData, Error>({
        path: `/tasks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created task in storage.
     *
     * @tags Tasks
     * @name TasksStore
     * @summary Store task
     * @request POST:/tasks
     */
    tasksStore: (data: TaskRequest, params: RequestParams = {}) =>
      this.request<TasksStoreData, Error>({
        path: `/tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified task.
     *
     * @tags Tasks
     * @name TasksShow
     * @summary Show task
     * @request GET:/tasks/{task}
     */
    tasksShow: (task: string, params: RequestParams = {}) =>
      this.request<TasksShowData, Error>({
        path: `/tasks/${task}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified task in storage.
     *
     * @tags Tasks
     * @name TasksUpdate
     * @summary Update task
     * @request PUT:/tasks/{task}
     */
    tasksUpdate: (task: string, data: TaskRequest, params: RequestParams = {}) =>
      this.request<TasksUpdateData, Error>({
        path: `/tasks/${task}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified task from storage.
     *
     * @tags Tasks
     * @name TasksDestroy
     * @summary Delete task
     * @request DELETE:/tasks/{task}
     */
    tasksDestroy: (task: string, params: RequestParams = {}) =>
      this.request<TasksDestroyData, Error>({
        path: `/tasks/${task}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Complete the selected task.
     *
     * @tags Tasks
     * @name TasksComplete
     * @summary Complete task
     * @request POST:/tasks/{task}/complete
     */
    tasksComplete: (task: string, params: RequestParams = {}) =>
      this.request<TasksCompleteData, Error>({
        path: `/tasks/${task}/complete`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Allocate the selected task.
     *
     * @tags Tasks
     * @name TasksAllocate
     * @summary Allocate task
     * @request POST:/tasks/{product}/allocate
     */
    tasksAllocate: (product: string, data: TaskAllocateRequest, params: RequestParams = {}) =>
      this.request<TasksAllocateData, Error>({
        path: `/tasks/${product}/allocate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * @description Displays information about the currently authenticated user.
     *
     * @tags Current User
     * @name UserShow
     * @summary User
     * @request GET:/user
     */
    userShow: (params: RequestParams = {}) =>
      this.request<UserShowData, Error>({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the current user information.
     *
     * @tags Current User
     * @name UserUpdate
     * @summary User update
     * @request PUT:/user
     */
    userUpdate: (data: UserUpdatePayload, params: RequestParams = {}) =>
      this.request<UserUpdateData, Error>({
        path: `/user`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the user's password.
     *
     * @tags Current User
     * @name UserPassword
     * @summary User password
     * @request POST:/user/change-password
     */
    userPassword: (data: UserPasswordPayload, params: RequestParams = {}) =>
      this.request<UserPasswordData, Error>({
        path: `/user/change-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  users = {
    /**
     * @description Display a listing of the users.
     *
     * @tags Users
     * @name UsersIndex
     * @summary List users
     * @request GET:/users
     */
    usersIndex: (query: UsersIndexParams, params: RequestParams = {}) =>
      this.request<UsersIndexData, Error>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Store a newly created user in storage.
     *
     * @tags Users
     * @name UsersStore
     * @summary Store users
     * @request POST:/users
     */
    usersStore: (data: UserRequest, params: RequestParams = {}) =>
      this.request<UsersStoreData, Error>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Display the specified user.
     *
     * @tags Users
     * @name UsersShow
     * @summary Show user
     * @request GET:/users/{user}
     */
    usersShow: (user: string, params: RequestParams = {}) =>
      this.request<UsersShowData, Error>({
        path: `/users/${user}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the specified users in storage.
     *
     * @tags Users
     * @name UsersUpdate
     * @summary Update users
     * @request PUT:/users/{user}
     */
    usersUpdate: (user: string, data: UserRequest, params: RequestParams = {}) =>
      this.request<UsersUpdateData, Error>({
        path: `/users/${user}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the specified user from storage.
     *
     * @tags Users
     * @name UsersDestroy
     * @summary Delete user
     * @request DELETE:/users/{user}
     */
    usersDestroy: (user: string, params: RequestParams = {}) =>
      this.request<UsersDestroyData, Error>({
        path: `/users/${user}`,
        method: "DELETE",
        ...params,
      }),
  };
}
