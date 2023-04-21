var app = new Vue({
    el: '#app',
    data: {
        message: '',
        message2: ''    
    },
    methods: {
        process: function(){
            if(this.message === '123')
                {
                    console.log("Message is equal to 123");
                    this.message2 = "Message is equal to 123";
                }
            else {
                this.message2 = "Message is NOT equal to 123";
                console.log(this.message2);
            }
                
        }
    }
})