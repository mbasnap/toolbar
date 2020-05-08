<template>
  <div class="users">
      <div class="users__header">
        <h1>Our cheerful users</h1>
        <h2>Attention! Sorting users by registration date</h2>
      </div>
      <div class="users__list">
          <user-card class="users__card" v-for="(user, i) in usersList" :key="i" :value="user"></user-card>
      </div>
      <div class="row">
        <div :class="['users__btn btn', { disabled: size >= users.length }]"
        @click="showMore += step">Show more</div>
      </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import img from '../assets/img/users/01.png'
export default {
    components: { UserCard },
    data(){
        return {
            users: [
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment-controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
                { name: 'Adolph Blaine Charles David Earl Matthew Matthew', post: 'Leading specialist of the Control Department', email: 'controldepartment@gmail', phone: '+380 50 678 03 24', img },
            ],
            showMore: 0
        }
    },
    computed: {
        step() {
            return 3
        },
        size({ showMore, $mq }) {
            return showMore + ($mq === 'sm' ? 3 : 6)
        },
        usersList({ users, size }) {
            return users.slice(0, size)
        }     
    }
}
</script>

<style lang="scss" scoped>
.users{
    &__header{
        font-family: "Open Sans";
        text-align: center;
        h1{
            letter-spacing: 4px;
            color: #212529;
            font-size: 50px;
            font-weight: 400;
        }
        h2{
            letter-spacing: 1px;
            margin-top: 15px;
            color: #4c4b4b;
            font-size: 16px;
            font-weight: 400;
            
        }
    }
    &__list{
        margin-top: 75px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    &__card{
        flex: 0 1 33.333%;
        padding: 0px 30px;
        height: 275px;
        margin-bottom: 45px;
    }
    &__btn{
        margin: 0px auto;
        &:disabled{
            background-color: grey;
        }
    }
    
}
@media (max-width:768px){
    .users{
        h1{
            font-size: 40px;
        }
    }
}
@media (max-width:640px){
    .users{
        h1{
            font-size: 30px;
            letter-spacing: 0;
        }
        &__list{
            margin: 35px 0px;
        }
    }
}
</style>