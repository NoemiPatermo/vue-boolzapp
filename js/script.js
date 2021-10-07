Vue.config.devtools = true;
new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    user:'./img/avatar_1.jpg',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    user: './img/avatar_2.jpg',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    user: './img/avatar_3.jpg',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    user: './img/avatar_4.jpg',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                    
                },
                
            ],

            indexContacts: 0,
            indexMessage: 0,
            userMessage: '',
            search:'',
        
            
        },
        computed: {
            filteredAndSorted (){
                function compare(a,b){
                 if (a.name < b.name) return -1;
                 if (a.name > b.name) return 1;
                 return 0;
               }
                
              return this.contacts.filter(user => {
                  return user.name.toLowerCase().includes(this.search.toLowerCase())
              }).sort(compare)
             }
                
            },
                                                                    
        methods: { //  Milestone 1
            moveTo: function (index) {
                this.indexContacts = index;
            },
        
             // Milestone 2       
            printMessage: function(index) {

               const status = this.contacts[this.indexContacts].messages[index].status
                if (status === 'sent') {
                    return 'sentMessage';
                    
                } else {
                    return 'receivedMessage';
                }
            },
            
            getCurrentDateTime: function () {
              
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                
            },
            // Milestone 3
            sendMessage: function () {
                this.contacts[this.indexContacts].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.userMessage,
                    status: 'sent',
                });
            
                this.userMessage = "";
                
                setTimeout(() => { //dopo un secondo apparirà la risposta dell'utente
                    this.contacts[this.indexContacts].messages.push({
                        date: this.getCurrentDateTime(),
                        text: "fa caldissimo!",
                        status: 'received',
                    });
                }, 1000);
                
            }
            
           
        }, 
        
       
    } 
 );
  
