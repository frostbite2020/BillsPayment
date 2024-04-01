export type DataMenu = {
  name: string
  price: number
  type: 'food' | 'drink' | 'other'
}

export type DataBill = {
  no?: number
  name: string
  menu: string[]
  totalOrderPrice?: number
  discount?: number
  totalBill?: number
  statusPay: boolean
}
