import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            items: [{ message: "Hello" }, { message: "world!" }],            
            monObjet: {
                nom: "Patate",
                prénom: "Johnny",
                age: "79"
            },
            nombres: [1, 2, 3, 4, 5, 6]
        }
    },    
    computed: {
        nombrePairs() {
            return this.nombres.filter(n => n % 2 === 0)
        }
    },
    methods: {
        filtreNom(num) {
            if (num < this.monObjet.age) {
                return true
            } else {
                return false
            }

            
        }
                
    },
}).mount('#app')