<template>
    <div>
        <h3>Show items</h3>

        <table class="table table-hover table-borderer">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{item._id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <router-link :to="{name: 'editItem', params: {id: item._id}}" class="btn btn-dark">Update</router-link>
                        <a href="#" class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "displayItem",
        data() {
            return {
                items: []
            }
        },
        created() {
            this.fetchItems();
        },
        methods: {
            fetchItems() {
                this.axios.get('/item')
                    .then(res => {
                        this.items = res.data;
                    })
                    .catch(err => console.log(err));
            },
            deleteItem(id) {
                const response = confirm('Are you sure?');
                if (response) {
                    this.axios.delete('/item/' + id)
                        .then(res => {
                                this.items.splice(id, 1);
                            }
                        )
                        .catch(err => console.log(err));
                }

            }
        }
    }
</script>