<template>
    <div class="container">
        <form v-on:submit.prevent="addItem" class="card">
            <div class="card-title">
                <h1>Add a item</h1>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="item.name" placeholder="add name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control"  v-model="item.price" placeholder="add price">
                </div>
                <button type="submit" class="btn btn-primary">Insert</button>
            </div>
        </form>
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
                    .then(res=> {
                        this.$router.replace({name: 'displayItem'})
                    })
                    .catch(err=>console.log(err))
            }
        }
    }
</script>