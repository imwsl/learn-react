export  function sumTwo(a, b) {
    return a + b
}

export function sumOrders(orders = []) {
    if (!orders) return -1
    if (orders.length === 0) return 0
    let total = orders.reduce((price, order) => price + order.price, 0)
    return total
} 