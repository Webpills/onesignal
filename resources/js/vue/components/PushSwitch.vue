<template>
   <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" :id="id" v-model="checked" @change="changeEvent" />
   </div>

</template>


<script>
import { computed, onMounted} from 'vue';


import { useOneSignal } from "@onesignal/onesignal-vue3";

export default {
    props: ["id"],
    
    
    data() {
        return {
            checked: false,
            
        }
    },
    
    methods: {
            changeEvent() {
            //    console.log(this.checked);
                if(this.checked){
                    this.pushOn();
                }else{
                    this.pushOff();
                }
            },
           
             
           
           
    },
    setup(){
       
        const oneSignal = useOneSignal();
    
        const pushOn = async () => {
                // Logica per interagire con OneSignal
                if (oneSignal.User.PushSubscription.optedIn) {
                    console.log('Le notifiche push sono già abilitate.');
                    // await oneSignal.User.PushSubscription.optOut();
                } else {
                    console.log('Le notifiche push non sono abilitate. Chiedendo il permesso...');
                    // oneSignal.Slidedown.promptPush();
                    await oneSignal.User.PushSubscription.optIn();
                    // await oneSignal.login('12');
                }
        }
        //disattiva notifiche
        const pushOff = async () => {
     
                if (oneSignal.value.User.PushSubscription.optedIn) {
                    console.log('Le notifiche push sono già abilitate. disabilito');
                    await oneSignal.value.User.PushSubscription.optOut();
                } else {
                    console.log('Le notifiche push non sono abilitate. Chiedendo il permesso...');
                   
                }

           }
        
        onMounted(async () => {
            if (oneSignal.User.PushSubscription.optedIn) {
                    console.log('Le notifiche push sono già abilitate. Imposto switch a SI');
                    $(pushNotificationSwitch).prop("checked", true).trigger('change'); 
                    // await oneSignal.User.PushSubscription.optOut();
                } else {
                    console.log('Le notifiche push non sono abilitate. Imposto switch a NO');
                    
                    $(pushNotificationSwitch).prop("checked", false).trigger('change'); 
                    
                }
         
        });

        return{
           
            pushOn,
            pushOff,
           
            
           
        };
    },
    
}
</script>