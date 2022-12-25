import {onBeforeUnmount, onMounted, reactive} from "vue";

function savePoint() {

    let point = reactive({
        x: 0,
        y: 0
    })

    function locate(event) {
        point.x = event.pageX
        point.y = event.pageY
    }

    onMounted(() => {
        console.log('onMounted')
        window.addEventListener('click', locate)
    })

    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
        window.removeEventListener('click', locate)
    })

}
