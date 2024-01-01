import observable from '../../../utils/notification';
export const notification_layout_actions = {
    toggleNotification:(state)=>{
        state.notification = !state.notification
        const msg = state.notification?"activated now":"unactivated now"
        observable.notify({type:"info",msg});
     }
}