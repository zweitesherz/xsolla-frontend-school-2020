Vue.component('concert', {
    props: ['id','name','date','src'],
    template:  `
<div class="top-concerts-card" :id="id">
     <div class="card-pic" v-bind:style="{ backgroundImage: imageUrl }">
     
<!--        <img class="card-thumb" :src="src">-->
        <p class="card-pic__title" :name = "name">{{ name }}</p>
         <div class="number" :date = "date">{{ date }}</div>
        <div class="icon-top">
             <img src="img/vector.svg" class="icon-top-svg">
         </div>
     </div>
</div>`,
    computed: {
        imageUrl: function() {
            return 'url('+ this.src +')';
        }

    }
});


new Vue({
    el: '#addVue',
    data: {
        monthSelect:  'All',
        citySelected: 'All',
        jsonConcerts: [],
        month: {
            January:"01",
            February:"02",
            March:"03",
            April:"04",
            May:"05",
            June:"06",
            July:"07",
            August:"08",
            September:"09",
            October:"10",
            November:"11",
            December:"12"
        },
    },

   computed: {
       sortedArray: function () {
           let result = this.jsonConcerts;
           if (this.citySelected !== "All") {
               result = result.filter(object => (object.city === this.citySelected));

           }

           if (this.monthSelect !== "All") {
               result = result.filter(object => (object.date.substring(3, 5) === this.month[this.monthSelect]));

           }

           return result;
       }
   },

   methods: {
       getJson: function () {
           axios
           .get('cards.json')
           .then(response => (this.jsonConcerts = response.data));
       }
    },
    beforeMount(){
        this.getJson();

    },


});

