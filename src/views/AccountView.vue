<template>
    <div><h3>帳戶頁面</h3></div>
    <div class="row">
        <div class="list-group">
            <router-link :to="{ name: '帳戶資料' }" class="list-group-item list-group-item-action" aria-current="true">
                帳戶資料
            </router-link>
            <router-link :to="{ name: '帳戶個人資料' }" class="list-group-item list-group-item-action" aria-current="true">
                帳戶個人資料
            </router-link>
            <router-link :to="{name:'子帳號'}" class="list-group-item list-group-item-action" aria-current="true">
                子帳戶
            </router-link>
        </div>
        <div class="co-08">
            <router-view />
        </div>
    </div>
</template>
