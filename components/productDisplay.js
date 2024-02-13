// Vue.component('product-display',{
//     template:
//     /*html*/
//     `<div class="product-display">
//     <div class="product-container">
//       <div class="product-image">
//         <img :class = "{ '.out-of-stock-img': !inStock}" :src="image" :alt="product" srcset="">

//       </div>
//       <div class="product-info">
//         <h1>{{ title }}</h1>
//         <p v-show = "Math.random() > 0.5">Discount 50% OFF</p>
//         <p>{{ description }}</p>
//         <a :href="url">Click Here</a>
//         <button :class = "{ disabledButton : !inStock }" class="button" :disabled = "!inStock" @click="addToCart">Add to Cart</button>
//         <button class="button" @click="removeToCart">Remove the Cart</button>
//         <p v-if = "inStock"> inStock</p>
//         <!-- <p v-else-if = "inventory <= 10 && inventory > 0 ">Almost Out of Stock</p> -->
//         <p v-else> Out of Stock</p>
//         <p v-show = "onSale" :style = "styles">On Sale</p>
        
//         <!-- <ul>
//           <li v-for = "detail in detials">{{ detail }}</li>
//         </ul> -->

//         <ul>
//           <li :style="{ backgroundColor: variant.color }" class="color-circle" v-for = "(variant, index) in variants" :key = "variant.id" @mouseover = "updateVariant(index)" ></li>
//         </ul>

//         <h1>Location</h1>
//         <ul>
//           <li v-for = "item in cities">{{ item.city }}</li>
//         </ul>

//         <h1>Sizes</h1>
//         <ul>
//           <li v-for = "size in sizes">{{ size }}</li>
//         </ul>
        
//       </div>
//     </div>
//   </div>`,
//   data(){
//     return {
//         product : 'Socks',
//         brand : 'vue Mastery',
//         description : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, commodi. At totam, soluta quo odit quis nisi, porro temporibus praesentium deleniti expedita corrupti cumque sed maxime nam ve            ',
//         // image : './assets/images/socks_blue.jpg',
//         selectedVariant : 0,
//         url : 'https://vuejs.org/api/sfc-css-features.html#v-bind-in-css',
//         // inStock : true,
//         // inventory : 0,
//         onSale : true,
//         // details : ["50% Wool", "30% Cotton", "20% polyster"],
//         variants : [{id : 1, color : 'green', image: './assets/images/socks_green.jpg' , quantity : 50, }, {id : 2 , color : 'blue', image: './assets/images/socks_blue.jpg' , quantity : 0}],
//         cities : [{city : 'Multan'}, {city : 'Lahore'}],
//         sizes : ['Small', 'Medium', 'Large'],
//         styles : {
//             color : 'red',
//         }

//     }
// },
// methods : {
//     addToCart(){
//         this.cart += 1;
//     },
//     updateVariant(index){
//         this.selectedVariant = index;
//         console.log(this.variants[this.selectedVariant].quantity);

//     },
//     removeToCart(){
//         this.cart -= 1;
//     }
// },
// computed : {
//     title(){
//         return this.brand + ' ' + this.product;
//     },
//     image(){
//         return this.variants[this.selectedVariant].image;
//     },
//     inStock(){
//         return this.variants[this.selectedVariant].quantity;
//     }

// }
// });