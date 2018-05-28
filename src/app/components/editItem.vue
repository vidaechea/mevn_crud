<template>
    <div class="container">
        <form v-on:submit.prevent="updateItem" class="card">
            <div class="card-title">
                <h1>Update item</h1>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="item.name" placeholder="add name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control"  v-model="item.price" placeholder="add price">
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "editItem",
        data() {
            return {
                item: {}
            }
        },
        created() {
            this.getItem()
        },
        methods: {
            getItem(){
                this.axios.get('/item/' + this.$route.params.id)
                    .then(res => this.item = res.data)
                    .catch(err=>console.log(err))
            },
            updateItem() {
                this.axios.put('/item/'  + this.$route.params.id, this.item)
                    .then(res=> {
                        this.$router.replace({name: 'displayItem'})
                    })
                    .catch(err=>console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>