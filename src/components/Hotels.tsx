import React from 'react'
import Menu from './Menu'
import Product from './Product'
import HotelsArray from './HotelsArray'
function Hotels() {
    return (
        <div>
            <Menu />
            <div className="hotelsDiv">
                {
                    HotelsArray.map((item, i) => {
                        let a = {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            offer: item.offer,
                            rating: item.rating,
                        }
                        return <Product {...a}

                        />
                    })
                }

            </div>
        </div>
    )
}

export default Hotels
