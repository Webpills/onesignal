require("./bootstrap");

import { createApp, ref } from "vue";

import PushSwitch from "../js/vue/components/PushSwitch";
import OneSignalVuePlugin from "@onesignal/onesignal-vue3";

/* Create app instance */
const app = createApp({});

/* Install the store instance as a plugin */

app.use(OneSignalVuePlugin, {
    appId: "32928de4-f60e-43c0-a3f6-e8589b68b065",
    safari_web_id: "web.onesignal.auto.5ccade99-0f35-4775-9ae0-5e2c3bfd110b",
    notifyButton: {
        enable: false,
    },
    allowLocalhostAsSecureOrigin: true,
});

app.config.productionTip = false;

app.component("pushswitch", PushSwitch);

/* Mount the app */
app.mount("#vueApp");
