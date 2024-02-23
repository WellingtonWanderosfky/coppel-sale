export type RequestShelf = Product[]

export interface Product {
  productId: string
  productName: string
  brand: string
  brandId: number
  brandImageUrl: any
  linkText: string
  productReference: string
  productReferenceCode: string
  categoryId: string
  productTitle: string
  metaTagDescription?: string
  releaseDate: string
  clusterHighlights: ClusterHighlights
  productClusters: ProductClusters
  searchableClusters: SearchableClusters
  categories: string[]
  categoriesIds: string[]
  link: string
  description: string
  items: Item[]
  Almacenamiento?: string[]
  "Memoria Ram"?: string[]
  Pantalla?: string[]
  Cámara?: string[]
  Atributos134389?: string[]
  allSpecifications?: string[]
  allSpecificationsGroups?: string[]
  skuSpecifications?: SkuSpecification[]
  "Tipo de Aire"?: string[]
  "Frio/Calor"?: string[]
  "Capacidad en Frigorías"?: string[]
  Atributos134143?: string[]
}

export interface ClusterHighlights {
  "319"?: string
  "356"?: string
  "218"?: string
  "295"?: string
  "354"?: string
  "395"?: string
  "506"?: string
  "349"?: string
  "512"?: string
}

export interface ProductClusters {
  "185": string
  "239"?: string
  "242"?: string
  "255"?: string
  "268": string
  "306": string
  "319"?: string
  "347"?: string
  "356"?: string
  "364"?: string
  "369"?: string
  "412": string
  "522"?: string
  "528"?: string
  "530"?: string
  "553": string
  "143"?: string
  "161"?: string
  "218"?: string
  "295"?: string
  "317"?: string
  "354"?: string
  "362"?: string
  "373"?: string
  "374"?: string
  "384"?: string
  "395"?: string
  "402"?: string
  "425"?: string
  "434"?: string
  "443"?: string
  "445"?: string
  "455"?: string
  "462"?: string
  "475"?: string
  "493"?: string
  "497"?: string
  "506"?: string
  "519"?: string
  "549"?: string
  "551"?: string
  "178"?: string
  "318"?: string
  "349"?: string
  "358"?: string
  "368"?: string
  "427"?: string
  "447"?: string
  "512"?: string
  "531"?: string
  "521"?: string
  "194"?: string
  "518"?: string
  "333"?: string
}

export interface SearchableClusters {
  "185": string
  "239"?: string
  "242"?: string
  "255"?: string
  "143"?: string
  "161"?: string
  "218"?: string
  "295"?: string
  "317"?: string
  "318"?: string
  "194"?: string
}

export interface Item {
  itemId: string
  name: string
  nameComplete: string
  complementName: string
  ean: string
  referenceId: ReferenceId[]
  measurementUnit: string
  unitMultiplier: number
  modalType: any
  isKit: boolean
  images: Image[]
  sellers: Seller[]
  Videos: any[]
  estimatedDateArrival: any
  Color?: string[]
  variations?: string[]
}

export interface ReferenceId {
  Key: string
  Value: string
}

export interface Image {
  imageId: string
  imageLabel: string
  imageTag: string
  imageUrl: string
  imageText: any
  imageLastModified: string
}

export interface Seller {
  sellerId: string
  sellerName: string
  addToCartLink: string
  sellerDefault: boolean
  commertialOffer: CommertialOffer
}

export interface CommertialOffer {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion
  Installments: Installment[]
  DiscountHighLight: any[]
  GiftSkuIds: any[]
  Teasers: any[]
  PromotionTeasers: any[]
  BuyTogether: any[]
  ItemMetadataAttachment: any[]
  Price: number
  ListPrice: number
  PriceWithoutDiscount: number
  RewardValue: number
  PriceValidUntil: string
  AvailableQuantity: number
  IsAvailable: boolean
  Tax: number
  DeliverySlaSamples: DeliverySlaSample[]
  GetInfoErrorMessage: any
  CacheVersionUsedToCallCheckout: string
  PaymentOptions: PaymentOptions
}

export interface DeliverySlaSamplesPerRegion {
  "0": N0
}

export interface N0 {
  DeliverySlaPerTypes: any[]
  Region: any
}

export interface Installment {
  Value: number
  InterestRate: number
  TotalValuePlusInterestRate: number
  NumberOfInstallments: number
  PaymentSystemName: string
  PaymentSystemGroupName: string
  Name: string
}

export interface DeliverySlaSample {
  DeliverySlaPerTypes: any[]
  Region: any
}

export interface PaymentOptions {
  installmentOptions: InstallmentOption[]
  paymentSystems: PaymentSystem[]
  payments: any[]
  giftCards: any[]
  giftCardMessages: any[]
  availableAccounts: any[]
  availableTokens: any[]
}

export interface InstallmentOption {
  paymentSystem: string
  bin: any
  paymentName: string
  paymentGroupName: string
  value: number
  installments: Installment2[]
}

export interface Installment2 {
  count: number
  hasInterestRate: boolean
  interestRate: number
  value: number
  total: number
  sellerMerchantInstallments: SellerMerchantInstallment[]
}

export interface SellerMerchantInstallment {
  id: string
  count: number
  hasInterestRate: boolean
  interestRate: number
  value: number
  total: number
}

export interface PaymentSystem {
  id: number
  name: string
  groupName: string
  validator: any
  stringId: string
  template: string
  requiresDocument: boolean
  isCustom: boolean
  description?: string
  requiresAuthentication: boolean
  dueDate: string
  availablePayments: any
}

export interface SkuSpecification {
  field: Field
  values: Value[]
}

export interface Field {
  id: number
  name: string
  isActive: boolean
  position: number
  type: string
}

export interface Value {
  id: string
  name: string
  position: number
}
