<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="card">
                <div class="card-header">
                    Add a item
                </div>
                <div class="card-body">
                    <form v-on:submit.prevent="addItem">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="item.name" placeholder="add name">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="item.price" placeholder="add price">
                        </div>
                        <button type="submit" class="btn btn-primary">Insert</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "createItem",
        data() {
            return {
                item: {}
            }
        },
        methods: {
            addItem() {
                this.axios.post('/item', this.item)
                    .then(res => {
                        this.$router.replace({name: 'displayItem'})
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>