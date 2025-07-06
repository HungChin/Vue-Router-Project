<template>
    <div>帳戶頁面</div>
    <div class="row">
        <div class="list-group">
            <router-link :to="{ name: '帳戶資料' }" class="list-group-item list-group-item-action" aria-current="true">
                帳戶資料
            </router-link>
            <router-link :to="{ name: '帳戶個人資料' }" class="list-group-item list-group-item-action" aria-current="true">
                帳戶個人資料
            </router-link>
            <router-link to="subAcc" class="list-group-item list-group-item-action" aria-current="true">
                子帳戶
            </router-link>
            <router-link to="subAcc/subA" class="list-group-item list-group-item-action" aria-current="true">
                子帳戶A
            </router-link>
              <router-link to="subAcc/subB" class="list-group-item list-group-item-action" aria-current="true">
                子帳戶B
            </router-link>
        </div>
        <div class="co-08">
            <router-view />
        </div>
    </div>
</template>
