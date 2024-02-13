const app = Vue.createApp({
    data(){
        return {
            cart : 0,
            premium : true,

        }
    },
    methods : {
        updateCart(){
            this.cart += 1;
        }
    }
})


app.component('product-display',{
    props : {
        type : Boolean,
        required : true,
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :class = "{ '.out-of-stock-img': !inStock}" :src="image" :alt="product" srcset="">

      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show = "Math.random() > 0.5">Discount 50% OFF</p>
        <p>{{ description }}</p>
        <a :href="url">Click Here</a>
        <button :class = "{ disabledButton : !inStock }" class="button" :disabled = "!inStock" @click="addToCart">Add to Cart</button>
        <button class="button" @click="removeToCart">Remove the Cart</button>
        <p v-if = "inStock"> inStock</p>
        <!-- <p v-else-if = "inventory <= 10 && inventory > 0 ">Almost Out of Stock</p> -->
        <p v-else> Out of Stock</p>
        <p v-show = "onSale" :style = "styles">On Sale</p>

        <p>Shipping {{ shipping }}</p>


        
        <!-- <ul>
          <li v-for = "detail in detials">{{ detail }}</li>
        </ul> -->

        <ul>
          <li :style="{ backgroundColor: variant.color }" class="color-circle" v-for = "(variant, index) in variants" :key = "variant.id" @mouseover = "updateVariant(index)" ></li>
        </ul>

        <h1>Location</h1>
        <ul>
          <li v-for = "item in cities">{{ item.city }}</li>
        </ul>

        <h1>Sizes</h1>
        <ul>
          <li v-for = "size in sizes">{{ size }}</li>
        </ul>
        <review-list :reviews = "reviews"></review-list>

        <review-form @review-submitted="addReview"></review-form>
      </div>
    </div>
  </div>`,
  data(){
    return {
        product : 'Socks',
        brand : 'vue Mastery',
        description : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, commodi. At totam, soluta quo odit quis nisi, porro temporibus praesentium deleniti expedita corrupti cumque sed maxime nam ve            ',
        // image : './assets/images/socks_blue.jpg',
        selectedVariant : 0,
        url : 'https://vuejs.org/api/sfc-css-features.html#v-bind-in-css',
        // inStock : true,
        // inventory : 0,
        onSale : true,
        // details : ["50% Wool", "30% Cotton", "20% polyster"],
        variants : [{id : 1, color : 'green', image: './assets/images/socks_green.jpg' , quantity : 50, }, {id : 2 , color : 'blue', image: './assets/images/socks_blue.jpg' , quantity : 0}],
        cities : [{city : 'Multan'}, {city : 'Lahore'}],
        sizes : ['Small', 'Medium', 'Large'],
        styles : {
            color : 'red',
        },
        reviews : [],



    }
},
methods : {
    addToCart(){
        this.$emit('add-to-cart')
    },
    updateVariant(index){
        this.selectedVariant = index;
        console.log(this.variants[this.selectedVariant].quantity);

    },
    removeToCart(){
        this.cart -= 1;
    },
    addReview(review)
    {
        this.reviews.push(review)
        console.log('Received review:', review);
    }
},
computed : {
    title(){
        return this.brand + ' ' + this.product;
    },
    image(){
        return this.variants[this.selectedVariant].image;
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity;
    },
    shipping(){
        if(this.premium){
            return 'Free';
        }
            return 2.34;
    }

}
});


app.component('review-form', {
    template : 
    /*html*/
    `<form class= "review-form" @submit.prevent= "onSubmit">
    <h3>Leave A review</h3>
    <label for="name">Name</label>
    <input id= "name" v-model = 'name'>

    <label for="review">Review</label>
    <textarea id= "review" v-model = 'review'></textarea>
    <label for="review">Review</label>
    <select id="rating" v-model.number = 'rating'>
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <input class= "button" type= "submit" value= "submit">
    </form>`,
    data(){
        return{
            name : '',
            review : '',
            rating : null,

        }
    },
    methods : {
        onSubmit(){
            let productReview = {
                name : this.name,
                review : this.review,
                rating : this.rating,
            }
            console.log(this.name,this.rating,this.review)
            this.$emit('review_submitted', 'product_review');
            this.name = ''
            this.review = ''
            this.rating = ''
        }
    }
});

app.component('review-list', {
    props : {
        reviews :{
            type : Array,
            required : true,

        }
    },
    template : 
    /*html*/
    `
    <div class = "review-container">
    <h3>Add reviews</h3>
    <ul>
    <li v-for = "(review, index) in reviews" :key = "index">
    {{review.name}} gave {{review.rating}} stars
    <br/>
    {{review.review}}

        </li>
    </ul>
    </div>
    `
})