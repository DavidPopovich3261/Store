import { create } from 'zustand'

export const useStore = create((set, get) => ({
    count: 0,
    carts: [],
    TotalPrice: 0,
    cartStore: [{
        "id": 1,
        "name": "Canvas Backpack",
        "price": 44.99,
        "category": "Accessories",
        "description": "A simple everyday backpack with space for a laptop and notebooks.",
        "image": "BAG"
    }, {
        "id": 2,
        "name": "Wireless Headphones",
        "price": 89.5,
        "category": "Audio",
        "description": "Comfortable headphones with a clean design for long study sessions.",
        "image": "AUDIO"
    },
    ],
    addCart: (item) => set({ carts: [...get().carts, item] }),
    removeCart: (item) => set((state) => ({ carts: (state.carts).filter((i) => i.id != item.id) })),
    inc: () => set((state) => ({ count: state.count + 1 })),
    dnc: () => set((state) => ({ count: state.count - 1 })),
    incPrice: (Price) => set((state) => ({ TotalPrice: state.TotalPrice + Price })),
    dncPrice: (Price) => set((state) => ({ TotalPrice: state.TotalPrice - Price }))

}))