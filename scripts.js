function getOnelineStatusClass(status) {
    switch (status) {
        case 'OK':
            return ''
        case 'Disabled':
            return 'alert alert-secondary'
        case 'Error':
            return 'alert alert-danger'
        case 'Warn':
            return 'alert alert-warning'
        default:
            break
    }
}

function getWrapStatusClass(status) {
    switch (status) {
        case 'OK':
            return 'alert alert-success'
        case 'Disabled':
            return 'alert alert-secondary'
        case 'Error':
            return 'alert alert-danger'
        case 'Warn':
            return 'alert alert-warning'
        default:
            break
    }
}

Vue.component('section-oneline', {
    props: ['title', 'items'],
    template: `
    <section>
        <h2 class="title2">{{ title }}</h2>
        <div>
            <div class="item-oneline" :class="getOnelineStatusClass(item.Status)" v-for="item in items">
                {{ item.Name }} : {{ item.Details }}    
            </div>
        </div>    
    </section>
    `
})