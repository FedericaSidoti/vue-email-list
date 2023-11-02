const createApp = Vue.createApp

createApp({
    data() {
        return {
            mails : [],
            mail : '',
        }
    },
    methods: {
        getMail() {
            axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
                    const email = res.data.response
                    this.mail = email
                    this.mails.push(this.mail)
            })
		},
        getSomeMails(n) {
            for(i=0; i<n; i++) {
                this.getMail()
            }
        }
    },
    created() {
		this.getSomeMails(10)
	},
}).mount('#app')