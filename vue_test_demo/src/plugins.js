export default {
    install(Vue){
        console.log("success",Vue)

        Vue.filter('mySlice',(val)=>{
            return val.slice(0,4)
        })
        
        Vue.directive('fbind-number', {
            //绑定时
            bind(element, binding) {
                element.value = binding.value;
            },
            //元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            //模板重新解析时
            update(element, binding) {
                console.log(element.value)
                console.log(binding)
                // element.value = binding.value;
                element.focus();
            }
        })
    }
}
