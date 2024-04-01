import { CellContext } from '@tanstack/react-table'
import { PriceListMenu } from './pricelistMenu'
import { DataBill } from '../types/types'

const getTotalOrderPrice = (e: CellContext<DataBill, number | undefined>) => {
  const menuOrdered = e.row.original.menu
  let totalOrderPrice = 0
  menuOrdered.forEach(e => {
    const temp = totalOrderPrice
    const menuPicked = PriceListMenu.find(x => x.name === e)
    if (menuPicked) {
      totalOrderPrice = temp + menuPicked.price
    }
  })
  return totalOrderPrice
}

export { getTotalOrderPrice }
